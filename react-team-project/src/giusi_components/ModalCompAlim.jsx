
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { TableComp } from "./TableComp";
import { ButtonComponent } from "../style-site/ButtonComponent";

export function ModalCompAlim() {
  const [modalPlacement, setModalPlacement] = useState('center')
  const [openModal, setOpenModal] = useState(false);

const TABLE_HEAD4 = ["Consigli alimentari settimanali", "Alimenti", "Varianti"];
 
const TABLE_ROWS4 = [
  {
    esercizio: "Colazione",
    serie: "1 Yogurt greco magro + muesli (150g) + tisana",
    varianti: "5 biscotti integrali / 5 fette biscottate + marmell light / 2 pancakes ",
  },
  {
    esercizio: "Spuntino",
    serie: "Tisana + 15 mandorle",
    varianti: "1 barretta fitness",
  },
  {
    esercizio: "Pranzo",
    serie: "Pasta integrale 80g + carne magra 150g + verdure + 1 cucch olio",
    varianti: "Patate 240g / Pane integrale / Orzo / Riso (80g) + pesce (150g)",
  },
  {
    esercizio: "Spuntino",
    serie: "Dessert proteico + 5 mandorle + tisana",
    varianti: "Frutta fresca (200g) / 1 barretta fitness + tisana",
  },
  {
    esercizio: "Cena",
    serie: "Riso basmati (70g) + carne magra (200g) + verdure + 1 cucch olio",
    varianti: "Patate (240g) / Pane integrale o segale (80g)",
  },
];

  return (
    <>
    <ButtonComponent onClick={() => setOpenModal(true)} text={"Open"}/>
      <div className="flex flex-wrap">
      <Modal className="bg-black bg-opacity-50 dark:bg-opacity-70 relative h-full max-w-full p-4 md:h-auto" position={modalPlacement} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-black bg-opacity-9"> <p className="text-xl font-bold text-gray-200">Power Board</p></Modal.Header>
        <Modal.Body className="bg-black">
          <div className="space-y-6 gap-10 p-2 align-middle flex">
            <TableComp TABLE_HEAD={TABLE_HEAD4} TABLE_ROWS={TABLE_ROWS4}/>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-end bg-black bg-opacity-95 p-3">
            <ButtonComponent text={"Close"} onClick={() => setOpenModal(false)}/>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}
