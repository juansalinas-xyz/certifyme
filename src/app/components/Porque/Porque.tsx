'use client'

import React, { useState } from 'react'
import BoxReveal from '../BoxReveal/BoxReveal';
import FadeInSection from 'src/app/SharedComponents/FadeInSection/FadeInSection';
import PorqueItem from '../PorqueItem/PorqueItem';

function Porque() {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const porques = [
        {
            title: "Seguridad blockchain",
            text: "Tokenizer utiliza la tecnología blockchain, conocida por su alta seguridad y resistencia a la manipulación, asegurando que tus certificados estén siempre protegidos."
        },
        {
            title: "Facilidad de uso",
            text: "Tokenizer ofrece accesibilidad para tus certificados, eliminando los riesgos de pérdida y facilitando su gestión y verificación. No requiere que los ususarios cuenten con conocimiento ni wallets en blockchain, Tokenizer se encarga del proceso técnico."
        },
        {
            title: "Integración y accesibilidad",
            text: "Tokenizer te permite anunciar facilmente tus certificados en la seccion de certificaciones de LinkedIn. Ademas podras descargarlos en tu dispositivo para exponerlos donde mas gustes."
        },
    ]

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div id='acercade' className='w-full h-auto flex justify-center items-center mt-11 lg:max-h-screen'>
        <FadeInSection>
            <div className='hidden w-full h-auto lg:flex flex-col justify-center items-center text-white gap-32 z-50'>
                <div className='w-auto h-[92px]'>
                    <BoxReveal>
                        <h2 className='font-semibold text-center text-4xl'>¿Por qué usar Tokenizer?</h2>
                    </BoxReveal>
                </div>
                <div className='group w-4/5 flex flex-col items-center justify-center gap-8'>
                    <div className='group w-[85%] h-2 bg-white rounded-2xl flex justify-around items-center px-[]'>
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
                            <p className='font-bold text-lg text-center whitespace-nowrap'><b>Seguridad blockchain</b></p>
                            <p className='text-base text-center w-[85%]'>
                                Tokenizer utiliza la tecnología <b>blockchain</b>, conocida por su alta <b>seguridad</b> y resistencia a la manipulación, asegurando que tus certificados estén siempre <b>protegidos</b>.
                            </p>
                        </div>
                        <div className='w-1/3 flex flex-col items-center gap-10'>
                            <p className='font-bold text-lg text-center whitespace-nowrap'><b>Facilidad de uso</b></p>
                            <p className='text-base text-center w-[85%]'>
                                Tokenizer ofrece <b>accesibilidad</b> para tus certificados, eliminando los riesgos de pérdida y facilitando su gestión y <b>verificación</b>. No requiere que los ususarios cuenten con conocimiento ni wallets en blockchain, Tokenizer se encarga del proceso técnico.
                            </p>
                        </div>
                        <div className='w-1/3 flex flex-col items-center gap-10'>
                            <p className='font-bold text-lg text-center whitespace-nowrap'><b>Integracíon y accesibilidad</b></p>
                            <p className='text-base text-center w-[85%]'>
                                Tokenizer te permite <b>anunciar</b> facilmente tus certificados en la seccion de certificaciones de <b>LinkedIn</b>. Ademas podras <b>descargarlos</b> en tu dispositivo para exponerlos donde mas gustes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FadeInSection>
        <div className='lg:hidden flex w-full h-auto flex-col items-center justify-start gap-10 text-white px-10'>
                <BoxReveal>
                    <h2 className='font-medium text-center text-2xl'>¿Por qué usar Tokenizer?</h2>
                </BoxReveal>
                <div className='w-full flex flex-col justify-center items-center gap-10 px-12'>
                    {porques.map((item, index) => (
                        <PorqueItem 
                            key={index}
                            title={item.title} 
                            text={item.text} 
                            isActive={activeIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Porque