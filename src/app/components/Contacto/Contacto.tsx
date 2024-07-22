import React from 'react'
import ContactForm from '../ContactForm/ContactForm';
import ContactMedium from '../ContactMedium/ContactMedium';
import BoxReveal from '../BoxReveal/BoxReveal';

function Contacto() {
  return (
    <div id='contacto' className='p-10 w-[90%] flex flex-col items-center gap-5 text-white z-50'>
      <BoxReveal>
        <h2 className='text-4xl font-semibold text-white text-center'>Contáctanos</h2>
      </BoxReveal>
      <div className='w-full md:w-2/3 h-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-12 text-white mt-10'>
        {/* Contact Form */}
        <div className='w-full h-full flex justify-end items-center'>
          <ContactForm />
        </div>
        <p className='text-base font-light'>Ó</p>
        <div className='mt-2 w-full h-full flex flex-row lg:flex-col justify-center lg:justify-start items-start gap-10'>
          {/* WhatsApp */}
          <ContactMedium iconPath={'/home/whatsapp.png'} text={'Envianos un WhatsApp'} />
          {/* Telegram */}
          <ContactMedium iconPath={'/home/telegram.png'} text={'Contáctanos por Telegram'} />
          {/* Correo */}
          <ContactMedium iconPath={'/home/correo.png'} text={'Contactanos por correo'} />
        </div>
      </div>
    </div>
  )
}

export default Contacto