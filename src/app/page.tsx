import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";
import Porque from "./components/Porque/Porque";
import Como from "./components/Como/Como";
import Fondo from "./SharedComponents/Fondo/Fondo";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./SharedComponents/Footer/Footer";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center absolute overflow-hidden z-1">
      <Fondo />
      <div className="w-screen min-h-screen flex flex-col items-center overflow-hidden z-[2]">
        <NavBar />
        <Inicio/>
        <Porque/>
        <Como />
        <Contacto />
        <Footer />
      </div>
    </main>
  )
};

