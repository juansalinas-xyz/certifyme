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

function Certificado({
  title,
  description,
  logoInstitucion,
  linkBlockchain,
  certificado,
  urlLinkedin,
}: CertificadoProps) {
  return (
    <div className="w-full lg:w-auto lg:h-full flex flex-col justify-center items-center lg:items-start gap-7 lg:gap-5">
      <FadeInSection>
        <div className="w-full flex justify-center lg:justify-start items-center">
          <Image
            src={certificado}
            alt={""}
            height={526}
            width={741}
            className="w-[85%] lg:w-[100%]"
            priority
          />
        </div>
      </FadeInSection>
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
      <FadeInSection>
        <Link href={urlLinkedin} target="_blank" className="md:hidden block">
          <div className="inline-flex h-12 shrink-0 justify-center items-center px-6 py-2.5 bg-customBlueLinkedin shadow-xl rounded-[40px] gap-2 cursor-pointer hover:shadow-none active:scale-[0.98] transition-all duration-500">
            <Image
              src={"/certificate/linkedin.svg"}
              alt={""}
              width={20}
              height={20}
            />
            <p className="text-white text-center font-medium text-xs">
              Añadir a tu perfil de LinkedIn
            </p>
          </div>
        </Link>
      </FadeInSection>
      <FadeInSection>
        <Link
          href={urlLinkedin}
          target="_blank"
          className="lg:hidden hidden md:block"
        >
          <div className="inline-flex h-12 shrink-0 justify-center items-center px-6 py-2.5 bg-customBlueLinkedin shadow-xl rounded-[40px] gap-2 cursor-pointer hover:shadow-none active:scale-[0.98] transition-all duration-500">
            <Image
              src={"/certificate/linkedin.svg"}
              alt={""}
              width={24}
              height={24}
            />
            <p className="text-white text-center font-medium text-sm">
              Añadir a tu perfil de LinkedIn
            </p>
          </div>
        </Link>
      </FadeInSection>
    </div>
  );
}

export default Certificado;
