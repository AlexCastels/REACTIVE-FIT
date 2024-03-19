import express, { json } from "express";
import * as dotenv from "dotenv"
dotenv.config()
import cors from "cors";
import { login } from "./controllers/registrationController.mjs";

const app = express();
// Middleware
app.use(cors());
app.use(json());

//route
app.post("/api/users/login", login);
//app.post("/api/users/login", signup)
// Avvio del server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `Il server è in esecuzione sulla porta http://localhost:${PORT}.`
  );
});
