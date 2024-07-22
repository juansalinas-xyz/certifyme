'use client'

import React, { useState } from 'react';
import BoxReveal from '../BoxReveal/BoxReveal';

const Potencia = () => {
  const [selectedTab, setSelectedTab] = useState('educacion');
  const [displayedTab, setDisplayedTab] = useState('educacion');
  const [isAnimating, setIsAnimating] = useState(false);

  const tabs = ['empresas', 'educacion', 'certificadores'];

  const tabContent = [
    {
        tab: 'educacion',
        title: 'Estudiantes',
        items: [
            'Validación del titulo obtenido frente a terceros.',
            'Compartir en redes sociales.',
            'Fidelización con la institución.'
        ],
        icon: '/home/potenciar/educacion.png'
    },
    {
        tab: 'educacion',
        title: 'Instituciones',
        items: [
            'Evitar fraudes de diplomas.',
            'Marketing en redes sociales.',
            'Status por vanguardia en tecnologia.'
        ],
        icon: '/home/potenciar/escuela.png'
    },
    {
        tab: 'empresas',
        title: 'Empresa',
        items: [
            'Marketing en redes sociales (LinkedIn).',
            'Reconocimiento individual a los empleados.',
            'Status por vanguardia en tecnologia.'
        ],
        icon: '/home/potenciar/empresa.png'
    },
    {
        tab: 'empresas',
        title: 'Empleados',
        items: [
            'Certificados verificables de su desempeño.',
            'Visibilidad ante pares de su crecimiento.',
            'Sentido de pertenencia.'
        ],
        icon: '/home/potenciar/empleado.png'
    },
    {
        tab: 'certificadores',
        title: 'Certificadores',
        items: [
            'Evitar falsificaciones.',
            'Fácil corroborar certificaciones.',
            'Certificadora confiable.'
        ],
        icon: '/home/potenciar/certificador.png'
    },
    {
        tab: 'certificadores',
        title: 'Certificados',
        items: [
            'Verificabilidad por cumplimiento de requisitos.',
            'Visibilidad del logro obtenido.',
            'Facilidad para compartir.'
        ],
        icon: '/home/potenciar/certificado.png'
    },
    ]

  const handleTabChange = (tab) => {
    if (tab !== selectedTab && !isAnimating) {
      setIsAnimating(true);
      setSelectedTab(tab);
      setTimeout(() => {
        setDisplayedTab(tab);
        setIsAnimating(false);
      }, 150); // Mitad de la duración total de la animación
    }
  };

  return (
    <div className='w-screen h-auto flex flex-col gap-9 md:gap-4 justify-center items-center text-white z-50 mt-11'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <BoxReveal>
          <h2 id='como' className='md:h-[92px] h-20 font-bold text-center text-2xl lg:text-4xl md:whitespace-nowrap'>
            Potencia tu certificado con Tokenizer
          </h2>
        </BoxReveal>
        <BoxReveal>
          <p className='md:h-24 font-medium text-center text-base lg:text-xl'>
            Descubre los beneficios que más<br />te favorecerán dependiendo tu rubro
          </p>
        </BoxReveal>
      </div>
      <div className='w-[90%] md:w-[70%] h-[90%] md:h-[70%] flex flex-col items-center justify-center gap-12 md:gap-20'>
        <div className='w-full md:w-2/3 h-10 flex items-center bg-white/5 rounded-2xl cursor-pointer relative'>
          <div className='absolute top-0 left-0 h-full w-1/3 bg-white/15 rounded-2xl transition-all duration-300 ease-in-out'
               style={{
                 transform: `translateX(${selectedTab === 'empresas' ? '0' : selectedTab === 'educacion' ? '100%' : '200%'})`
               }}
          ></div>
          {tabs.map((tab, index) => (
            <div
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`w-1/3 h-full flex justify-center items-center z-10 transition-colors duration-300 ease-in-out
                          ${index === 0 ? 'rounded-l-2xl' : index === 2 ? 'rounded-r-2xl' : ''}`}
            >
              <p className={`text-xs text-center md:text-sm lg:text-base transition-all duration-300 ease-in-out
                             ${selectedTab === tab ? 'text-customCeleste filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)] font-semibold' : 'text-white font-medium'}`}>
                {tab === 'empresas' ? 'Empresas' :
                 tab === 'educacion' ? 'Instituciones educativas' : 'Certificadores'}
              </p>
            </div>
          ))}
        </div>
        <div className='h-full w-auto flex flex-col md:flex-row justify-between items-center md:items-start md:gap-0 gap-5'>
          {tabContent.filter(content => content.tab === displayedTab).map((content, index) => (
            <div
              key={index}
              className={`w-full md:w-1/2 h-auto flex flex-col items-center justify-start p-4 ml-2 gap-8 transition-all duration-300 ease-in-out bg-white/5 md:bg-transparent rounded-2xl
                          ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}
            >
              <div className='flex flex-row gap-5 items-center mb-2'>
                <img src={content.icon} alt={content.title} className='h-10 w-auto'/>
                <p className='text-white font-medium text-xl'>{content.title}</p>
              </div>
              <ul className='w-full'>
                {content.items.map((item, index) => (
                  <li key={index} className="text-white text-base md:text-lg mb-2 flex flex-row gap-1.5">
                    <span className="text-customCeleste filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)] flex-shrink-0">•</span>
                    <span className="flex-grow">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Potencia;
