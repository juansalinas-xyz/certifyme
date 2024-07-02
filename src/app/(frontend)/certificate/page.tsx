"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./certificate.module.css";

import Fondo from "@/app/SharedComponents/Fondo/Fondo";
import Logo from "@/app/SharedComponents/Logo/Logo";
import Informacion from "./components/Informacion/Informacion";
import Certificado from "./components/Certificado/Certificado";
import Tokenizer from "./components/Tokenizer/Tokenizer";

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

interface CertificadoProps {
  title: string;
  description: string;
  logoInstitucion: string;
  linkBlockchain: string;
  certificado: string;
  urlLinkedin: string;
}

function Certificate() {
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  let UrlLinkedin: string = "https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Nombre-de-ejemplo&organizationId=2024&issueYear=2023&issueMonth=6&expirationYear=2026&expirationMonth=8&certUrl=https://allo.info/asset/1794400153/nft&certId= 1";

  useEffect(() => {
    // Agregar url al endpoint aca
    const apiUrl = "";

    const fetchData = async () => {
      try {
        const response = await axios.get<CertificateData>(apiUrl);
        setData(response.data);
        setLoading(false);
        UrlLinkedin = constructLinkedInUrl(response.data);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
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
      certId: certificationData.linkBlockchain
    });
  
    return `${baseUrl}?${params.toString()}`;
  }

  if (loading) return <div className="absolute w-screen h-screen flex justify-center items-center overflow-hidden"><Fondo /><div className={styles.loader}></div></div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>No data available</div>

  let objCertificado: CertificadoProps = {
    title: data.title,
    description: data.description,
    logoInstitucion: data.logoInstitucion,
    linkBlockchain: data.linkBlockchain,
    certificado: data.certificado,
    urlLinkedin: UrlLinkedin,
  }

  let objCertificadoEjemplo: CertificadoProps = {
    title: "Certificado de Marketing Digital",
    description: " Este certificado es prueba de haber completado el curso de marketing digital",
    logoInstitucion: "/pruebas/logo.png",
    linkBlockchain: "https://allo.info/asset/1794400153/nft/",
    certificado: "/pruebas/certificado.png",
    urlLinkedin: UrlLinkedin,
  }

  return (
    <div id="contenedor" className={`min-h-screen w-full flex flex-col lg:items-center bg-customBlackBackground absolute overflow-hidden z-[1]`}>
      <Fondo />
      <Logo />
      <div id="contenido" className="w-full h-screen flex justify-center items-center z-10 lg:-mt-[62px] ">
        <div className="w-full lg:w-4/5 lg:h-full flex flex-col items-center justify-center lg:flex-row gap-7 lg:gap-28">
          {/* Cambiar por 'objCertificado' */}
          <Informacion {...objCertificadoEjemplo} />
          <Certificado {...objCertificadoEjemplo} />
        </div>
      </div>
      <Tokenizer />
    </div>
  );
}

export default Certificate;
