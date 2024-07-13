'use client'

import React from 'react'
import Image from "next/image";
import BoxReveal from '../BoxReveal/BoxReveal';

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
    <div id='inicio' className='w-screen h-[115vh] pb-[15vh] pt-20 -mb-10 flex flex-col justify-center items-center z-40 bg-cover bg-top bg-[url(/home/fondo5.jpg)]'>
      <div className='w-auto h-auto flex flex-col lg:flex-row justify-evenly items-center px-16'>
        <div className="h-auto w-full lg:w-[35%] flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-5 lg:px-0 text-white">
          <h1 className="w-[80vw] lg:w-auto text-[36px] lg:text-5xl font-bold tracking-wide lg:tracking-normal leading-tight lg:leading-[55px] text-center lg:text-start">DIGITALIZA Y PROTEGE<br/><p className='whitespace-nowrap'>tus certificados</p></h1>
          <div className='flex lg:hidden w-full justify-center'>
            <Image 
              src="/home/certificados.png" 
              alt="Certificados" 
              width={2572} 
              height={1843} 
              className="w-[80vw] h-auto filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
            />
          </div>
          <p className="w-[90vw] lg:w-auto text-center lg:text-start text-[15px] lg:text-lg font-normal leading-normal">Garantiza la inmutabilidad y seguridad de tus certificados mediante tecnología blockchain.</p>
          <div className='flex w-full justify-center'>
            <button onClick={() => scrollToElement('contacto', 100)} className="hidden lg:flex w-[146px] lg:w-[139px] h-[47px] lg:h-[36px] rounded-[40px] lg:py-[17px] lg:px-[10px] justify-center items-center bg-transparent border-2 border-customCeleste text-sm lg:text-sm z-[1005] font-bold text-white hover:scale-[1.02] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:bg-customCeleste hover:text-white transition-all duration-300">Comienza Ya</button>
          </div>
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
      <div className='absolute top-0 mt-[75vh] w-full h-[40vh] bg-gradient-to-t from-customBlackBackground via-customBlackBackground/90 to-transparent'>

      </div>
      <div className='absolute top-0 mt-[110vh] h-11 w-full  flex flex-row-reverse gap-3 justify-center items-center'>
        <p className='text-white text-lg font-medium'>Lleva tus certificados al siguiente nivel</p>
        <img src="/home/protected.png" alt="" className='h-6 w-auto' />
        <p className='text-white text-lg font-semibold'>Tokenizer</p>
      </div>
    </div>
  )
}

export default Inicio