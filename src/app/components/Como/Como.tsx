import React from 'react'

function Como() {
  return (
    <div id='como' className='hidden mt-[190px] w-[723px] lg:flex flex-col items-center gap-[88px] text-white pt-[40px] z-50'>
         <h2 className='font-bold text-center text-5xl'>Cómo potenciar tu certificado con blockchain</h2>
         <div className='flex flex-col items-center gap-[30px]'>
                <div className='group w-[600px] flex flex-row items-center gap-5'>
                    <div className='w-[72px] h-[72px] min-w-[72px] flex justify-center items-center font-bold text-4xl bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-200'>1</div>
                    <p className='text-xl'>Contactanos para trabajar en los certificados necesarios.</p>
                </div>
                <div className='group w-[600px] flex flex-row-reverse justify-end items-center gap-5'>
                    <div className='w-[72px] h-[72px] min-w-[72px] flex justify-center items-center font-bold text-4xl bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-200'>2</div>
                    <p className='text-xl text-end'>En un plazo de 24hs habiles generamos los certificados respaldados por blockchain.</p>
                </div>
                <div className='group w-[600px] flex flex-row items-center gap-5'>
                    <div className='w-[72px] h-[72px] min-w-[72px] flex justify-center items-center font-bold text-4xl bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-200'>3</div>
                    <p className='text-xl'>Se envian los links a los destinatarios para que puedan revisar sus certificados.</p>
                </div>
                <div className='group w-[600px] flex flex-row-reverse justify-end items-center gap-5'>
                    <div className='w-[72px] h-[72px] min-w-[72px] flex justify-center items-center font-bold text-4xl bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-200'>4</div>
                    <p className='text-xl text-end'>Los certificados ya estan listos para ser verificados y compartidos en las redes.</p>
                </div>
            </div>
    </div>
  )
}

export default Como