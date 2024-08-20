import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/SharedComponents/FadeInSection/FadeInSection";
import BotonDrive from "@/SharedComponents/BotonDrive/BotonDrive";
import BotonLinkedin from "@/SharedComponents/BotonLinkedin/BotonLinkedin";

interface CertificadoProps {
  heading: string;
  detail: string;
  institution_logo: string;
  institution_name: string;
  url_linkedin: string;
  url_drive: string;
}

function Informacion({
  heading,
  detail,
  institution_logo,
  institution_name,
  url_linkedin,
  url_drive,
}: CertificadoProps) {
  return (
    <FadeInSection>
      <div className="lg:w-auto h-full lg:h-auto flex flex-col justify-center items-center gap-5 lg:gap-[30px] lg:mb-0 mb-3 mt-5 md:mt-0">
        {/* LOGO EMPRESA QUE EMITE EL CERTIFICADO (Pantallas Grandes) */}
        <div className="hidden w-[80px] h-[80px] rounded-full bg-white lg:flex justify-center items-center overflow-hidden">
          <Image
            src={institution_logo}
            alt={""}
            height={80}
            width={80}
            className="h-auto w-auto"
          />
        </div>
        {/* TITULO DEL CERTIFICADO (Pantallas Grandes) */}
        <div className="w-[301px] hidden lg:block">
          <h2 className="text-white text-center font-bold text-2xl lg:text-[32px] lg:leading-[39px]">
            {heading}
          </h2>
        </div>
        {/* LOGO EMPRESA QUE EMITE EL CERTIFICADO (Pantallas Pequeñas) */}
        <div className="md:hidden flex flex-row gap-4 justify-center items-center w-[301px] h-[70px] px-4">
          <div className="lg:hidden min-w-[62px] min-h-[62px] rounded-full bg-white flex justify-center items-center overflow-hidden">
            <Image
              src={institution_logo}
              alt={""}
              height={62}
              width={62}
              className="h-auto w-auto"
            />
          </div>
          {/* TITULO DEL CERTIFICADO (Pantallas Pequeñas) */}
          <h2 className="text-white font-bold text-xl lg:text-[32px] lg:leading-[39px]">
            {heading}
          </h2>
        </div>
        {/* LOGO EMPRESA QUE EMITE EL CERTIFICADO (Pantallas Medianas) */}
        <div className="lg:hidden hidden md:flex flex-row gap-4 justify-center items-center w-[501px] h-auto px-4">
          <div className="lg:hidden w-[85px] h-[85px] rounded-full bg-white flex justify-center items-center overflow-hidden">
            <Image
              src={institution_logo}
              alt={""}
              height={85}
              width={85}
              className="h-auto w-auto"
            />
          </div>
          {/* TITULO DEL CERTIFICADO (Pantallas Medianas) */}
          <h2 className="text-white font-bold text-3xl lg:text-[32px] lg:leading-[39px] w-[280px]">
            {heading}
          </h2>
        </div>
        {/* DESCRIPCION DEL CERTIFICADO */}
        <div className="w-[301px] md:w-[350px] lg:w-[301px]">
          <p className="text-white text-center font-medium text-[14px] md:text-base lg:text-[19px] leading-[22px]">
            {detail}
          </p>
        </div>
        {/* NOMBRE DE LA EMPRESA EMISORA */}
        <div className="flex justify-center items-center">
          <p className="text-white text-center font-medium text-[14px] md:text-base lg:text-[16px] leading-[22px]">
            Otorgado por {institution_name}
          </p> 
        </div>
        {/* BOTON COMPARTIR EN LINKEDIN */}
        <BotonLinkedin screenSize={"large"} url={url_linkedin} />
        {/* BOTON COMPARTIR EN GOOGLE DRIVE */}
        <BotonDrive screenSize={"large"} url={url_drive} /> 
      </div>
    </FadeInSection>
  );
}

export default Informacion;
