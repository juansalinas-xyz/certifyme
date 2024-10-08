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
  id: string;
  linkedin_organization_id: string; 
  heading: string;
  detail: string;
  institution_logo: string;
  institution_name: string;
  blockchain_explorer_url: string;
  image_url: string;
  url_drive: string;
  issue_year: string;
  issue_month: string;
  expiration_year: string;
  expiration_month: string;
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

function Certificate({params}: {params: {certificateId: string}}) {  
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [UrlLinkedin, setUrlLinkedin] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  useEffect(() => {    
    const apiUrl = `/api/certifications/${params.certificateId}`;

    const fetchData = async () => {
      try {
        await axios.get<CertificateData>(apiUrl).then((response: any) => {
          setData(response.data.fields);
          setLoading(false);
          setUrlLinkedin(constructLinkedInUrl(response.data.fields));
          setExpirationDate(response.data.fields.expiration_month + "/" + response.data.fields.expiration_year);
          setLoading(false);
        });
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function constructLinkedInUrl(certification_data: CertificateData) {
    const baseUrl = 'https://www.linkedin.com/profile/add';
    const parametros = new URLSearchParams({
      startTask: 'CERTIFICATION_NAME',
      organizationId: certification_data.linkedin_organization_id,
      name: certification_data.heading,
      issueYear: certification_data.issue_year,
      issueMonth: certification_data.issue_month,
      expirationYear: certification_data.expiration_year,
      expirationMonth: certification_data.expiration_month,
      certUrl: 'https://www.tokenizer.tech/certificate/'+params.certificateId,
      certId: params.certificateId,
    });
  
    console.log(`${baseUrl}?${parametros.toString()}`)

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
