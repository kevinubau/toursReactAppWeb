import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/estilo.css';
import RegistroEmpresa from './Components/RegistroEmpresa';
import ActivitiesRegister from './Components/ActivitiesRegister';
import Img from './Components/Img';
import ImagesUpload from './Components/ImagesUpload';


ReactDOM.render(
  <RegistroEmpresa /> ,
  document.getElementById('root')
);