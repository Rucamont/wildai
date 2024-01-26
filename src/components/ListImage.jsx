import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import jsonNombres from "../resources/nombre_comun.json";
import "../components/css/listImage.css";
import { Link } from 'react-router-dom';

const Imagen = ({ src, nombreCientifico, nombreComun, prefix }) => (
  <div className="imagen-container">
    <div className='redirect'>
      <img
        src={src}
        alt="Imagen seleccionada"
        className="imagen-especies"
      />
      <Link to={`/especies/${prefix}${nombreCientifico}`} target="_blank">
        Ver
      </Link>
    </div>
    <div className="nombres-container">
      <b className="nombre-comun">{nombreComun}</b>
      <p>{nombreCientifico}</p>
    </div>
  </div>
);

const ListImage = ({ carpetaSeleccionada }) => {
  const [carpetas, setCarpetas] = useState([]);

  const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
  });

  const paramsS3 = {
    Bucket: 'observatorio-mti',
    Prefix: carpetaSeleccionada ? `${carpetaSeleccionada}/` : 'Fadcom',
  };

  useEffect(() => {
    // Verificar si carpetaSeleccionada es null antes de hacer la solicitud S3
    if (!carpetaSeleccionada) {
      return;
    }

    const paramsListadoCarpetas = {
      ...paramsS3,
      Delimiter: '/',
    };

    s3.listObjectsV2(paramsListadoCarpetas, (err, data) => {
      if (err) {
        console.error('Error al listar carpetas de S3:', err);
      } else {
        const carpetas = data.CommonPrefixes.map(carpeta => carpeta.Prefix.replace(paramsListadoCarpetas.Prefix, '').replace('/', ''));
        setCarpetas(carpetas);
        console.log(carpetaSeleccionada)
      }
    });
  }, [carpetaSeleccionada, s3]);

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h1>Cámara trampa</h1>
        <h3>{carpetaSeleccionada}</h3>
        <div>
          {carpetas.map((carpeta, index) => (
            <div key={index}>
              <Imagen
                src={`https://observatorio-mti.s3.amazonaws.com/${paramsS3.Prefix}${carpeta}/portada.jpg`}
                nombreCientifico={carpeta}
                prefix={paramsS3.Prefix}
                nombreComun={jsonNombres[carpeta] || "Nombre común no encontrado"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListImage;
