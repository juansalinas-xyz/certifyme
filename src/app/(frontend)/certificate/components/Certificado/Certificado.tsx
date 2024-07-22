import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/app/SharedComponents/FadeInSection/FadeInSection";
import BotonDrive from "@/app/SharedComponents/BotonDrive/BotonDrive";
import BotonLinkedin from "@/app/SharedComponents/BotonLinkedin/BotonLinkedin";

interface CertificadoProps {
  title: string;
  description: string;
  logoInstitucion: string;
  linkBlockchain: string;
  certificado: string;
  urlLinkedin: string;
  expirationDate: string;
}

function Certificado({
  title,
  description,
  logoInstitucion,
  linkBlockchain,
  certificado,
  urlLinkedin,
  expirationDate
}: CertificadoProps) {
  return (
    <div className="w-full lg:w-auto lg:h-auto flex flex-col justify-center items-center gap-7 lg:gap-5">
      {/* IMAGEN DEL CERTIFICADO */}
      <div className="flex items-center lg:mt-10">
        <FadeInSection>
          <div className="w-full flex justify-center lg:justify-start items-center lg:items-start">
            <Image
              src={certificado}
              alt={""}
              height={400}
              width={751}
              className="w-[85%] lg:w-[100%] h-auto"
              priority
            />
          </div>
        </FadeInSection>
      </div>
      {/* VERIFICACIÓN Y EXPIRACIÓN */}
      <div className="w-full flex flex-col items-center gap-2 ">
        {/* LINK DE VERIFICACION EN BLOCKCHAIN */}
        <div className="w-full flex flex-row justify-center gap-1.5 -mt-1 lg:-mt-0">
          <p className="text-white text-center text-[10px] md:text-sm font-normal">
            <FadeInSection>Verificación: </FadeInSection>
          </p>
          <Link
            href={linkBlockchain}
            target="_blank"
            className="text-white text-center text-[10px] md:text-sm font-medium hover:underline"
          >
            <FadeInSection>{linkBlockchain}</FadeInSection>
          </Link>
        </div>
        {/* VALIDEZ */}
        <div className="w-full flex flex-row justify-center gap-1.5 -mt-1 lg:-mt-0">
          <p className="text-white text-center text-[10px] md:text-sm font-normal">
            <FadeInSection>Válido hasta: </FadeInSection>
          </p>
          <FadeInSection><p className="text-white text-center text-[10px] md:text-sm font-medium">{expirationDate}</p></FadeInSection>
        </div>
      </div>
      {/* BOTON DE COMPARTIR EN LINKEDIN (Pantallas Pequeñas)*/}
      <BotonLinkedin screenSize={"small"} url={urlLinkedin} />
      {/* BOTON DE COMPARTIR EN GOOGLE DRIVE (Pantallas Pequeñas)*/}
      <BotonDrive screenSize={"small"} url={urlLinkedin} /> {/* --------- Cambiar por url de DRIVE --------- */}
      {/* BOTON DE COMPARTIR EN LINKEDIN (Pantallas Medianas)*/}
      <BotonLinkedin screenSize={"medium"} url={urlLinkedin} />
      {/* BOTON DE COMPARTIR EN GOOGLE DRIVE (Pantallas Medianas)*/}
      <BotonDrive screenSize={"medium"} url={urlLinkedin} /> {/* --------- Cambiar por url de DRIVE --------- */}
    </div>
  );
}

export default Certificado;
