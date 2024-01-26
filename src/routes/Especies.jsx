// EspecieDetalle.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import EspeciesMap from '../components/EspeciesMap';

const EspecieDetalle = () => {
  const { nombreCientifico } = useParams();
  const {ubi} = useParams();
  // Lógica para mostrar detalles de la especie con el nombre científico proporcionado

  return (
    <div>
     <Header />

      <h2>Detalles de la especie: {nombreCientifico} {ubi}</h2>
      <EspeciesMap especie={nombreCientifico}/>
      {/* Agrega aquí la lógica para mostrar los detalles de la especie */}
    </div>
  );
};

export default EspecieDetalle;
