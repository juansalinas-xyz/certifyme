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
  title: string;
  description: string;
  logoInstitucion: string;
  institucionName: string;
  linkBlockchain: string;
  certificado: string;
  urlDrive: string;
  yearOfIssue: string;
  monthOfIssue: string;
  organizationId: string;
  certId: string;
  expirationYear: number;
  expirationMonth: number;
}

interface CertificadoProps {
  title: string;
  description: string;
  logoInstitucion: string;
  institucionName: string;
  linkBlockchain: string;
  certificado: string;
  urlLinkedin: string;
  urlDrive: string;
  expirationDate: string,
}

function Certificate({params}: {params: {certificateId: string}}) {  
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  let UrlLinkedin: string = "https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Nombre-de-ejemplo&organizationId=2024&issueYear=2023&issueMonth=6&expirationYear=2026&expirationMonth=8&certUrl=https://allo.info/asset/1794400153/nft&certId= 1";
  let expirationDate!: string;

  useEffect(() => {    
    const apiUrl = `/api/certifications/${params.certificateId}`;

    const fetchData = async () => {
      try {
        await axios.get<CertificateData>(apiUrl).then((response: any) => {
          setData(response.data);
          setLoading(false);
          UrlLinkedin = constructLinkedInUrl(response.data);
          expirationDate = data?.expirationMonth + "/" + data?.expirationYear;
        });
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
    setLoading(false);
  }, []);

  function constructLinkedInUrl(certificationData: CertificateData) {
    const baseUrl = 'https://www.linkedin.com/profile/add';
    const params = new URLSearchParams({
      startTask: 'CERTIFICATION_NAME',
      name: certificationData.title,
      organizationId: certificationData.organizationId,
      issueYear: certificationData.yearOfIssue.toString(),
      issueMonth: certificationData.monthOfIssue.toString(),
      expirationYear: certificationData.expirationYear.toString(),
      expirationMonth: certificationData.expirationMonth.toString(),
      certUrl: certificationData.certificado,
      certId: certificationData.linkBlockchain,
    });
  
    return `${baseUrl}?${params.toString()}`;
  }

  if (loading) return <div className="absolute w-screen h-screen flex flex-col justify-center items-center gap-10 overflow-hidden"><Fondo /><div className={styles.loader}></div><p className="text-center text-white font-bold text-xl">Estamos buscando tu certificado</p></div>
  if (error) return <div className="absolute w-screen h-screen flex flex-col justify-center items-center gap-10 overflow-hidden"><Fondo /><Image src={"/home/error.png"} alt={""} width={130} height={45} className="filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]"/><p className="text-center text-white font-bold text-xl">Ha ocurrido un error, intentalo nuevamente.</p><p className="text-gray-400">Error: {error.message}</p></div>
  if (!data) return <div className="absolute w-screen h-screen flex flex-col justify-center items-center gap-10 overflow-hidden"><Fondo /><Image src={"/home/error.png"} alt={""} width={130} height={45} className="filter drop-shadow-[0_0_10px_rgba(1,202,189,0.6)]"/><p className="text-center text-white font-bold text-xl">No hay datos disponibles</p></div>

  let objCertificado: CertificadoProps = {
    title: data.title,
    description: data.description,
    logoInstitucion: data.logoInstitucion,
    institucionName: data.institucionName,
    linkBlockchain: data.linkBlockchain,
    certificado: data.certificado,
    urlLinkedin: UrlLinkedin,
    urlDrive: data.urlDrive,
    expirationDate: expirationDate,
  }

  let objCertificadoEjemplo: CertificadoProps = {
    title: "Certificado de Marketing Digital",
    description: " Este certificado es prueba de haber completado el curso de marketing digital",
    logoInstitucion: "/pruebas/logo.png",
    institucionName: "Google",
    linkBlockchain: "https://allo.info/asset/1794400153/nft/",
    certificado: "/pruebas/certificado.png",
    urlLinkedin: UrlLinkedin,
    urlDrive: "",
    expirationDate: "12/2026",
  }

  return (
    <div id="contenedor" className={`min-h-screen w-full flex flex-col lg:items-center bg-customBlackBackground absolute overflow-hidden z-[1]`}>
      <Fondo />
      <Logo />
      <div id="contenido" className="w-full h-auto lg:h-screen flex justify-center items-center z-10 mt-16 lg:-mt-[41px] ">
        <div className="w-full lg:w-4/5 lg:h-full flex flex-col items-center justify-center lg:flex-row gap-7 lg:gap-28">
          {/* Cambiar por 'objCertificado' */}
          <Informacion {...objCertificado} />
          <Certificado {...objCertificado} />
        </div>
      </div>
      <Tokenizer />
    </div>
  );
}

export default Certificate;
