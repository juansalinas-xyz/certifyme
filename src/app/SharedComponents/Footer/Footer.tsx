import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="hidden mt-8 lg:mt-[140px] mb-14 md:flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row gap-3">
        <p className='text-white text-lg font-semibold'>Tokenizer</p>
        <img src="/home/protected.png" alt="" className='h-6 w-auto' />
      </div>
      <div className="flex justify-center text-white gap-1.5">
        <p className="text-sm font-light text-center">
          © 2024 Tokenizer, todos los derechos reservados.
        </p>
        <p className="text-sm font-light text-center">
          Designed by{" "}
          <Link
            href={"https://www.linkedin.com/in/ivanrudiferia/"}
            target="_blank"
            className="underline"
          >
            Rudiferia
          </Link>{" "}
          - Dev by{" "}
          <Link
            href={"https://www.linkedin.com/in/santiago-iannello/"}
            target="_blank"
            className="underline"
          >
            Iannello
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
