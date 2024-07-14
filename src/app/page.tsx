import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";
import Porque from "./components/Porque/Porque";
import Como from "./components/Como/Como";
import Fondo from "./SharedComponents/Fondo/Fondo";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./SharedComponents/Footer/Footer";
import Sectores from "./components/Sectores/Sectores";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex w-screen min-h-screen flex-col items-center overflow-hidden z-1 filter backdrop-blur-xl">
        <div className="hidden md:block">
          <Fondo screen="landing" />
        </div>

        <div className="w-screen min-h-screen flex flex-col flex-wrap gap-12 lg:gap-32 items-center z-[2]">
          <Inicio />
          <Porque />
          <Como />
          <Sectores />
          <Contacto />
          <Footer />
        </div>
      </main>
    </>
  );
}
