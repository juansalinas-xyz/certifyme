'use client'

import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useState } from 'react';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeWidth = scrollPosition > 50; // Ajusta este valor según tu preferencia
      setIsScrolled(shouldChangeWidth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToElement(elementId: string, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  return (
    <div className={`fixed h-20 lg:h-[102px] lg:max-h-[13%] w-screen flex justify-between items-center z-[100] px-7 lg:px-0  ${isScrolled ? 'bg-customBlackBackground/50 md:bg-customBlackBackground/70 backdrop-blur-lg' : ''} transition-all duration-300`}>
      <div className="h-full hidden lg:flex items-center justify-start z-50">
        <Link href={"/"}>
          <Image
            src="/certify.png"
            alt="certify"
            width={124}
            height={20}
            className="z-50 ml-16 drop-shadow-xl"
          />
        </Link>
      </div>
      <div className="w-full h-16 lg:hidden z-10 flex items-center">
        <Link href={"/"}>
          <Image
            src="/certify.png"
            alt="certify"
            width={110}
            height={18}
            className="z-50"
          />
        </Link>
      </div>
      <div className='lg:hidden flex h-full z-10 items-center'>
        <Image src={'/home/menu.png'} alt={''} height={30} width={30} className='z-50'/>
      </div>
      <div className='hidden md:flex gap-10 h-full items-center z-50 text-white'>
        <p onClick={() => scrollToElement('inicio', 100)} className='text-lg font-medium cursor-pointer hover:text-customCeleste drop-shadow-xl'>Inicio</p>
        <p onClick={() => scrollToElement('acercade', 100)} className='text-lg font-medium cursor-pointer hover:text-customCeleste drop-shadow-xl'>¿Por qué Tokenizer?</p>
        <p onClick={() => scrollToElement('como', 100)} className='text-lg font-medium cursor-pointer hover:text-customCeleste drop-shadow-xl'>¿Cómo lo hacemos?</p>
        <p onClick={() => scrollToElement('contacto', 100)} className='text-lg font-medium cursor-pointer hover:text-customCeleste drop-shadow-xl'>Contacto</p>
        
      </div>
      <div className="hidden right-0 mr-20 md:flex justify-center gap-2.5 z-50">
        <Image src={"/home/linkedin.png"} alt={""} height={30} width={30} className="cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300" />
        <Image src={"/home/whatsapp.png"} alt={""} height={30} width={30} className="cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300" />
        <Image src={"/home/telegram.png"} alt={""} height={30} width={30} className="cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300" />
      </div>
    </div>
  )
}

export default NavBar