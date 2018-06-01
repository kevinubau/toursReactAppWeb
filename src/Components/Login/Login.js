import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, NavItem, NavLink,Nav } from 'reactstrap';
import axios from 'axios';
import InicioEmpresa from "../InicioEmpresa";
import { browserHistory  } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';



export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      login : false
    };

    this.handlerPassword = this.handlerPassword.bind(this);
    this.handlerEmail = this.handlerEmail.bind(this);
  }

  handlerEmail(event){
    this.setState({email: event.target.value});
    console.log(event.target.value);

  }

  handlerPassword(event){
    this.setState({password: event.target.value});
    

  }

  




  handleSubmit = (event) => {

    axios.post('http://127.0.0.1:4000/login', this.state)
    .then(response => {
      console.log(response, 'Proceso exitoso!');
      if(response.data.usuario){
        this.setState({login:true});
        localStorage.setItem("usuario",JSON.stringify(response.data));
        browserHistory.push("/Inicio");
      }
      
    })
    .catch(err => {
      console.log(err, 'Error');
    });
    event.preventDefault();
}

  render() {
    //if(!this.state.login){

      return (
        <div>
          <div className='container'>

            <MuiThemeProvider>
              <div className='row' style={{textAlign:"center"}}>
                <h1>Sistema de administración de Tours.</h1>
              </div>
              <Paper elevation={4}>

              <div id="formContainer" className='sm-col-6 md-col-6 lg-col-8' style={{marginTop:100}}>
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Correo</Label>
                    <Input required value={this.state.email} onChange={this.handlerEmail} type="email" name="email" id="exampleEmail" placeholder="usuario@dominio.com" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Contraseña</Label>
                    <Input required value={this.state.password} onChange={this.handlerPassword} type="password" name="password" id="examplePassword" placeholder="su contraseña" />
                  </FormGroup>
                  <div style={{margin: 20, textAlign:"center"}}>
                      <Nav>
                        <NavItem>
                            <NavLink href="RegistroEmpresa">Crearme una cuenta</NavLink>
                        </NavItem>
                      </Nav>
                      <Button>   Login   </Button>
                      
                  </div >
                  
                </Form>
              </div >
              
              
              
              </Paper>
            </MuiThemeProvider>
  
            
          </div >
        </div>
      );





    //}
    

    
    
  }
}