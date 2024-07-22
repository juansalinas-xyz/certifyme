import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";
import Porque from "./components/Porque/Porque";
import Como from "./components/Como/Como";
import Fondo from "./SharedComponents/Fondo/Fondo";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./SharedComponents/Footer/Footer";
import Sectores from "./components/Sectores/Sectores";
import Potencia from "./components/Potencia/Potencia";
import Pricing from "./components/Pricing/Pricing";
import AnimatedElement from "./components/AnimatedComponent/AnimatedComponent";
import FadeInSection from "./SharedComponents/FadeInSection/FadeInSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <div className="flex w-screen min-h-screen flex-col items-center overflow-hidden z-1 filter backdrop-blur-xl">
        <Fondo screen="landing" />
        <div className="w-screen min-h-screen flex flex-col flex-wrap gap-28 lg:gap-52 items-center z-[2]">
          <FadeInSection>
            <Inicio />
          </FadeInSection>
          <AnimatedElement direction="right" className="w-screen">
            <Sectores />
          </AnimatedElement>
          <AnimatedElement>
            <Porque />
          </AnimatedElement>
          <AnimatedElement direction="right" className="w-screen">
            <Potencia />
          </AnimatedElement>
          <AnimatedElement>
            <Como />
          </AnimatedElement>
          <AnimatedElement direction="right" className="w-screen">
            <Pricing />
          </AnimatedElement>
          <Contacto />
          <Footer />
        </div>
      </div>
    </main>
  );
}
