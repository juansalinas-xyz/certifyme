"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import styles from ".././certificate.module.css";

import Fondo from "@/SharedComponents/Fondo/Fondo";
import Logo from "@/SharedComponents/Logo/Logo";
import Informacion from "../components/Informacion/Informacion";
import Certificado from "../components/Certificado/Certificado";
import Tokenizer from "../components/Tokenizer/Tokenizer";

interface CertificateData {
  heading: string;
  detail: string;
  institution_logo: string;
  institution_name: string;
  blockchain_explorer_url: string;
  image_url: string;
  url_drive: string;
  issue_year: string;
  issue_month: string;
  expiration_year: number;
  expiration_month: number;
}

interface CertificadoProps {
  heading: string;
  detail: string;
  institution_logo: string;
  institution_name: string;
  blockchain_explorer_url: string;
  image_url: string;
  url_linkedin: string;
  url_drive: string;
  expiration_date: string,
}

function Certificate({params}: {params: {certificate_id: string}}) {  
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  let UrlLinkedin!: string;
  let expirationDate!: string;

  useEffect(() => {    
    const apiUrl = `/api/certifications/${params.certificate_id}`;

    const fetchData = async () => {
      try {
        await axios.get<CertificateData>(apiUrl).then((response: any) => {
          setData(response.data);
          console.log(response.data);
          setLoading(false);
          UrlLinkedin = constructLinkedInUrl(response.data);
          expirationDate = data?.expiration_month + "/" + data?.expiration_year;
        });
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
    setLoading(false);
  }, []);

  function constructLinkedInUrl(certification_data: CertificateData) {
    const baseUrl = 'https://www.linkedin.com/profile/add';
    const parametros = new URLSearchParams({
      startTask: 'CERTIFICATION_NAME',
      name: certification_data.heading,
      issueYear: certification_data.issue_year.toString(),
      issueMonth: certification_data.issue_month.toString(),
      expirationYear: certification_data.expiration_year.toString(),
      expirationMonth: certification_data.expiration_month.toString(),
      certUrl: certification_data.image_url,
      certId: params.certificate_id,
    });
  
    return `${baseUrl}?${parametros.toString()}`;
  }

  if (loading) return <div className="absolute w-screen h-screen flex flex-col justify-center items-center gap-10 overflow-hidden"><Fondo /><div className={styles.loader}></div><p className="text-center text-white font-bold text-xl">Estamos buscando tu certificado</p></div>
  if (error) return <div className="absolute w-screen h-screen flex flex-col justify-center items-center gap-10 overflow-hidden"><Fondo /><Image src={"/home/error.png"} alt={""} width={130} height={45} className="filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]"/><p className="text-center text-white font-bold text-xl">Ha ocurrido un error, intentalo nuevamente.</p><p className="text-gray-400 text-center px-8">Error: {error.message}</p></div>
  if (!data) return <div className="absolute w-screen h-screen flex flex-col justify-center items-center gap-10 overflow-hidden"><Fondo /><Image src={"/home/error.png"} alt={""} width={130} height={45} className="filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]"/><p className="text-center text-white font-bold text-xl">No hay datos disponibles</p></div>

  let objCertificado: CertificadoProps = {
    heading: data.heading,
    detail: data.detail,
    institution_logo: data.institution_logo,
    institution_name: data.institution_name,
    blockchain_explorer_url: data.blockchain_explorer_url,
    image_url: data.image_url,
    url_linkedin: UrlLinkedin,
    url_drive: data.url_drive,
    expiration_date: expirationDate,
  }

  return (
    <div id="contenedor" className={`min-h-screen w-full flex flex-col lg:items-center bg-customBlackBackground absolute overflow-hidden z-[1]`}>
      <Fondo />
      <Logo />
      <div id="contenido" className="w-full h-auto lg:h-screen flex justify-center items-center z-10 mt-16 lg:-mt-[41px] ">
        <div className="w-full lg:w-4/5 lg:h-full flex flex-col items-center justify-center lg:flex-row gap-7 lg:gap-28">
          <Informacion {...objCertificado} />
          <Certificado {...objCertificado} />
        </div>
      </div>
      <Tokenizer />
    </div>
  );
}

export default Certificate;
