import { db } from "./../db.mjs";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query per ottenere l'utente dal database
    const user = await db.one(
      "SELECT * FROM users WHERE username=$1",
      username
    );

    // Verifica se l'utente esiste e se la password è corretta
    if (user && user.password === password) {
      // Genera il token JWT
      const payload = {
        id: user.id,
        username,
      };
      //importante! attenzione a dove si mette il file .env per  non farlo fuorire con git
      //e per generare correttamente il token di autenticazione deve stare nella dir server
      const { SECRET = "" } = process.env;
      const token = jwt.sign(payload, SECRET);

      // Aggiorna il token nell'utente nel database
      await db.none("UPDATE users SET token=$2 WHERE id=$1", [user.id, token]);

      // Invia una risposta con lo stato 200 e il token JWT
      res.status(200).send({ id: user.id, username, token });
      console.log('ok')
    } else {
      // Invia una risposta con lo stato 400 se l'utente non esiste o la password non è corretta
      res.status(400).send({ message: "Username or Password is incorrect." });
      console.log("ko")
    }
  } catch (error) {
    // Gestione degli errori
    console.error("Error:", error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
//funzione di registrazione
const signup = async (req, res) => {
  // Estrae il nome utente e la password dalla richiesta
  const { username, password } = req.body;
  //controlla che lo username non esista gia'nel database
  const user = await db.oneOrNone(
    "SELECT * FROM users WHERE username=$1",
    username
  );
  //se seiste
  if (user) {
    //lancia un errore
    res.status(409).json({ message: "User already exists." });
  } else {
    //se non esiste, lo inserisce nel database
    const { id } = await db.one(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
      [username, password]
    );
    //messaggio di risposta
    res.status(201).json({ id, msg: "User created successfully!" });
  }
};
const logout = async (req, res)=>{
  const user = req.user;
  await db.none('UPDATE users SET token= $2 WHERE id=$1', [user.id, null])
  res.status(200).json({msg: 'Logged out!'})
}
export { login, signup, logout };
