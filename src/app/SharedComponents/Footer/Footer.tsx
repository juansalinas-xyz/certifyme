import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mb-14 flex flex-col justify-center items-center gap-4 -mt-7 lg:-mt-14">
      <div className="flex flex-row gap-3">
        <p className='text-white text-lg font-semibold'>Tokenizer</p>
        <img src="/home/protected.png" alt="" className='h-6 w-auto' />
      </div>
      <div className="flex flex-col md:flex-row justify-center text-white gap-1.5">
        <p className="text-xs md:text-sm font-light text-center">
          © 2024 Tokenizer, todos los derechos reservados.
        </p>
        {/* <p className="text-xs md:text-sm font-light text-center">
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
        </p> */}
      </div>
    </div>
  );
}

export default Footer;
