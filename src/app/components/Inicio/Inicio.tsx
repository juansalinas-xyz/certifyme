'use client'

import React from 'react'
import Image from "next/image";

function Inicio() {
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
    <div id='inicio' className='w-screen h-screen mt-10 -mb-10 flex flex-row justify-center items-center z-40'>
      <div className='w-auto h-auto flex flex-col lg:flex-row justify-evenly items-center'>
        <div className="h-auto w-full lg:w-[35%] flex flex-col justify-center items-center gap-6 lg:gap-10 px-5 lg:px-0 text-white">
          <h1 className="w-[90vw] lg:w-auto text-[36px] lg:text-6xl font-bold tracking-wide lg:tracking-normal leading-tight lg:leading-[58px] text-center">DIGITALIZA Y PROTEGE<br/>tus certificados</h1>
          <div className='flex lg:hidden w-full justify-center'>
            <Image 
              src="/home/certificados.png" 
              alt="Certificados" 
              width={2572} 
              height={1843} 
              className="w-[80vw] h-auto filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
            />
          </div>
          <p className="w-[90vw] lg:w-auto text-center text-[15px] lg:text-xl font-normal leading-normal">Garantiza la inmutabilidad y seguridad de tus certificados mediante tecnología blockchain y llévalos al siguiente nivel.</p>
          <button onClick={() => scrollToElement('contacto', 100)} className="hidden lg:flex w-[146px] lg:w-[179px] h-[47px] lg:h-[56px] rounded-[40px] lg:py-[17px] lg:px-[10px] justify-center items-center bg-customCeleste text-sm lg:text-lg font-bold text-black hover:scale-[1.02] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-300">Comienza Ya</button>
        </div>
        <div className="h-auto w-[45%] hidden lg:flex flex-col justify-center items-center">
          <Image 
            src="/home/certificados.png" 
            alt="Certificados" 
            width={2572} 
            height={1843} 
            className="filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500"
          />
        </div>
        <button onClick={() => scrollToElement('contacto', 100)} className="flex lg:hidden mt-4 w-[146px] lg:w-[179px] min-h-[47px] lg:h-[56px] rounded-[40px] lg:py-[17px] lg:px-[10px] justify-center items-center bg-customCeleste text-sm lg:text-lg font-bold text-black hover:scale-[1.02] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-300">Comienza Ya</button>
      </div>
    </div>
  )
}

export default Inicio