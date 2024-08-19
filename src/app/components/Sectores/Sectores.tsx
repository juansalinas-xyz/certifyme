'use client';

import React from "react";
import CardSectores from "../CardSectores/CardSectores";
import BoxReveal from "../BoxReveal/BoxReveal";

interface CardProps {
  cardNumber: number;
  icon: string;
  title: string;
  items: string[];
}

const Sectores = () => {
  const cards: CardProps[] = [
    {
      cardNumber: 1,
      icon: "/home/sectores/educacion.png",
      title: "Instituciones educativas",
      items: ["Diplomas", "Alumnos destacados.", "Trabajos especiales."],
    },
    {
      cardNumber: 2,
      icon: "/home/sectores/empresa.png",
      title: "Empresas",
      items: ["Objetivos alcanzados.", "Ascensos y rotaciones.", "Capacitaciones recibidas."],
    },
    {
      cardNumber: 3,
      icon: "/home/sectores/certificador.png",
      title: "Certificadores",
      items: ["Cumplimiento de requistos.", "Validaciones de proovedores.", "Registros de condiciones."],
    },
  ];

  return (
    <div className="h-auto w-full flex justify-center items-center">
      <div className="h-auto md:w-4/5 flex flex-col items-center justify-start gap-9 md:gap-20 p-10 text-white">
        <div className="w-auto lg:h-[92px]">
          <BoxReveal>
            <h2 className="font-bold text-center text-2xl lg:text-4xl">
              ¿En que sectores se utiliza <b>blockchain</b>?
            </h2>
          </BoxReveal>
        </div>
        <div className="lg:w-4/5 h-auto flex md:flex md:flex-row flex-col justify-between items-center  md:items-stretch gap-6">
          {cards.map((card) => (
            <CardSectores key={card.cardNumber} {...card} />
          ))}
        </div>
        <div className="w-auto h-auto">
          <p className="font-medium text-base lg:text-xl text-center">
            Y numerosas otras industrias...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sectores;
