import React from 'react'

function Porque() {
  return (
    <div id='acercade' className='hidden w-4/5 h-auto md:flex flex-col justify-start items-center text-white gap-12 pt-[40px] z-50'>
        <div className='w-[375px] h-[92px]'>
            <h2 className='font-bold text-center text-5xl'>¿Por qué usar Tokenizer?</h2>
        </div>
        <div className='group w-full flex flex-col items-center justify-center gap-8'>
            <div className='group w-[85%] h-2 bg-white rounded-2xl flex justify-around items-center px-[] mt-20'>
                <div className='h-[62px] w-[62px] bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] transition-all duration-300'></div>
                <div className='h-[62px] w-[62px] bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] transition-all duration-300'></div>
                <div className='h-[62px] w-[62px] bg-customCeleste rounded-full group-hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] transition-all duration-300'></div>
            </div>
            <div className='w-[85%] flex justify-between mt-12'>
                <div className='w-1/3 flex flex-col items-center gap-5'>
                    <p className='font-bold text-xl text-center whitespace-nowrap'><b>Seguridad blockchain</b></p>
                    <p className='text-xl text-center w-[85%]'>
                        Tokenizer utiliza la tecnología blockchain, conocida por su alta seguridad y resistencia a la manipulación, asegurando que tus certificados estén siempre protegidos.
                    </p>
                </div>
                <div className='w-1/3 flex flex-col items-center gap-5'>
                    <p className='font-bold text-xl text-center whitespace-nowrap'><b>Facilidad de uso</b></p>
                    <p className='text-xl text-center w-[85%]'>
                        Tokenizer ofrece accesibilidad para tus certificados, eliminando los riesgos de pérdida y facilitando su gestión y verificación. No requiere que los ususarios cuenten con conocimiento en blockchain, Tokenizer se encarga de la parte técnica.
                    </p>
                </div>
                <div className='w-1/3 flex flex-col items-center gap-5'>
                    <p className='font-bold text-xl text-center whitespace-nowrap'><b>Variedad de certificados</b></p>
                    <p className='text-xl text-center w-[85%]'>
                        Puedes digitalizar todo tipo de certificados, como diplomas académicos, certificados de cursos, títulos profesionales, y cualquier otro documento que necesite verificación y protección.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Porque