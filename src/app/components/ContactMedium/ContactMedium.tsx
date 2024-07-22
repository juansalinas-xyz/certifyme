import React from "react";
import Image from "next/image";

interface ContactMediumProps {
  iconPath: string;
  text: string;
}

function ContactMedium({ iconPath, text }: ContactMediumProps) {
  return (
    <div className='group w-auto h-auto flex flex-col lg:flex-row gap-1.5 items-center transition-all duration-700 cursor-pointer'>
        <Image
          src={iconPath}
          alt={""}
          height={55}
          width={55}
          className="cursor-pointer filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] md:group-hover:scale-105 transition-all duration-700"
        />
        <p className='text-white text-base md:text-xl font-semibold overflow-hidden transition-all duration-700 max-w-0 group-hover:max-w-[205px] mt-2 md:mt-0'>
          <span className="whitespace-nowrap px-2">{text}</span>
        </p>
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
