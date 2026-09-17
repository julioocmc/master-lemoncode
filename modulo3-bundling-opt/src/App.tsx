import React from 'react';
import logo from './assets/logo.png';

export const App: React.FC = () => {
  console.log('Entorno:', process.env.APP_ENV);

  return (
    <div>
      <img src={logo} width={150} alt="logo" />
      <h1>Hola mundo</h1>
    </div>
  );
};
