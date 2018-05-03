import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

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
            imagenes:[]           
            
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

        axios.post('http://127.0.0.1:4000/registroEmpresa', this.state)
        .then(response => {
          console.log(response, 'Proceso exitoso!');
          
        })
        .catch(err => {
          console.log(err, 'Error');
        });
        event.preventDefault();
    }
    

    
    /*insertarEmpresa(user){
        console.log(user);
    }*/

    render(){
        return(
            <div className='container'>
                <h1>Registro de empresa</h1>
                
                <Form onSubmit={this.handleSubmit}>
                     
                    
                    <FormGroup>
                        
                    <Label for="exampleText">Nombre comercial de la empresa</Label>
                        <Input type="text" name="nombre" required id="" placeholder="Nombre de la empresa" value={this.state.nombreEmpresa} onChange={this.handleNombreEmpresa}/>
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Cédula jurídica</Label>
                            <Input type="text" name="cedula" required id="" placeholder="Cédula" value={this.state.cedula} onChange={this.handleCedula}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                    </FormGroup>

                    
                    <FormGroup>
                        
                        <Label for="exampleText">Número de teléfono</Label>
                            <Input type="text" name="telefono" required id="" placeholder="Telefono" value={this.state.telefono} onChange={this.handleTelefono}/>
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Dirección</Label>
                            <Input type="text" name="direccion"  id="" placeholder="Dirección" value={this.state.direccion} onChange={this.handleDireccion}/>
                    </FormGroup>

                     <FormGroup>
                        
                        <Label for="exampleText">Contraseña</Label>
                            <Input type="password" name="pass" required id="" placeholder="Contraseña" value={this.state.pass} onChange={this.handlePass}/>
                    </FormGroup>


                    <FormGroup>
                        <Label for="exampleFile">Seleccione una o varias imágenes</Label>
                        <Input type="file" name="file" id="exampleFile" multiple />
                        
                    </FormGroup>


                    <Button >Agregar</Button>

               
                </Form>
            </div>
        );
    }
}

export default RegistroEmpresa;