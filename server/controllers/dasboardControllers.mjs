import { db } from "../db.mjs";

const getWeight = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.many(`SELECT * FROM pesi WHERE id_utente = $1;`, id);
    res.json(user);
  } catch (error) {
    console.error("Errore nel caricamento dell'utente:", error);
    res
      .status(500)
      .json({
        error: "Si è verificato un errore durante il caricamento dell'utente.",
      });
  }
};
const postWeight = async (req, res) => {
  const { peso } = req.body;
  const { id } = req.params;
  try {
    const addPeso = await db.oneOrNone(
      `INSERT INTO pesi (id_utente, peso) VALUES ($1, $2) RETURNING *;`,
      [id, peso]
    );
    res.status(200).json(addPeso);
    console.log("ok");
  } catch (error) {
    console.error("Errore nel caricamento dell'utente:", error);
    res
      .status(500)
      .json({
        error: "Si è verificato un errore durante il caricamento dell'utente.",
      });
  }
};

export { getWeight, postWeight };
