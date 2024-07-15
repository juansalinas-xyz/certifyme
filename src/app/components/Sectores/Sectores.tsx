"use client";

import React, { useState } from "react";
import CardSectores from "../CardSectores/CardSectores";
import BoxReveal from "../BoxReveal/BoxReveal";

interface CardProps {
  cardNumber: number;
  icon: string;
  title: string;
  items: string[];
}

function Sectores() {
  const cards: CardProps[] = [
    {
      cardNumber: 1,
      icon: "/home/sectores/educacion.png",
      title: "Educación",
      items: [
        "Títulos académicos.",
        "Certificados de cursos.",
        "Certificados de participación.",
      ],
    },
    {
      cardNumber: 2,
      icon: "/home/sectores/logistica.png",
      title: "Logística",
      items: ["Certificados de origen.", "Registro de seguimiento."],
    },
    {
      cardNumber: 3,
      icon: "/home/sectores/inmobiliaria.png",
      title: "Inmobiliaria",
      items: [
        "Títulos de propiedad.",
        "Certificados de inspección.",
        "Historiales de propiedad y transacciones.",
      ],
    },
    {
      cardNumber: 4,
      icon: "/home/sectores/legal.png",
      title: "Legal",
      items: ["Contratos y acuerdos.", "Actas notariales y poderes."],
    },
    {
      cardNumber: 5,
      icon: "/home/sectores/arte.png",
      title: "Arte",
      items: [
        "Certificados de autenticidad.",
        "Registro de derechos de autor.",
        "Certificados de propiedad.",
      ],
    },
  ];

  return (
    <div className="h-auto w-full flex justify-center items-center">
      <div className="h-auto md:w-4/5 flex flex-col items-center justify-start gap-9 md:gap-20 p-10 text-white">
        <div className="w-auto lg:h-[92px]">
          <BoxReveal>
            <h2 className="font-medium text-center text-2xl lg:text-4xl">
              ¿En que sectores se utiliza <b>blockchain</b>?
            </h2>
          </BoxReveal>
        </div>
        <div className="w-full h-auto flex lg:flex lg:flex-row flex-col justify-between items-center md:items-center lg:items-stretch gap-6">
          {cards.map((card) => (
            <CardSectores key={card.cardNumber} {...card} />
          ))}
        </div>
      </div>
      {/* <div className="h-auto w-full md:hidden flex flex-col justify-start items-center gap-10 text-white px-10">
        <BoxReveal>
          <h2 className="font-medium text-center text-2xl">
            ¿En que sectores se utiliza <b>blockchain</b>?
          </h2>
        </BoxReveal>
        <div>

        </div>
      </div> */}
    </div>
  );
}

export default Sectores;
