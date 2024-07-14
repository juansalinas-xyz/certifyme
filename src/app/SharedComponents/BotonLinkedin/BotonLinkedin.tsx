import React from "react";
import FadeInSection from "../FadeInSection/FadeInSection";
import Link from "next/link";
import Image from "next/image";

interface botonProps {
  screenSize: string;
  url: string;
}

function BotonLinkedin({ screenSize, url }: botonProps) {
  switch (screenSize) {
    case "small":
      return (
        <div className="md:hidden block">
          <FadeInSection>
            <Link href={url} target="_blank">
              <div className="min-w-[300px] inline-flex h-12 shrink-0 justify-center items-center px-6 py-2.5 bg-customBlueLinkedin shadow-xl rounded-[40px] gap-2 cursor-pointer hover:shadow-none active:scale-[0.98] transition-all duration-500">
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
        </div>
      );
    case "medium":
      return (
        <div className="lg:hidden hidden md:block">
          <FadeInSection>
            <Link href={url} target="_blank">
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
    case "large":
      return (
        <Link href={url} target="_blank" className="lg:block hidden">
          <div className="group inline-flex h-12 shrink-0 justify-center items-center px-6 py-3 bg-customBlueLinkedin shadow-xl rounded-[40px] gap-2 cursor-pointer hover:shadow-none transition-all duration-500">
            <Image
              src={"/certificate/linkedin.svg"}
              alt={""}
              width={27}
              height={27}
              className="group-hover:translate-x-[110px] group-hover:drop-shadow-xl transition-all duration-500 delay-75"
            />
            <p className="text-white text-center font-medium text-sm group-hover:opacity-0 group-hover:invisible transition-all duration-200 delay-75">
              Añadir a tu perfil de LinkedIn
            </p>
          </div>
        </Link>
      );
  }
}

export default BotonLinkedin;
