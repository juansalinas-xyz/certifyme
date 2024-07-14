"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "src/app/SharedComponents/Footer/Footer";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeWidth = scrollPosition > 50;
      setIsScrolled(shouldChangeWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  }

  const menuItems = [
    { id: "inicio", text: "Inicio" },
    { id: "acercade", text: "¿Por qué Tokenizer?" },
    { id: "como", text: "¿Cómo lo hacemos?" },
    { id: "contacto", text: "Contacto" },
  ];

  const socialIcons = [
    { src: "/home/linkedin.png", alt: "LinkedIn" },
    { src: "/home/whatsapp.png", alt: "WhatsApp" },
    { src: "/home/telegram.png", alt: "Telegram" },
  ];

  return (
    <>
      <div
        className={`fixed h-20 lg:h-[102px] w-screen flex justify-between items-center z-[100] px-7 lg:px-0 ${
          isScrolled
            ? "bg-customBlackBackground/50 md:bg-customBlackBackground/70 backdrop-blur-lg"
            : ""
        } transition-all duration-300`}
      >
        <div className="h-full flex items-center justify-start z-50">
          <Link href={"/"}>
            <Image
              src="/certify.png"
              alt="certify"
              width={100}
              height={15}
              className="z-50 lg:ml-16 drop-shadow-xl"
            />
          </Link>
        </div>

        <div className="lg:hidden flex h-full z-10 items-center active:translate-x-14 transition-all">
          <Image
            src={"/home/menu.png"}
            alt={""}
            height={30}
            width={30}
            className={`z-50 cursor-pointer ${isMenuOpen ? "hidden" : "block"}`}
            onClick={() => setTimeout(() => {
              setIsMenuOpen(!isMenuOpen)
            }, 100)}
          />
        </div>

        <div className="hidden lg:flex gap-10 h-full items-center z-50 text-white">
          {menuItems.map((item) => (
            <p
              key={item.id}
              onClick={() => scrollToElement(item.id, 100)}
              className="text-base font-medium cursor-pointer hover:text-customCeleste drop-shadow-xl"
            >
              {item.text}
            </p>
          ))}
        </div>

        <div className="hidden right-0 mr-20 lg:flex justify-center gap-2.5 z-50">
          {socialIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              alt={icon.alt}
              height={24}
              width={24}
              className="cursor-pointer filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-customBlackBackground z-[110]"
          >
            <div className="absolute top-8 w-full flex justify-center z-[900]">
              <Link href={"/"}>
                <Image
                  src="/certify.png"
                  alt="certify"
                  width={100}
                  height={15}
                  className="z-50 lg:ml-16 drop-shadow-xl"
                />
              </Link>
            </div>
            <div className="absolute top-8 right-8 z-[1000]">
              <Image 
                src={'/home/close.png'} 
                alt={'Close menu'} 
                height={15} 
                width={15} 
                className='cursor-pointer filter drop-shadow-[0_0_10px_rgba(1,202,189,0.5)]'
                onClick={() => setIsMenuOpen(false)}
              />
            </div>  
            <div className="flex flex-col items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center justify-center gap-3 mt-8"
              >
                {menuItems.map((item, index) => (
                  <motion.p
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToElement(item.id, 100)}
                    className="text-xl font-medium text-white mb-8 cursor-pointer hover:text-customCeleste transition-colors duration-300"
                  >
                    {item.text}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-6 mt-8"
              >
                {socialIcons.map((icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      height={32}
                      width={32}
                      className="cursor-pointer filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="text-white absolute bottom-0 w-full flex justify-center items-center">
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
