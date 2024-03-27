import express, { json } from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import {
  login,
  signup,
  logout,
} from "./controllers/registrationController.mjs";
import authorize from "./authorize.mjs";
import { getWeight, postWeight } from "./controllers/dasboardControllers.mjs";
import "./passport.mjs";
import { db } from "./db.mjs";
const app = express();
// Middleware

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(json());

//route
//login
app.post("/api/users/login", login);
//signup
app.post("/api/users/signup", signup);
//logout
app.get("/api/users/logout", authorize, logout);
//caricamento utente fake
app.post("/api/users/:id", postWeight);
app.get("/api/users/:id", getWeight);

// Avvio del server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `Il server è in esecuzione sulla porta http://localhost:${PORT}.`
  );
});
