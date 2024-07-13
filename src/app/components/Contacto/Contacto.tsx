import React from 'react'
import ContactForm from '../ContactForm/ContactForm';
import ContactMedium from '../ContactMedium/ContactMedium';

function Contacto() {
  return (
    <div id='contacto' className='hidden mt-[190px] w-[90%] md:flex flex-col items-center gap-5 text-white pt-[40px] z-50 rounded-[24px] pb-14'>
      <h2 className='text-4xl font-semibold text-white text-center'>Contáctanos</h2>
      <div className='w-2/3 flex flex-row justify-center items-center gap-12 text-white mt-10'>
        <ContactForm />
        <p className='text-base font-light'>Ó</p>
        <div className='mt-2 flex flex-col gap-10'>
          {/* WhatsApp */}
          <ContactMedium iconPath={'/home/whatsapp.png'} text={'Envianos un WhatsApp'} />
          {/* Telegram */}
          <ContactMedium iconPath={'/home/telegram.png'} text={'Contáctanos por Telegram'} />
          {/* Correo */}
          <ContactMedium iconPath={'/home/correo.png'} text={'Envianos un correo personalizado'} />
        </div>
      </div>
    </div>
  )
}

export default Contacto