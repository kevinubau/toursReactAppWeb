import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import TimePicker from 'material-ui/TimePicker';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Registroe extends Component{

    
    render(){
        return(
            <div className='container'>
                <h1>Registro de empresa</h1>
                
                <Form>
                     
                    
                    <FormGroup>
                        
                    <Label for="exampleText">Nombre comercial de la empresa</Label>
                        <Input type="text" name="nombre" required id="" placeholder="Nombre de la empresa" />
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Cédula jurídica</Label>
                            <Input type="text" name="cedula" required id="" placeholder="Cédula" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>

                    
                    <FormGroup>
                        
                        <Label for="exampleText">Número de teléfono (falta)</Label>
                            <Input type="text" name="telefono" required id="" placeholder="Telefono" />
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Dirección</Label>
                            <Input type="text" name="direccion" required id="" placeholder="Dirección" />
                    </FormGroup>

                     <FormGroup>
                        
                        <Label for="exampleText">Contraseña</Label>
                            <Input type="password" name="pass" required id="" placeholder="Contraseña" />
                    </FormGroup>


                    <FormGroup>
                        <Label for="exampleFile">Seleccione una o varias imágenes</Label>
                        <Input type="file" name="file" id="exampleFile" multiple />
                        
                    </FormGroup>


                    <Button>Agregar</Button>

               
                </Form>
            </div>
        );
    }
}

export default Registroe;