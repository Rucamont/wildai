import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Footer from "../components/Footer";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/css/observatorio.css"; // Asegúrate de importar tu archivo CSS

const Observatory = () => {
  return (
    <>
      <Header />
      <div className="search-bar">
        <div className="search-content">
          <h2>Observatorio</h2>
          <div className="search-input">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Buscar..." />
          </div>
        </div>
      </div>
      {/**Especies falta modifica */}
     
      <Map />
      <Footer />
    </>
  );
};

export default Observatory;
