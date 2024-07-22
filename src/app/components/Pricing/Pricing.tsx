'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BoxReveal from '../BoxReveal/BoxReveal';

const plans = [
    { title: "Estándar", range: "De 1 a 1000 certificados por año.", price: "0.39", discount: "" },
    { title: "25% OFF", range: "De 1001 a 2000 certificados por año.", price: "0.29", discount: "25% OFF" },
    { title: "60% OFF", range: "2001 o más certificados por año.", price: "0.15", discount: "60% OFF" }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

const Pricing = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div id='precios' className='w-screen md:h-96 lg:h-auto flex flex-col gap-10 md:gap-20 justify-center items-center text-white z-50 mt-0 lg:py-20 md:px-0 px-5'>
            <div className='flex flex-col justify-center items-center md:gap-10'>
                <BoxReveal>
                    <h2 className='lg:h-10 md:h-16 h-28 font-bold text-center text-xl lg:text-3xl lg:whitespace-nowrap lg:px-0 px-0 md:px-5'>
                        Disfruta de todas las ventajas de la tecnología blockchain al mejor precio
                    </h2>
                </BoxReveal>
                <BoxReveal>
                    <p className='h-8 font-medium text-center text-base lg:text-xl'>
                        Un plan para cada necesidad
                    </p>
                </BoxReveal>
            </div>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className='w-[90%] lg:w-[70%] h-[90%] md:h-[70%] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-20'
            >
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover="hover"
                        className={`w-full md:w-1/3 h-auto rounded-2xl bg-white/5 lg:p-10 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-6 p-4 hover:scale-105 hover:bg-customBlackBackground/5 transition-all duration-500
                                    ${index === 1 ? 'shadow-[0_0_10px_rgba(1,202,189,0.9)]' : 
                                      index === 2 ? 'shadow-[0_0_20px_rgba(28,36,139,1)]' : 
                                      'shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}
                    >
                        <motion.p className='text-white text-2xl lg:text-3xl font-extrabold'>{plan.title}</motion.p>
                        <p className='text-white lg:text-xl font-medium text-center lg:text-start'>{plan.range}</p>
                        <div className='lg:mt-10 flex flex-col items-center lg:items-start justify-start lg:gap-2'>
                            <motion.p className='text-white text-3xl lg:text-4xl font-bold flex flex-row items-end gap-1.5'>
                                <b className='text-lg lg:text-2xl text-customCeleste font-bold'>USD</b>{plan.price}
                            </motion.p>
                            <p className='text-zinc-300 text-base lg:text-xl font-normal'>Costo por certificado</p>
                        </div>
                        <motion.button
                            onClick={() => scrollToElement('contacto')}
                            className={`group w-2/3 md:w-full h-10 md:text-base text-sm lg:h-12 rounded-full font-bold flex flex-row justify-between items-center px-6 transition-all duration-300 overflow-hidden
                                        ${index === 1 ? 'bg-customCeleste text-white hover:bg-customCeleste/80' : 
                                          index === 2 ? 'bg-customBlueFondo text-white hover:bg-customBlueFondo/80' : 
                                          'bg-white text-zinc-800 hover:bg-slate-200'}`}
                        >
                            Comenzar
                            <img src={index === 0 ? "/home/comenzar.png" : "/home/comenzar_blanco.png"} alt="Icono de comenzar" className='w-5 h-auto group-hover:translate-x-14 transition-all duration-300'/>
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Pricing;
