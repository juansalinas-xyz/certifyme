import React from 'react'

function Como() {
  return (
    <div className='hidden w-4/5 lg:h-screen lg:max-h-screen lg:flex flex-col justify-center items-center gap-16 text-white z-50 lg:mt-12'>
        <h2  id='como' className='h-[92px] font-semibold text-center text-4xl whitespace-nowrap'>¿Cómo potenciar tu certificado con blockchain?</h2>
        <div className='w-full h-[70%] flex flex-row items-center justify-center gap-20'>
            <div className='w-full h-full flex flex-col items-center justify-center py-3 gap-6 '>
                <div className='h-full w-full flex items-center justify-end'>
                    <img src="/home/como/solicitud.png" alt="" className='h-24 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                </div>
                <div className='h-full w-full flex flex-col items-end justify-center gap-4'>
                    <p className='text-2xl font-bold text-white text-end'>Generación de Certificados</p>
                    <p className='text-lg font-medium text-end text-white'>En un plazo de 24 horas hábiles generaremos los certificados en blockchain.</p>
                </div>
                <div className='h-full w-full flex items-center justify-end'>
                    <img src="/home/como/distribucion.png" alt="" className='h-24 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                </div>
                <div className='h-full w-full flex flex-col items-end justify-center gap-4'>
                    <p className='text-2xl font-bold text-white text-end'>Publicación de Certificados</p>
                    <p className='text-lg font-medium text-end text-white'>Los certificados ya estan listos para ser verificados y compartidos en las redes.</p>
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
                <div className='h-full w-full flex flex-col items-start justify-center gap-4'>
                    <p className='text-2xl font-bold text-white text-start'>Solicitud de Certificados</p>
                    <p className='text-lg font-medium text-start text-white'>Contactanos para trabajar en los certificados necesarios.</p>
                </div>
                <div className='h-full w-full flex items-center justify-start'>
                    <img src="/home/como/generacion.png" alt="" className='h-24 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                </div>
                <div className='h-full w-full flex flex-col items-start justify-center gap-4'>
                    <p className='text-2xl font-bold text-white text-start'>Distribución de Certificados</p>
                    <p className='text-lg font-medium text-start text-white'>Enviaremos links a los destinatarios para que puedan visualizar sus certificados.</p>
                </div>
                <div className='h-full w-full flex items-center justify-start'>
                    <img src="/home/como/publicar.png" alt="" className='h-24 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Como

{/* <div className='w-full h-auto flex flex-col items-center justify-center gap-8'>
<div className='h-20 w-full flex flex-row justify-start items-center gap-4 rounded-lg bg-white/20'>
    <div className='h-14 w-14 rounded-lg bg-customCeleste flex justify-center items-center -translate-x-7 shrink-0'>
        <p className='text-xl font-black text-white'>1</p>
    </div>
    <div className='h-full flex justify-start items-center -translate-x-10 pl-5'>
        <p className='text-lg font-medium text-white'>Contactanos para trabajar en los certificados necesarios.</p>
    </div>
</div>
<div className='h-20 w-full flex flex-row-reverse justify-start items-center gap-4 rounded-lg bg-white/20'>
    <div className='h-14 w-14 rounded-lg bg-customCeleste flex justify-center items-center translate-x-7 shrink-0'>
        <p className='text-xl font-black text-white'>2</p>
    </div>
    <div className='h-full flex justify-end items-center translate-x-10 pr-5'>
        <p className='text-lg font-medium text-end text-white'>En un plazo de 24 horas hábiles generaremos los certificados en blockchain.</p>
    </div>
</div>
<div className='h-20 w-full flex flex-row justify-start items-center gap-4 rounded-lg bg-white/20'>
    <div className='h-14 w-14 rounded-lg bg-customCeleste flex justify-center items-center -translate-x-7 shrink-0'>
        <p className='text-xl font-black text-white'>3</p>
    </div>
    <div className='h-full flex justify-start items-center -translate-x-10 pl-5'>
        <p className='text-lg font-medium text-white'>Enviaremos links a los destinatarios para que puedan visualizar sus certificados.</p>
    </div>
</div>
<div className='h-20 w-full flex flex-row-reverse justify-start items-center gap-4 rounded-lg bg-white/20'>
    <div className='h-14 w-14 rounded-lg bg-customCeleste flex justify-center items-center translate-x-7 shrink-0'>
        <p className='text-xl font-black text-white'>4</p>
    </div>
    <div className='h-full flex justify-end items-center translate-x-10 pr-5'>
        <p className='text-lg font-medium text-end text-white'>Los certificados ya estan listos para ser verificados y compartidos en las redes.</p>
    </div>
</div>
</div> */}