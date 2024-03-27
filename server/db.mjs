import pgPromise from "pg-promise";
import * as dotenv from "dotenv";
dotenv.config();
const db = pgPromise()("postgres://postgres:270290@localhost:5432/postgres");

const setupDb = async () => {
  try {
    await db.none(`
      DROP TABLE IF EXISTS pesi;
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS pianoAllenamento;

      CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          nome VARCHAR(255),
          cognome VARCHAR(255),
          username VARCHAR(255),
          password VARCHAR(255),
          token VARCHAR(255),
          altezza FLOAT,
          calorie INT,
          numero_di_allenamenti INT
      );

      CREATE TABLE pesi (
          id_utente INT,
          peso FLOAT,
          FOREIGN KEY (id_utente) REFERENCES users(id)
      );
    `);
    await db.none(
      `INSERT INTO users (username, password) VALUES ('admin', 'admin')`
    );
    await db.none(
      "INSERT INTO users (nome, cognome, username, password, altezza, calorie, numero_di_allenamenti) VALUES ('John', 'Doe', 'johndoe', 'password123', 180, 2000, 10)"
    );
    await db.none(
      "INSERT INTO pesi (id_utente, peso) VALUES ($1, $2), ($3, $4), ($5, $6), ($7, $8);",
      [1, 85, 1, 84.9, 1, 84.6, 1, 84.4]
    );

    console.log("Database setup completed.");
  } catch (error) {
    console.error("Error setting up database:", error.message);
  }
};

setupDb();

export { db };
