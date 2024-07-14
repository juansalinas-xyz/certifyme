'use client'

import React, { useRef, useEffect } from 'react'
import Image from "next/image";

function PorqueItem({title, text, isActive, onToggle}) {
    const contentRef = useRef(null);
    const [height, setHeight] = React.useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isActive ? contentRef.current.scrollHeight : 0);
        }
    }, [isActive]);

    return (
        <div className={`w-full flex flex-col justify-center items-center gap-8 rounded-lg transition-all duration-300 ease-in-out ${isActive ? "bg-white/5 p-5 mb-10 w-full" : ""}`}>
            <p className='text-base font-semibold text-center'>{title}</p>
            <div onClick={onToggle} className='h-12 w-12 flex justify-center items-center bg-customCeleste rounded-full filter drop-shadow-[0_0_10px_rgba(1,202,189,0.5)] active:scale-95 active:shadow-none transition-all cursor-pointer'>
                <Image src={'/home/triangulo.png'} alt={''} height={20} width={20} className={`w-5 h-auto transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}/>
            </div>
            <div 
                ref={contentRef}
                style={{ height: `${height}px` }}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
            >
                <p className="text-sm text-center">{text}</p>
            </div>
        </div>
    )
}

export default PorqueItem