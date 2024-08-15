import React from 'react'
import BoxReveal from '../BoxReveal/BoxReveal'

function Como() {
  return (
    <div className='w-screen h-auto flex justify-center items-start text-white z-50'>
        <div className='md:w-4/5 px-4 md:px-0 h-screen md:max-h-screen flex flex-col justify-center items-center gap-4 text-white z-50'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <BoxReveal>
                    <h2  id='como' className='md:h-[92px] h-28 font-bold text-center text-2xl lg:text-4xl md:whitespace-nowrap'>¿Cómo crear tu certificado con Tokenizer?</h2>
                </BoxReveal>
                <BoxReveal>
                    <p className='h-12 font-medium text-center text-base lg:text-xl md:whitespace-nowrap'>
                        4 simples pasos
                    </p>
                </BoxReveal>
            </div>
            <div className='w-[90%] lg:w-[70%] h-[90%] md:h-[70%] flex flex-row items-center justify-center gap-12 md:gap-20'>
                <div className='w-full h-full flex flex-col items-center justify-center py-3 gap-6 '>
                    {/* Imagen paso 1 */}
                    <div className='h-full w-full flex items-center justify-end'>
                        <img src="/home/como/solicitud.png" alt="" className='h-14 md:h-20 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                    </div>
                    {/* Texto paso 2 */}
                    <div className='h-full w-full flex flex-col items-center md:items-end justify-center gap-2'>
                        <p className='text-base md:text-xl font-bold text-white text-center md:text-end'>Generación</p>
                        <p className='text-xs md:text-base font-medium text-center md:text-end text-white'>En un plazo de 1 dia hábil generaremos tus certificados utilizando tecnologia blockchain.</p>
                    </div>
                    {/* Imagen paso 3 */}
                    <div className='h-full w-full flex items-center justify-end'>
                        <img src="/home/como/distribucion.png" alt="" className='h-16 md:h-24 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                    </div>
                    {/* Texto paso 4 */}
                    <div className='h-full w-full flex flex-col items-center md:items-end justify-center gap-2'>
                        <p className='text-base md:text-xl font-bold text-white text-center md:text-end'>Publicación</p>
                        <p className='text-xs md:text-base font-medium text-center md:text-end text-white'>Los certificados estarán listos para ser verificados y compartidos en diferentes plataformas.</p>
                    </div>
                </div>
                <div className='w-1 h-full bg-white flex flex-col items-center justify-around rounded-lg'>
                    {/* Linea divisoria */}
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
                    {/* Texto paso 1 */}
                    <div className='h-full w-full flex flex-col items-center md:items-start justify-center gap-2'>
                        <p className='text-base md:text-xl font-bold text-white text-center md:text-start'>Solicitud</p>
                        <p className='text-xs md:text-base font-medium text-center md:text-start text-white'>Contáctanos para definir la cantidad y tipo de certificados que necesitas.</p>
                    </div>
                    {/* Imagen paso 2 */}
                    <div className='h-full w-full flex items-center justify-start'>
                        <img src="/home/como/generacion.png" alt="" className='h-14 md:h-20 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                    </div>
                    {/* Texto paso 3 */}
                    <div className='h-full w-full flex flex-col items-center md:items-start justify-center gap-2'>
                        <p className='text-base md:text-xl font-bold text-white text-center md:text-start'>Distribución</p>
                        <p className='text-xs md:text-base font-medium text-center md:text-start text-white'>Enviaremos enlaces a los destinatarios para que puedan visualizar y verificar sus certificados.</p>
                    </div>
                    {/* Imagen paso 4 */}
                    <div className='h-full w-full flex items-center justify-start'>
                        <img src="/home/como/publicar.png" alt="" className='h-14 md:h-20 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Como

