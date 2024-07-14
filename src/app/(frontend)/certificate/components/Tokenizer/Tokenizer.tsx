import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/app/SharedComponents/FadeInSection/FadeInSection";

function Tokenizer() {
  return (
    <FadeInSection>
      <div className="h-auto w-full flex flex-col justify-center items-center z-50 gap-10 lg:gap-[54px] pb-[60px] text-white">
        <div className="w-3/4 h-px rounded-lg bg-zinc-700 mt-10 lg:mt-0"></div>
        <p className="text-2xl lg:text-4xl font-bold leading-normal text-center">
          ¿Que es TOKENIZER?
        </p>
        <div className="w-full lg:w-[1006px] lg:max-w-[85%] flex flex-col items-center text-center px-8 lg:px-0">
          <p className="text-xs lg:text-base font-medium leading-normal">
            Tokenizer es una solución innovadora basada en <b>blockchain</b> que
            digitaliza y verifica certificados de forma segura y accesible.
            Nuestra plataforma garantiza que tus certificados estén protegidos
            contra pérdida y falsificación, ofreciendo <b>autenticidad</b> y{" "}
            <b>seguridad</b> en todo momento.
          </p>
          <br />
          <p className="text-xs lg:text-base font-medium leading-normal">
            Fundada por expertos en <b>blockchain</b>, Tokenizer se compromete a
            ofrecer un servicio confiable y fácil de usar, adaptándose a tus
            necesidades. Únete a la revolución de la digitalización segura con
            Tokenizer y disfruta de la tranquilidad de tener tus certificados
            siempre <b>protegidos</b> y <b>accesibles</b>.
          </p>
        </div>
        <div className="w-full flex flex-row justify-center gap-[10px]">
          <Link href={"/"} target="_blank">
            <Image src={"/certificate/web.png"} alt={""} height={30} width={30} />
          </Link>
          <Link href={"https://www.linkedin.com"} target="_blank">
            <Image
              src={"/certificate/linkedin.png"}
              alt={""}
              height={30}
              width={30}
            />
          </Link>
          <Link href={"mailto:correo@example.com"} target="_blank">
            <Image
              src={"/certificate/correo.png"}
              alt={""}
              height={30}
              width={30}
            />
          </Link>
        </div>
        <div className="mt-8 lg:mt-[60px] flex justify-center">
          <p className="text-xs font-light">
            © 2024 Tokenizer, todos los derechos reservados.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
}

export default Tokenizer;
