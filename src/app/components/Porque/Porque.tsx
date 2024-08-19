'use client'

import React from 'react';
import BoxReveal from '../BoxReveal/BoxReveal';
import PorqueItem from '../PorqueItem/PorqueItem';

const Porque = () => {
  const porques = [
    {
      title: "Seguridad blockchain",
      text: "Tokenizer utiliza tecnología blockchain, conocida por su alta seguridad y resistencia a la manipulación, asegurando que tus certificados estén siempre protegidos."
    },
    {
      title: "Facilidad de uso",
      text: "Tokenizer facilita la gestión y verificación de tus certificados sin necesidad de conocimientos sobre blockchain ni wallets, encargándose de todo el proceso técnico por ti y tus usuarios."
    },
    {
      title: "Integración y accesibilidad",
      text: "Tokenizer te permite anunciar fácilmente tus certificados en la sección de certificaciones de LinkedIn. Además podrás descargarlos en tu dispositivo para exponerlos donde más gustes."
    },
  ];

  return (
    <div id='acercade' className='w-full h-auto flex justify-center items-center lg:max-h-screen'>
      <div className='hidden w-full h-auto lg:flex flex-col justify-center items-center text-white gap-32 z-50'>
        <div className='w-auto h-[92px]'>
          <BoxReveal>
            <h2 className='font-bold text-center text-4xl'>Beneficios de usar Tokenizer</h2>
          </BoxReveal>
        </div>
        <div className='group w-4/5 flex flex-col items-center justify-center gap-8'>
          <div className='group w-[85%] h-2 bg-white rounded-2xl flex justify-around items-center'>
            {[...Array(3)].map((_, index) => (
              <div key={index} className='px-4 bg-customBlackBackground rounded-full'>
                <img src='/home/bloque.png' alt='' className='h-[52px] w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.5)]' />
              </div>
            ))}
          </div>
          <div className='w-[90%] flex justify-between mt-12'>
            {porques.map((item, index) => (
              <div key={index} className='w-1/3 flex flex-col items-center gap-10'>
                <p className='font-bold text-lg text-center whitespace-nowrap'>{item.title}</p>
                <p className='text-base text-center w-[85%]'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='lg:hidden flex w-full h-auto flex-col items-center justify-start gap-10 text-white px-10'>
        <BoxReveal>
          <h2 className='font-bold text-center text-2xl'>Beneficios de usar Tokenizer</h2>
        </BoxReveal>
        <div className='w-full flex flex-col justify-center items-center gap-4'>
          {porques.map((item, index) => (
            <PorqueItem key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Porque;
