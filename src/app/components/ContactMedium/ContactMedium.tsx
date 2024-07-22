import React from "react";
import Image from "next/image";

interface ContactMediumProps {
  iconPath: string;
  text: string;
}

function ContactMedium({ iconPath, text }: ContactMediumProps) {
  return (
    <div className="group inline-flex items-center gap-4 cursor-pointer">
      <div className="relative">
        <Image
          src={iconPath}
          alt={""}
          height={40}
          width={40}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-customCeleste opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-300 animate-ping"></div>
        <div className="absolute inset-0 bg-customCeleste opacity-0 group-hover:opacity-30 rounded-full transition-all duration-700 group-hover:scale-[2] blur-md"></div>
      </div>
      <div className="relative overflow-hidden lg:block hidden">
        <p className="whitespace-nowrap text-white font-semibold text-lg transition-transform duration-300 group-hover:translate-y-[-100%]">
          {text}
        </p>
        <p className="whitespace-nowrap text-customCeleste font-semibold text-lg absolute top-full left-0 transition-transform duration-300 group-hover:translate-y-[-100%]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default ContactMedium;

    // <div className='group w-auto h-auto flex flex-row gap-1.5 items-center transition-all duration-300'>
    //     <Image
    //     src={iconPath}
    //     alt={""}
    //     height={40}
    //     width={40}
    //     className="cursor-pointer filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-105 transition-all duration-300"
    //     />
    //     <p className='text-white font-semibold overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-[205px]'>
    //     <span className="whitespace-nowrap px-2">{text}</span>
    //     </p>
    // </div>
