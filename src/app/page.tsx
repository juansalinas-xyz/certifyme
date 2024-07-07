import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";
import Porque from "./components/Porque/Porque";
import Como from "./components/Como/Como";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center absolute">
      <div className="absolute inset-0 h-screen w-screen flex justify-center items-center z-0">
        <div className={"luzCeleste1"}></div>
        <div className={"luzAzul1"}></div>
        <div className={"luzCeleste2"}></div>
        <div className={"luzAzul2"}></div>
        <div className={"luzCeleste3"}></div>
        <div className={"luzAzul3"}></div>
        <div className={"luzCeleste4"}></div>
        <div className={"luzAzul4"}></div>
      </div>
      <NavBar />
      <Inicio/>
      <Porque/>
      <Como />
    </main>
  );
}
