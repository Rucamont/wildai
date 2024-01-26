import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import jsonNombres from "../resources/nombre_comun.json";
import "../components/css/especie.css";

const EspeciesMap = ({ especie }) => {
  const [fotos, setFotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const region = process.env.REACT_APP_AWS_REGION;
  const token = process.env.REACT_APP_AWS_SESSION_TOKEN;

  const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: region,
    sessionToken: token
  });

  const paramsS3 = {
    Bucket: 'observatorio-mti',
    Prefix: `Quebrada Mono Aullador/${especie}`,
  };

  useEffect(() => {
    const paramsListadoFotos = {
      ...paramsS3,
    };

    s3.listObjectsV2(paramsListadoFotos, (err, data) => {
      if (err) {
        console.error('Error al listar fotos de S3:', err);
      } else {
        const fotos = data.Contents.map(foto => ({
          src: `https://observatorio-mti.s3.amazonaws.com/${foto.Key}`,
          nombreCientifico: foto.Key.split('/').pop().split('.')[0],
          nombreComun: jsonNombres[foto.Key] || "Nombre común no encontrado",
        }));
        setFotos(fotos);
      }
    });
  }, [s3, paramsS3]);

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fotos.length);
    }, 2000); // Cambia el valor del intervalo según tus preferencias

    return () => clearInterval(intervalId);
  }, [fotos]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div>
        {fotos.length > 0 && (
          <div className="carousel-container">
            <ul className="image-list">
              {fotos.map((foto, index) => (
                <li
                  key={index}
                  className={`list-item ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={foto.src}
                    alt={`Imagen ${index}`}
                    className="list-image"
                  />
                </li>
              ))}
            </ul>
            <div className="carousel">
              {fotos.map((foto, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                  <img
                    src={foto.src}
                    alt={`Imagen ${index}`}
                    className="carousel-image"
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EspeciesMap;
