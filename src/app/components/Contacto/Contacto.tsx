import React from 'react'
import Image from "next/image";

function Contacto() {
  return (
    <div id='contacto' className='hidden mt-[190px] w-full md:flex flex-col items-center gap-16 text-white pt-[40px] z-50'>
      <h2 className='text-4xl font-semibold text-white text-center'>Contactanos</h2>
      <div className='mt-2 flex flex-row gap-10'>
        <Image src={"/home/whatsapp.png"} alt={""} height={40} width={40} className="cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-110 transition-all duration-300" />
        <Image src={"/home/telegram.png"} alt={""} height={40} width={40} className="cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-110 transition-all duration-300" />
        <Image src={"/home/correo.png"} alt={""} height={40} width={40} className="cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-110 transition-all duration-300" />
      </div>
      <p className='text-base font-light'>O</p>
    </div>
  )
}

export default Contacto