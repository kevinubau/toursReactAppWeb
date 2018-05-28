import React, { Component } from 'react';

import {Router, Route, browserHistory, IndexRoute } from 'react-router';
import {Root} from "./Root";
import {ActivitiesRegister} from "./Components/ActivitiesRegister";
import {RegistroEmpresa} from "./Components/RegistroEmpresa";


class Aplicacion extends React.Component {
  render() {
      return (
          <Router history={browserHistory}>
              <Route path={"/"} component={Root} >
                  <IndexRoute component={ActivitiesRegister} />
                  <Route path={"RegistroEmpresa"} component={RegistroEmpresa} />
                  <Route path={"RegistroActividades"} component={ActivitiesRegister} />
              </Route>
              <Route path={"ActivitiesRegister-single"} component={ActivitiesRegister} />
          </Router>

      );
  }
}

export default Aplicacion;