import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";
import Porque from "./components/Porque/Porque";
import Como from "./components/Como/Como";
import Fondo from "./SharedComponents/Fondo/Fondo";
import Contacto from "./components/Contacto/Contacto";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center absolute overflow-x-hidden">
      <Fondo />
      <NavBar />
      <Inicio/>
      <Porque/>
      <Como />
      <Contacto />
    </main>
  )
};

