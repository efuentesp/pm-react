import React from 'react';
import { Link } from 'react-router';

const Forbidden = () => {

  return (
    <div className="wrapper">
      <div className="abs-center wd-xl">
        <div className="text-center mb-xl">
            <div className="text-lg mb-lg">Sin Acceso</div>
            <p className="lead m0">No cuenta con la autorización para ver la información solicitada.</p>
            <p>Intente entrar al sitio con su usuario.</p>
        </div>
        <ul className="list-inline text-center text-sm mb-xl">
          <li><Link to="/" className="text-muted">Ir al Inicio</Link></li>
          <li className="text-muted">|</li>
          <li><Link to="login" className="text-muted">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Forbidden;
