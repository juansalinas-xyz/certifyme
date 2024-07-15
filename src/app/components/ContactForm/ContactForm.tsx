'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";

const FloatingLabelInput = ({ value, onChange, type, name, placeholder, isEmpty }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholder);

  useEffect(() => {
    if (isEmpty && value === '') {
      setCurrentPlaceholder("Este campo es obligatorio.");
    } else {
      setCurrentPlaceholder(placeholder);
    }
  }, [isEmpty, value, placeholder]);

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        placeholder={isFocused ? '' : currentPlaceholder}
        className={`h-10 w-full bg-transparent border-2 border-white rounded-md px-2 placeholder:text-[15px] focus:outline-none focus:border-customCeleste ${isEmpty && value === '' ? 'border-red-600 placeholder:text-red-600 transition-all duration-300' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={name}
        className={`absolute left-2 text-sm transition-all duration-200 
          ${isFocused || value 
            ? 'top-[-20px] text-customCeleste font-medium opacity-100' 
            : 'top-2 text-white opacity-0'}`}
      >
        {placeholder}
      </label>
    </div>
  );
};

const FloatingLabelTextarea = ({ value, onChange, name, placeholder, isEmpty }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholder);

  useEffect(() => {
    if (isEmpty && value === '') {
      setCurrentPlaceholder("Este campo es obligatorio.");
    } else {
      setCurrentPlaceholder(placeholder);
    }
  }, [isEmpty, value, placeholder]);

  return (
    <div className="relative w-full">
      <textarea
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={isFocused ? '' : currentPlaceholder}
        maxLength={250}
        className={`min-h-40 w-full bg-transparent border-2 border-white rounded-md px-2 pt-2 placeholder:text-[15px] resize-none focus:outline-none focus:border-customCeleste ${isEmpty && value === '' ? 'border-red-600 placeholder:text-red-600 transition-all duration-300' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      ></textarea>
      <label
        htmlFor={name}
        className={`absolute left-2 text-sm transition-all w-full flex justify-between duration-200 
          ${isFocused || value 
            ? 'top-[-20px] text-customCeleste font-medium opacity-100' 
            : 'top-2 text-white opacity-0'}`}
      >
        {placeholder}
        <p className='mr-4'>{value.length}/250</p>
      </label>
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);

  function sendMail() {
    setEmptyName(name == '');
    setEmptyEmail(email == '');
    setEmptyMessage(message == '');
  }

  return (
    <form className='w-[400px] h-auto flex justify-center items-center flex-col gap-4'>
      <div className='w-full h-auto flex flex-col justify-center items-center gap-8'>
        <p className='text-2xl font-medium text-center text-white'>Envianos un correo</p>
        <FloatingLabelInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Nombre y apellido"
          isEmpty={emptyName}
        />
        <FloatingLabelInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          isEmpty={emptyEmail}
        />
        <FloatingLabelTextarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="mensaje"
          placeholder="Mensaje"
          isEmpty={emptyMessage}
        />
      </div>
      <div className="w-full flex justify-end">
          <button
            onClick={sendMail}
            type="button"
            className="group w-10 h-10 rounded-full bg-customCeleste flex items-center justify-center overflow-hidden transition-all duration-300 hover:w-[100px] hover:shadow-[0_0_10px_5px_rgba(0,201,189,0.5)]"
          >
            <p className='text-white font-semibold overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-[70px]'>
              <span className="whitespace-nowrap px-2">Enviar</span>
            </p>
            <Image 
              src={'/home/enviar.png'} 
              alt={''}
              width={20} 
              height={20}
              className="cursor-pointer filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-105 transition-all duration-300" 
            />
          </button>
        </div>
    </form>
  );
};

export default ContactForm;