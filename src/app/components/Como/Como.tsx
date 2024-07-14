import React from 'react'
import BoxReveal from '../BoxReveal/BoxReveal'

function Como() {
  return (
    <div className='w-screen h-auto flex justify-center items-center text-white z-50'>
        <div className='hidden w-4/5 md:h-screen md:max-h-screen md:flex flex-col justify-center items-center gap-16 text-white z-50 md:mt-12'>
            <BoxReveal>
                <h2  id='como' className='h-[92px] font-semibold text-center text-4xl whitespace-nowrap'>¿Cómo potenciar tu certificado con blockchain?</h2>
            </BoxReveal>
            <div className='w-full h-[70%] flex flex-row items-center justify-center gap-20'>
                <div className='w-full h-full flex flex-col items-center justify-center py-3 gap-6 '>
                    <div className='h-full w-full flex items-center justify-end'>
                        <img src="/home/como/solicitud.png" alt="" className='h-20 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                    </div>
                    <div className='h-full w-full flex flex-col items-end justify-center gap-2'>
                        <p className='text-xl font-bold text-white text-end'>Generación</p>
                        <p className='text-base font-medium text-end text-white'>En un plazo de 24 horas hábiles generaremos los certificados en blockchain.</p>
                    </div>
                    <div className='h-full w-full flex items-center justify-end'>
                        <img src="/home/como/distribucion.png" alt="" className='h-20 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                    </div>
                    <div className='h-full w-full flex flex-col items-end justify-center gap-2'>
                        <p className='text-xl font-bold text-white text-end'>Publicación</p>
                        <p className='text-base font-medium text-end text-white'>Los certificados ya estan listos para ser verificados y compartidos en las redes.</p>
                    </div>
                </div>
                <div className='w-1 h-full bg-white flex flex-col items-center justify-around rounded-lg'>
                    <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'>
                        <p className='text-customCeleste text-base font-semibold'>1</p>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'>
                        <p className='text-customCeleste text-base font-semibold'>2</p>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'>
                        <p className='text-customCeleste text-base font-semibold'>3</p>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-white flex justify-center items-center filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'>
                        <p className='text-customCeleste text-base font-semibold'>4</p>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center py-3 gap-6'>
                    <div className='h-full w-full flex flex-col items-start justify-center gap-2'>
                        <p className='text-xl font-bold text-white text-start'>Solicitud</p>
                        <p className='text-base font-medium text-start text-white'>Contactanos para trabajar en los certificados necesarios.</p>
                    </div>
                    <div className='h-full w-full flex items-center justify-start'>
                        <img src="/home/como/generacion.png" alt="" className='h-20 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                    </div>
                    <div className='h-full w-full flex flex-col items-start justify-center gap-2'>
                        <p className='text-xl font-bold text-white text-start'>Distribución</p>
                        <p className='text-base font-medium text-start text-white'>Enviaremos links a los destinatarios para que puedan visualizar sus certificados.</p>
                    </div>
                    <div className='h-full w-full flex items-center justify-start'>
                        <img src="/home/como/publicar.png" alt="" className='h-20 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:hidden w-full h-auto flex flex-col gap-10 justify-start items-center text-white px-10'>
            <BoxReveal>
                <h2  id='como' className='h-[92px] font-medium text-center text-2xl '>¿Cómo potenciar tu certificado con <b>blockchain</b>?</h2>
            </BoxReveal>
        </div>
    </div>
  )
}

export default Como

