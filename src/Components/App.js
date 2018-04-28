import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component{

    
    render(){
        return(
            <div className='container'>
                
                <Form>
                     
                    <h3>Formulario para Registro de oferentes</h3>
                    <FormGroup>
                        
                    <Label for="exampleText">Lugar de salida</Label>
                        <Input type="text" name="salida" id="" placeholder="lugar de salida" />
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Lugar de destino</Label>
                            <Input type="text" name="salida" id="" placeholder="lugar de salida" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleDate">Fecha Inicio</Label>
                        <Input type="date" name="date" id="exampleDate" placeholder="Fecha" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleDate">Fecha finalización</Label>
                        <Input type="date" name="date" id="exampleDate" placeholder="Fecha" />
                    </FormGroup>
                    


                    <MuiThemeProvider>
                    <Label for="exampleText">Hora de salida</Label>
                    <TimePicker
                        hintText="Hora de salida"
                        
                    />

                    </MuiThemeProvider>


                    <MuiThemeProvider>
                    <Label for="exampleText">Hora de finalización</Label>
                    <TimePicker
                        hintText="Hora de salida"
                        
                    />

                    </MuiThemeProvider>

                    <FormGroup>
                        <Label for="exampleSelect">Categoria</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Caminata</option>
                            <option>Ciclismo</option>
                            <option>Playa</option>
                            <option>Camping</option>
                            <option>Extremo</option>
                        </Input>
                    </FormGroup>

                     <FormGroup>
                        
                        <Label for="exampleText">Cupo</Label>
                        <Input type="number" min='1' required name="salida" id="" placeholder="Cupo" />
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Precio por persona</Label>
                        <Input type="number" min='0' required name="salida" id="" placeholder="Precio Por persona" />
                    </FormGroup>




                    <FormGroup>
                        <Label for="exampleText">Descripción de la actividad</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>


                    <FormGroup>
                        <Label for="exampleText">Recomendaciones para asistir</Label>
                        <Input type="textarea" name="text" id="exampleText" />
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

export default App;