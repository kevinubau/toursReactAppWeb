import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import InputMask from 'react-input-mask';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Snackbar from '@material-ui/core/Snackbar';


class RegistroEmpresa extends Component{
    constructor(){
        super();
        this.state = {

            nombreEmpresa:'',
            cedula:'',
            email:'',
            telefono: 't',
            direccion: 'no',
            pass:'p',
            imagenes:[],
            snackbarMessage:'',
            open: false,
            vertical: null,
            horizontal: null,          
            
        };



        
        this.handleNombreEmpresa = this.handleNombreEmpresa.bind(this);
        this.handleCedula = this.handleCedula.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleTelefono = this.handleTelefono.bind(this);
        this.handleDireccion = this.handleDireccion.bind(this);
        this.handlePass = this.handlePass.bind(this);
       
        
        
    }

    handleNombreEmpresa(event) {

        this.setState({nombreEmpresa: event.target.value});
        console.log(event.target.value);
    }

    handleCedula(event) {
        
        this.setState({cedula: event.target.value});
        console.log(event.target.value);
    }

    handleEmail(event) {
        
        this.setState({email: event.target.value});
        console.log(event.target.value);
    }

    handleTelefono(event) {
        
        this.setState({telefono: event.target.value});
        console.log(event.target.value);
    }

    handleDireccion(event) {
        this.setState({direccion: event.target.value});
        console.log(event.target.value);
       
       
        
    }

    handlePass(event) {
        this.setState({pass: event.target.value});
        console.log(event.target.value);
        
    }

    

  
    handleSubmit = (event) => {

        axios.post('https://excursionesdatabase.firebaseapp.com/registroEmpresa', this.state)
        .then(response => {
          console.log(response, 'Proceso exitoso!');
          if(response.data){
            //this.setState({snackbarMessage:response.data.responseMessage});
            this.setState({snackbarMessage:response.data.responseMessage, vertical: 'bottom', horizontal: 'left', open:true});

          }
          
        })
        .catch(err => {
          console.log(err, 'Error');
        });
        event.preventDefault();
    }
    

    render(){
        const { vertical, horizontal, open } = this.state;

        
        return(
            <div>
               
                <div className='container'>
                
                    <div id="formContainer" className='sm-col-8 md-col-8 lg-col-8' >
                        
                        <MuiThemeProvider>
                            
                            <Paper elevation={18} style={{padding:"50px"}}>
                                <h1>Registro de empresa</h1>
                                <Form onSubmit={this.handleSubmit}>
                                    
                                    
                                    <FormGroup>
                                        
                                    <Label for="exampleText">Nombre comercial de la empresa</Label>
                                        <Input type="text" name="nombre" required id="" placeholder="Nombre de la empresa" value={this.state.nombreEmpresa} onChange={this.handleNombreEmpresa}/>
                                    </FormGroup>

                                    <FormGroup>
                                        
                                        <Label for="exampleText">Cédula jurídica</Label>
                                            <Input maskChar=" "tag={InputMask} mask="9-999-999999" type="text" name="cedula" required id="" placeholder="Cédula" value={this.state.cedula} onChange={this.handleCedula}/>
                                    </FormGroup>

                                    

                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input required type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                                    </FormGroup>

                                    
                                    <FormGroup>
                                        
                                        <Label for="exampleText">Número de teléfono</Label>
                                            <Input maskChar=" "tag={InputMask} mask="99999999" type="text" name="telefono" required id="" placeholder="Telefono" value={this.state.telefono} onChange={this.handleTelefono}/>
                                    </FormGroup>

                                    <FormGroup>
                                        
                                        <Label for="exampleText">Dirección</Label>
                                            <Input required type="text" name="direccion"  id="" placeholder="Dirección" value={this.state.direccion} onChange={this.handleDireccion}/>
                                    </FormGroup>

                                    <FormGroup>
                                        
                                        <Label for="exampleText">Contraseña</Label>
                                            <Input maxLength="16" type="password" name="pass" required id="" placeholder="Contraseña" value={this.state.pass} onChange={this.handlePass}/>
                                    </FormGroup>


                                    
                                    <Button style={{marginLeft: "40%"}} >Registrar</Button>

                            
                                </Form>
                            
                            </Paper>
                        </MuiThemeProvider>
                        </div>
                </div>


                <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{this.state.snackbarMessage}</span>}
                />
            </div>
        );
    }
}

export default RegistroEmpresa;