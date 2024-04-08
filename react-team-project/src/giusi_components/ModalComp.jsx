
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { TableComp } from "./TableComp";
import { ButtonComponent } from "../style-site/ButtonComponent";

export function ModalComp() {
  const [modalPlacement, setModalPlacement] = useState('center')
  const [openModal, setOpenModal] = useState(false);

const TABLE_HEAD = ["Esercizio GIORNO 1", "Serie", "Recupero"];
 
const TABLE_ROWS = [
  {
    esercizio: "Chest press",
    serie: "4 x 10",
    varianti: "1'",
  },
  {
    esercizio: "Croci panca piana",
    serie: "3 x 15",
    varianti: "2'",
  },
  {
    esercizio: "Shoulder press",
    serie: "4 x 10",
    varianti: "1'",
  },
  {
    esercizio: "Alzate laterali",
    serie: "3 x 15",
    varianti: "1'",
  },
  {
    esercizio: "Pushdown",
    serie: "4 x 12",
    varianti: "2'",
  },
];


const TABLE_HEAD2 = ["Esercizio GIORNO 2", "Serie", "Recupero"];
 
const TABLE_ROWS2 = [
  {
    esercizio: "Leg press",
    serie: "4 x 10",
    varianti: "1'",
  },
  {
    esercizio: "Leg extension",
    serie: "3 x 15",
    varianti: "2'",
  },
  {
    esercizio: "Shoulder press",
    serie: "4 x 10",
    varianti: "1'",
  },
  {
    esercizio: "Leg curl",
    serie: "3 x 15",
    varianti: "1'",
  },
  {
    esercizio: "Plank",
    serie: "4 x 12",
    varianti: "2'",
  },
];


const TABLE_HEAD3 = ["Esercizio GIORNO 3", "Serie", "Recupero"];
 
const TABLE_ROWS3 = [
  {
    esercizio: "Lat machine",
    serie: "4 x 10",
    varianti: "1'",
  },
  {
    esercizio: "Pulley",
    serie: "3 x 15",
    varianti: "2'",
  },
  {
    esercizio: "Pulldown ",
    serie: "4 x 10",
    varianti: "1'",
  },
  {
    esercizio: "Spider curl",
    serie: "3 x 15",
    varianti: "1'",
  },
  {
    esercizio: "Side planK",
    serie: "4 x 12",
    varianti: "2'",
  },
];
  return (
    <>
    <ButtonComponent onClick={() => setOpenModal(true)} text={"Open"}/>
      <div className="flex flex-wrap">
      <Modal className="bg-black bg-opacity-50  dark:bg-opacity-70 relative h-full max-w-full p-4 md:h-auto" position={modalPlacement} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-black bg-opacity-95"> <p className="text-xl font-bold text-gray-200">Workout</p></Modal.Header>
        <Modal.Body className="bg-black">
          <div className="space-y-6 gap-10 p-2 align-middle flex">
            <TableComp TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS}/>
            <TableComp TABLE_HEAD={TABLE_HEAD2} TABLE_ROWS={TABLE_ROWS2}/>
            <TableComp TABLE_HEAD={TABLE_HEAD3} TABLE_ROWS={TABLE_ROWS3}/>
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
