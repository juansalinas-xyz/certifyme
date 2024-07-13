import React from 'react'
import Image from "next/image";
import BoxReveal from '../BoxReveal/BoxReveal';

function Porque() {
  return (
    <div id='acercade' className='w-full h-screen flex justify-center items-center mt-11 max-h-screen'>
        <div className='hidden w-4/5 h-auto lg:flex flex-col justify-center items-center text-white gap-32 z-50'>
            <div className='w-auto h-[92px]'>
                <BoxReveal>
                    <h2 className='font-semibold text-center text-4xl'>¿Por qué usar Tokenizer?</h2>
                </BoxReveal>
            </div>
            <div className='group w-full flex flex-col items-center justify-center gap-8'>
                <div className='group w-[85%] h-2 bg-white rounded-2xl flex justify-around items-center px-[]'>
                    {/* <div className='h-[62px] w-[62px] bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] transition-all duration-300'></div>
                    <div className='h-[62px] w-[62px] bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] transition-all duration-300'></div>
                    <div className='h-[62px] w-[62px] bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] transition-all duration-300'></div> */}
                    <div className='px-4 bg-customBlackBackground rounded-full'>
                        <img src="/home/bloque.png" alt="" className='h-[52px] w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.5)]'/>
                    </div>
                    <div className='px-4 bg-customBlackBackground rounded-full'>
                        <img src="/home/bloque.png" alt="" className='h-[52px] w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.5)]'/>
                    </div>
                    <div className='px-4 bg-customBlackBackground rounded-full'>
                        <img src="/home/bloque.png" alt="" className='h-[52px] w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.5)]'/>
                    </div>
                </div>
                <div className='w-[85%] flex justify-between mt-12'>
                    <div className='w-1/3 flex flex-col items-center gap-10'>
                        <p className='font-bold text-xl text-center whitespace-nowrap'><b>Seguridad blockchain</b></p>
                        <p className='text-lg text-center w-[85%]'>
                            Tokenizer utiliza la tecnología <b>blockchain</b>, conocida por su alta <b>seguridad</b> y resistencia a la manipulación, asegurando que tus certificados estén siempre <b>protegidos</b>.
                        </p>
                    </div>
                    <div className='w-1/3 flex flex-col items-center gap-10'>
                        <p className='font-bold text-xl text-center whitespace-nowrap'><b>Facilidad de uso</b></p>
                        <p className='text-lg text-center w-[85%]'>
                            Tokenizer ofrece <b>accesibilidad</b> para tus certificados, eliminando los riesgos de pérdida y facilitando su gestión y <b>verificación</b>. No requiere que los ususarios cuenten con conocimiento ni wallets en blockchain, Tokenizer se encarga del proceso técnico.
                        </p>
                    </div>
                    <div className='w-1/3 flex flex-col items-center gap-10'>
                        <p className='font-bold text-xl text-center whitespace-nowrap'><b>Integracíon y accesibilidad</b></p>
                        <p className='text-lg text-center w-[85%]'>
                            Tokenizer te permite <b>anunciar</b> facilmente tus certificados en la seccion de certificaciones de <b>LinkedIn</b>. Ademas podras <b>descargarlos</b> en tu dispositivo para exponerlos donde mas gustes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:hidden flex h-auto flex-col items-center justify-start gap-10 text-white'>
            <h2 className='font-bold text-center text-3xl'>¿Por qué usar Tokenizer?</h2>
            <div className='w-full flex flex-col justify-center items-center px-12'>
                <div className='flex flex-col justify-center items-center gap-8'>
                    <p className='text-lg font-semibold text-center'>Seguridad Blockchain</p>
                    <div className='h-12 w-12 flex justify-center items-center bg-customCeleste rounded-full'>
                        <Image src={'/home/triangulo.png'} alt={''} height={20} width={20} className=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Porque