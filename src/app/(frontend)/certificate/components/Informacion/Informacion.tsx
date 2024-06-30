import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/app/SharedComponents/FadeInSection/FadeInSection";

interface CertificadoProps {
  title: string;
  description: string;
  logoInstitucion: string;
  linkBlockchain: string;
  certificado: string;
  urlLinkedin: string;
}

function Informacion({
  title,
  description,
  logoInstitucion,
  linkBlockchain,
  certificado,
  urlLinkedin,
}: CertificadoProps) {
  return (
    <FadeInSection>
      <div className="lg:w-auto h-full lg:h-full flex flex-col justify-center items-center gap-5 lg:gap-[30px] lg:mb-0 mb-3">
        {/* LOGO EMPRESA QUE EMITE EL CERTIFICADO (Pantallas Grandes) */}
        <div className="hidden w-[80px] h-[80px] rounded-full bg-white lg:flex justify-center items-center overflow-hidden">
          <Image
            src={logoInstitucion}
            alt={""}
            height={80}
            width={80}
            className="h-auto w-auto"
          />
        </div>
        {/* TITULO DEL CERTIFICADO (Pantallas Grandes) */}
        <div className="w-[301px] hidden lg:block">
          <h2 className="text-white text-center font-bold text-2xl lg:text-[32px] lg:leading-[39px]">
            {title}
          </h2>
        </div>
        {/* LOGO EMPRESA QUE EMITE EL CERTIFICADO (Pantallas Pequeñas) */}
        <div className="md:hidden flex flex-row gap-4 justify-center items-center w-[301px] h-[70px] px-4">
          <div className="lg:hidden min-w-[62px] min-h-[62px] rounded-full bg-white flex justify-center items-center overflow-hidden">
            <Image
              src={logoInstitucion}
              alt={""}
              height={62}
              width={62}
              className="h-auto w-auto"
            />
          </div>
          {/* TITULO DEL CERTIFICADO (Pantallas Pequeñas) */}
          <h2 className="text-white font-bold text-xl lg:text-[32px] lg:leading-[39px]">
            {title}
          </h2>
        </div>
        {/* LOGO EMPRESA QUE EMITE EL CERTIFICADO (Pantallas Medianas) */}
        <div className="lg:hidden hidden md:flex flex-row gap-4 justify-center items-center w-[501px] h-auto px-4">
          <div className="lg:hidden w-[85px] h-[85px] rounded-full bg-white flex justify-center items-center overflow-hidden">
            <Image
              src={logoInstitucion}
              alt={""}
              height={85}
              width={85}
              className="h-auto w-auto"
            />
          </div>
          {/* TITULO DEL CERTIFICADO (Pantallas Medianas) */}
          <h2 className="text-white font-bold text-3xl lg:text-[32px] lg:leading-[39px] w-[280px]">
            {title}
          </h2>
        </div>
        {/* DESCRIPCION DEL CERTIFICADO */}
        <div className="w-[301px] md:w-[350px] lg:w-[301px]">
          <p className="text-white text-center font-medium text-[14px] md:text-base lg:text-[19px] leading-[22px]">
            {description}
          </p>
        </div>
        {/* BOTON COMPARTIR EN LINKEDIN */}
        <Link href={urlLinkedin} target="_blank" className="lg:block hidden">
          <div className="group inline-flex h-12 shrink-0 justify-center items-center px-6 py-3 bg-customBlueLinkedin shadow-xl rounded-[40px] gap-2 cursor-pointer hover:shadow-none transition-all duration-500">
            <Image
              src={"/certificate/linkedin.svg"}
              alt={""}
              width={27}
              height={27}
              className="group-hover:translate-x-[110px] group-hover:drop-shadow-xl transition-all duration-500"
            />
            <p className="text-white text-center font-medium text-sm group-hover:opacity-0 group-hover:invisible transition-all duration-200">
              Añadir a tu perfil de LinkedIn
            </p>
          </div>
        </Link>
      </div>
    </FadeInSection>
  );
}

export default Informacion;
