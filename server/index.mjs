import express, { json } from "express";
import * as dotenv from "dotenv"
dotenv.config()
import cors from "cors";
import { login, signup, logout} from "./controllers/registrationController.mjs";
import  authorize  from "./authorize.mjs";
import "./passport.mjs"
const app = express();
// Middleware
app.use(cors());
app.use(json());

//route
//login
app.post("/api/users/login", login);
//signup
app.post("/api/users/signup", signup)
//logout
app.get("/api/users/logout", authorize, logout)
// Avvio del server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `Il server è in esecuzione sulla porta http://localhost:${PORT}.`
  );
});
