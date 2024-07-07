import React from 'react'
import Image from "next/image";

function Inicio() {
  return (
    // <div id='inicio' className="w-4/5 h-screen flex flex-col lg:flex-row justify-center items-center z-10 text-white mt-0 lg:mt-8 gap-4 lg:gap-28">
    //   <div className="h-auto w-auto flex flex-col justify-center items-center gap-4 lg:gap-8 px-5 lg:px-0">
    //     <h1 className="w-[300px] lg:w-[491px] text-4xl lg:text-6xl font-bold lg:leading-[58px] text-center">DIGITALIZA Y PROTEGE<br/>tus certificados</h1>
    //     <p className="w-[293px] lg:w-[541px] text-center text-[15px] lg:text-lg font-normal leading-normal">Garantiza la inmutabilidad y seguridad de tus certificados mediante tecnología blockchain.</p>
    //     <button className="hidden lg:flex w-[146px] lg:w-[179px] h-[47px] lg:h-[56px] rounded-[40px] lg:py-[17px] lg:px-[10px] justify-center items-center bg-customCeleste text-sm lg:text-lg font-bold text-black hover:scale-[1.02] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-300">Comienza Ya</button>
    //   </div>
    //   <div className="h-auto w-auto flex flex-col justify-center items-center">
    //     <Image src={"/home/certificados.png"} alt={""} width={660} height={660} className="w-[95%] lg:w-[660px] lg:h-[660px] lg:min-w-[550px] lg:min-h-[550px]"/>
    //   </div>
    //   <button className="flex lg:hidden w-[146px] lg:w-[179px] h-[47px] lg:h-[56px] rounded-[40px] lg:py-[17px] lg:px-[10px] justify-center items-center bg-customCeleste text-sm lg:text-lg font-bold text-black hover:scale-[1.02] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-300">Comienza Ya</button>
    // </div>





    <div id='inicio' className="w-full lg:w-4/5 h-screen flex flex-col lg:flex-row justify-center items-center z-10 text-white mt-8 lg:mt-8 gap-4 lg:gap-28">
      <div className="h-auto w-auto flex lg:hidden flex-col justify-center items-center">
        <Image src={"/home/certificados.png"} alt={""} width={2572} height={1843} className="w-[90vw] h-auto lg:w-[660px] lg:h-[660px] lg:min-w-[550px] lg:min-h-[550px]"/>
      </div>
      <div className="h-auto w-auto flex flex-col justify-center items-center gap-6 lg:gap-8 px-5 lg:px-0">
        <h1 className="w-[90vw] lg:w-[491px] text-[36px] lg:text-6xl font-bold tracking-wide lg:tracking-normal leading-tight lg:leading-[58px] text-center">DIGITALIZA Y PROTEGE<br/>tus certificados</h1>
        <p className="w-[293px] lg:w-[541px] text-center text-[15px] lg:text-lg font-normal leading-normal">Garantiza la inmutabilidad y seguridad de tus certificados mediante tecnología blockchain.</p>
        <button className="hidden lg:flex w-[146px] lg:w-[179px] h-[47px] lg:h-[56px] rounded-[40px] lg:py-[17px] lg:px-[10px] justify-center items-center bg-customCeleste text-sm lg:text-lg font-bold text-black hover:scale-[1.02] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-300">Comienza Ya</button>
      </div>
      <div className="h-auto w-auto hidden lg:flex flex-col justify-center items-center">
        <Image src={"/home/certificados.png"} alt={""} width={2572} height={1843} className="w-auto h-auto "/>
      </div>
      <button className="flex lg:hidden mt-4 w-[146px] lg:w-[179px] min-h-[47px] lg:h-[56px] rounded-[40px] lg:py-[17px] lg:px-[10px] justify-center items-center bg-customCeleste text-sm lg:text-lg font-bold text-black hover:scale-[1.02] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)] hover:text-white transition-all duration-300">Comienza Ya</button>
    </div>
  )
}

export default Inicio