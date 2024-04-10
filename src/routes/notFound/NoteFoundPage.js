import React from 'react';
import './NotFoundPage.css'; // Asegúrate de crear un archivo CSS con el estilo necesario

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>PAGE NOT FOUND</p>
      <p className="message">La pagina que estas buscando pudo ser removida, cambio de nombre o temporalmente esta inactiva</p>
    </div>
  );
};

export  {NotFoundPage};