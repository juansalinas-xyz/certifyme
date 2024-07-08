import React from "react";
import Image from "next/image";

interface ContactMediumProps {
  iconPath: string;
  text: string;
}

function ContactMedium({ iconPath, text }: ContactMediumProps) {
  return (
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

    <div className="group w-auto h-auto flex flex-row gap-2.5 items-center transition-all duration-300 cursor-pointer">
      <Image
        src={iconPath}
        alt={""}
        height={40}
        width={40}
        className="cursor-pointer filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-105 transition-all duration-300"
      />
      <p className="whitespace-nowrap text-white font-semibold">{text}</p>
    </div>
  );
}

export default ContactMedium;
