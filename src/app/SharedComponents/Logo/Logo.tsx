"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeWidth = scrollPosition > 50; // Ajusta este valor según tu preferencia
      setIsScrolled(shouldChangeWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-[100]">
      <div className="w-screen lg:flex justify-start z-[102] hidden">
        <Link href={"/"}>
          <Image
            src="/certify.png"
            alt="certify"
            width={124}
            height={20}
            className="z-[101] ml-16 mt-[42px] cursor-pointer"
          />
        </Link>
      </div>
      <div className={`w-screen h-20 lg:hidden z-[100] flex items-center fixed ${isScrolled ? "bg-customBlackBackground/70 backdrop-blur-lg" : ""} transition-all duration-300`}>
        <Link href={"/"}>
          <Image
            src="/certify.png"
            alt="certify"
            width={110}
            height={18}
            className="z-[101] ml-7"
          />
        </Link>
      </div>
    </div>
  );
}

export default Logo;
