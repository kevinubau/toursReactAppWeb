import React, { Component } from "react";
import {Router, Route, browserHistory } from 'react-router';

import Login from "./Components/Login/Login";
import RegistroEmpresa from "./Components/RegistroEmpresa";
import ActivitiesRegister from "./Components/ActivitiesRegister";
//import Header from "./Components/Header";
import InicioEmpresa from "./Components/InicioEmpresa";


class Routes extends Component {

    
    render() {


        return (

            <Router history={browserHistory}>
                
                <Route path={"/"} component={Login} />
                <Route path={"login"} component={Login} />
                <Route path={"RegistroEmpresa"} component={RegistroEmpresa} />
                <Route path={"RegistroActividades"} component={ActivitiesRegister} />            
                <Route path={"Inicio"} component={InicioEmpresa} />  
            </Router>
  
        );
    }
  }
  
  export default Routes;