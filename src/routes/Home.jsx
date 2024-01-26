import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Funcionamiento from "../resources/presentacion.mp4";
import "../components/css/home.css";
import Camara from "../resources/camara.jpeg";
import S3ImageList from "../components/ListImage";
import PhotoCarousel from "../components/PhotoCarousel";
import foto1 from "../resources/prueba.png";
import foto2 from "../resources/prueba2.png";
import foto3 from "../resources/prueba3.png";
import foto4 from "../resources/prueba4.png";
import foto5 from "../resources/prueba5.png";
import foto6 from "../resources/prueba6.png";

const Home = () => {
  const imageList = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6
  ];

  return (
    <div className="page-container">
      <Header />
      {/* <PhotoCarousel images={imageList}/> */}
      
      {/* <div className="space-between"></div> Espacio adicional */}
      
      <div className="video-container">
        <div className="shadow-overlay"></div>
        <video autoPlay muted loop width="100%" height="auto">
          <source src={Funcionamiento} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="text-overlay">
          <h2>PROYECTO MULTIDISCIPLINARIO</h2>
          
          <p>
            Introducimos "WildAI": una revolucionaria solución para el Bosque Protector Prosperina. Nuestro modelo de automatización de clasificación de especies combina tecnología avanzada con la riqueza natural del bosque. Simplificamos el monitoreo, reduciendo la carga manual y abriendo nuevas posibilidades para la investigación y educación ambiental. 
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
