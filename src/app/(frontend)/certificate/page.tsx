'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";

import styles from './certificate.module.css';
import Link from 'next/link';

interface CertificateData {
  title: string;
  description: string;
  logoInstitucion: string;
  linkBlockchain: string;
  certificado: string;
  yearOfIssue: string;
  monthOfIssue: string;
  organizationId: string;
  certId: string;
  expirationYear: number;
  expirationMonth: number;
}

function Certificate() {
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  let UrlLinkedin: string = 'https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Nombre-de-ejemplo&organizationId=2024&issueYear=2023&issueMonth=6&expirationYear=2026&expirationMonth=8&certUrl=https://allo.info/asset/1794400153/nft&certId= 1';

  useEffect(() => {
    const apiUrl = '';

    const fetchData = async () => {
      try {
        const response = await axios.get<CertificateData>(apiUrl);
        setData(response.data);
        setLoading(false);
        UrlLinkedin = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${data?.title}&organizationId=${data?.organizationId}&issueYear=${data?.yearOfIssue}&issueMonth=${data?.monthOfIssue}&expirationYear=${data?.expirationYear}&expirationMonth=${data?.expirationMonth}&certUrl=${data?.linkBlockchain}&certId=${data?.certId}`;
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className='h-screen w-screen flex justify-center bg-customBlackBackground overflow-hidden'>
        <div className='absolute h-screen w-screen flex justify-center items-center overflow-hidden'>
          <div className={styles.luzCeleste1}></div>
          <div className={styles.luzAzul1}></div>
          <div className={styles.luzCeleste2}></div>
          <div className={styles.luzAzul2}></div>
        </div>
        <div className='w-full flex justify-start absolute'>
          <Link href={"/"}>
            <Image 
                src="/certify.png" 
                alt="certify" 
                width={99} 
                height={20} 
                className='z-50 absolute ml-16 mt-[42px]'
              />
            </Link>
        </div>
        <div className='w-4/5 h-full flex justify-center items-center z-50 bg-red-'>
          <div className='w-full h-full flex justify-center flex-row z-40 gap-[130px]'>
            <div className='w-auto h-full flex flex-col justify-center items-center gap-[30px]'>
              {/* LOGO DE LA EMPRESA */}
              <div className='w-[90px] h-[90px] rounded-full bg-white flex justify-center items-center overflow-hidden'>
                <Image src={'/pruebas/logo.png'} alt={''} height={75} width={75} className='h-auto w-auto'/>
              </div>
              {/* TITULO DEL CERTIFICADO */}
              <div className='w-[301px]'>
                <h2 className='text-white text-center font-bold text-[32px] leading-[39px]'>
                  Certificado de Marketing Digital
                </h2>
              </div>
              {/* DESCRIPCION DEL CERTIFICADO */}
              <div className='w-[301px]'>
                <p className="text-white text-center font-medium text-[19px] leading-[22px]">
                  Este certificado es prueba de haber completado el curso de marketing digital
                </p>
              </div>
              {/* BOTON DE AÑADIR A LINKEDIN */}
              {/* <div className='inline-flex h-12 shrink-0 justify-center items-center px-6 py-2.5 bg-customBlueLinkedin shadow-xl rounded-[40px] gap-2 cursor-pointer hover:scale-[1.02] transition-all duration-300'>
                <Image src={'/certificate/linkedin.svg'} alt={''} width={27} height={27} />
                <p className='text-white text-center font-medium text-sm'>Añadir a tu perfil de LinkedIn</p>
              </div> */}
              <Link href={UrlLinkedin} target='_blank'>
                <div className='group inline-flex h-12 shrink-0 justify-center items-center px-6 py-3 bg-customBlueLinkedin shadow-xl rounded-[40px] gap-2 cursor-pointer hover:shadow-none transition-all duration-500'>
                  <Image src={'/certificate/linkedin.svg'} alt={''} width={27} height={27} className='group-hover:translate-x-[110px] group-hover:drop-shadow-xl transition-all duration-500' />
                  <p className='text-white text-center font-medium text-sm group-hover:opacity-0 group-hover:invisible transition-all duration-200'>Añadir a tu perfil de LinkedIn</p>
                </div>
              </Link>
            </div>
            <div className='w-auto h-full flex flex-col justify-center items-center gap-6 bg-blue-'>
              {/* CERTIFICADO */}
              <div className='w-full flex justify-center items-center'>
                <Image src={'/pruebas/certificado.png'} alt={''} height={526} width={741} className='w-[100%]' priority />
              </div>
              {/* LINK A BLOCKCHAIN */}
              <div className='w-4/5 max-w-[741px] flex flex-row justify-center gap-1.5'>
                <p className='text-white text-center text-sm font-normal'>Verificación: </p>
                <Link href={"https://allo.info/asset/1794400153/nft/"} className='text-white text-center text-sm font-medium hover:underline'>https://allo.info/asset/1794400153/nft/</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Certificate;
