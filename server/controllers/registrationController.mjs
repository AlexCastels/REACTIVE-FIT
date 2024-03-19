import { db } from "./../db.mjs";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query per ottenere l'utente dal database
    const user = await db.one("SELECT * FROM users WHERE username=$1", username);

    // Verifica se l'utente esiste e se la password è corretta
    if (user && user.password === password) {
      // Genera il token JWT
      const payload = {
        id: user.id,
        username,
      };
      const { SECRET = "" } = process.env;
      const token = jwt.sign(payload, SECRET);

      // Aggiorna il token nell'utente nel database
      await db.none('UPDATE users SET token=$2 WHERE id=$1', [user.id, token]);

      // Invia una risposta con lo stato 200 e il token JWT
      res.status(200).send({ id: user.id, username, token });
    } else {
      // Invia una risposta con lo stato 400 se l'utente non esiste o la password non è corretta
      res.status(400).send({ message: "Username or Password is incorrect." });
    }
  } catch (error) {
    // Gestione degli errori
    console.error("Error:", error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export { login };
