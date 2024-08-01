import React from 'react'
import ContactMedium from '../ContactMedium/ContactMedium';
import BoxReveal from '../BoxReveal/BoxReveal';

function Contacto() {
  return (
    <div id='contacto' className='p-10 w-[90%] flex flex-col items-center gap-8 lg:gap-20 text-white z-50 lg:mb-0 mb-0'>
      <BoxReveal>
        <h2 className='text-4xl font-bold text-white text-center'>Contáctanos</h2>
      </BoxReveal>
      <BoxReveal>
        <div className='w-full flex justify-center'>
          <p className='text-sm md:text-xl font-medium text-white text-center w-full lg:w-2/3'>Contactános para obtener más información sobre nuestros servicios y sus ventajas. Estamos para responder tus preguntas y brindarte toda la información que necesitas.</p>
        </div>
      </BoxReveal>
      <div className='w-full md:w-2/3 h-auto flex justify-center items-center gap-8 lg:gap-12 text-white md:mt-0 mt-5'>
        <div className='mt-2 w-auto h-full flex flex-row justify-center lg:justify-start items-center gap-10'>
          {/* WhatsApp */}
          <ContactMedium iconPath={'/home/whatsapp.png'} text={'WhatsApp'} />
          {/* Telegram */}
          <ContactMedium iconPath={'/home/telegram.png'} text={'Telegram'} />
          {/* Correo */}
          <ContactMedium iconPath={'/home/correo.png'} text={'E-mail'} />
          {/* Linkedin */}
          <ContactMedium iconPath={'/home/linkedin.png'} text={'LinkedIn'} />
        </div>
      </div>
    </div>
  )
}

export default Contacto