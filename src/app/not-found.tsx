import React from 'react'
import Fondo from './SharedComponents/Fondo/Fondo'
import Image from "next/image";
import Link from 'next/link';

function notFound() {
  return (
    <div className='w-screen h-screen flex justify-center items-center overflow-hidden relative'>
        <Fondo />
        <div className='flex flex-col items-center justify-center gap-8 absolute'>
            <Image src={'/certify.png'} alt={''} width={120} height={40} className=' filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
            <p className='text-white text-2xl font-bold'>Page Not Found</p>
            <p className='text-white text-base md:text-lg font-semibold'>URL invalido - Corrobora el enlace ingresado</p>
            <Link href={'/'} className='z-50'>
                <button className="flex w-[146px] lg:w-[139px] h-[47px] lg:h-[36px] rounded-[40px] lg:py-[17px] lg:px-[10px] justify-center items-center bg-transparent border-2 border-customCeleste text-sm lg:text-sm z-[1005] font-bold text-white hover:scale-[1.02] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:bg-customCeleste hover:text-white transition-all duration-300">Volver a Home</button>
            </Link>
        </div>
    </div>
  )
}

export default notFound