'use client'

import React, { useState } from "react";

interface CardProps {
    cardNumber: number;
    icon: string;
    title: string;
    items: string[];
}

function CardSectores({cardNumber, icon, title, items}: CardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`group h-96 flex flex-col justify-between shadow-2xl bg-[#FFFBF0]/5 rounded-lg transition-all duration-500 ease-in-out overflow-hidden
                w-[90%] sm:w-[calc(50%-12px)] lg:w-[calc(20%-9px)] lg:hover:w-[calc(50%-12px)]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full h-full flex flex-col items-center relative p-4">
                <div className={`absolute transition-all duration-500 ease-in-out
                    ${isHovered ? "top-10" : "top-1/2 -translate-y-1/2"}`}>
                    <img 
                        src={icon} 
                        alt="" 
                        className="h-20 md:h-24 w-auto filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)] group-hover:h-20 transition-all duration-300 ease-in-out"
                    />
                </div>
                <ul className={`mt-40 transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'} overflow-hidden`}>
                    {items.map((item, index) => (
                        <li key={index} className="text-white text-base mb-2 flex flex-row gap-1.5">
                            <span className="text-customCeleste filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)] flex-shrink-0">•</span>
                            <span className="flex-grow">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto w-full flex justify-center items-center">
                    <p className="text-xl font-bold text-white text-center">{title}</p>
                </div>
            </div>
        </div>
    );
}

export default CardSectores;