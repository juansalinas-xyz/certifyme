import React from 'react'

function Fondo({ screen = '' }) {
  return (
    <div className="absolute inset-0 h-screen w-screen flex justify-center items-center z-0">
        <div className={`${screen == ''? 'flex' : 'hidden'}`}>
          <div className={"luzCeleste1"}></div>
          <div className={"luzAzul1"}></div>
          <div className={"luzCeleste2"}></div>
          <div className={"luzAzul2"}></div>
        </div>
        <div className={"luzCeleste3"}></div>
        <div className={"luzAzul3"}></div>
        <div className={"luzCeleste4"}></div>
        <div className={"luzAzul4"}></div>
    </div>
  )
}

export default Fondo