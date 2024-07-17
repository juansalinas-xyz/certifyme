

import React, { useState } from 'react'
import Image from "next/image";

function PorqueItem({title, text}) {
    const [IsActivated, setIsActivated] = useState(false);

    function activarTexto() {
        setIsActivated(!IsActivated);
    }
    
    return (
        <div className={`w-full flex flex-col justify-center items-center gap-8 rounded-lg transition-all duration-300 ease-in-out ${IsActivated ? "bg-white/5 p-5 mb-10" : ""}`}>
            <p className='text-base font-semibold text-center'>{title}</p>
            <div onClick={activarTexto} className='h-12 w-12 flex justify-center items-center bg-customCeleste rounded-full filter drop-shadow-[0_0_10px_rgba(1,202,189,0.5)] active:scale-95 active:shadow-none transition-all cursor-pointer'>
                <Image src={'/home/triangulo.png'} alt={''} height={20} width={20} className={`w-5 h-auto transition-transform duration-300 ${IsActivated ? 'rotate-180' : ''}`}/>
            </div>
            <div 
                className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                    IsActivated ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="text-sm text-center w-full py-4">{text}</p>
            </div>
        </div>
    )
}

export default PorqueItem