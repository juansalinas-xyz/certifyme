import React from 'react'

function Fondo({ screen = '' }) {
  return (
    <div className="absolute inset-0 h-screen w-screen flex justify-center items-center z-0">
        <div className={`${screen == ''? 'flex' : 'hidden'}`}>
          <div className={"luzGris1"}></div>
          <div className={"luzAzul1"}></div>
          <div className={"luzGris2"}></div>
          <div className={"luzAzul2"}></div>
        </div>
        <div className={"luzGris3"}></div>
        <div className={"luzAzul3"}></div>
        <div className={"luzGris4"}></div>
        <div className={"luzAzul4"}></div>
        <div className={"luzGris5"}></div>
        <div className={"luzAzul5"}></div>
        <div className={"luzGris6"}></div>
        <div className={"luzAzul6"}></div>
    </div>
  )
}

export default Fondo