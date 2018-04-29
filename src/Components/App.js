import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class App extends Component{

    constructor(){
        super();

        this.state = {

            lugarSalida:'a',
            lugarDestino:'b',
            fechaInicio: new Date(),
            fechaFin: new Date(),
            horaInicio:new Date(),
            horaFin:new Date(),
            categoria:'Montaña',
            cupo:5,
            precio:1000,
            descripcion:'no',
            recomendaciones:'no',
            imagenes:[]
            
            
        };


        this.handleLugarSalida = this.handleLugarSalida.bind(this);
        this.handleLugarDestino = this.handleLugarDestino.bind(this);
        this.handleFechaInicio = this.handleFechaInicio.bind(this);
        this.handleFechaFin = this.handleFechaFin.bind(this);
        this.handleHoraInicio = this.handleHoraInicio.bind(this);
        this.handleHoraFin = this.handleHoraFin.bind(this);
        this.handleCategoria = this.handleCategoria.bind(this);
        this.handlePrecio = this.handlePrecio.bind(this);
        this.handleCupo = this.handleCupo.bind(this);
        this.handleDescripcion = this.handleDescripcion.bind(this);
        this.handleRecomendaciones = this.handleRecomendaciones.bind(this);
        
        
    }

    handleLugarSalida(event) {

        this.setState({lugarSalida: event.target.value});
        console.log(event.target.value);
    }

    handleLugarDestino(event) {
        
        this.setState({lugarDestino: event.target.value});
        console.log(event.target.value);
    }

    handleFechaInicio(event) {
        
        this.setState({fechaInicio: event.target.value});
        console.log(event.target.value);
    }

    handleFechaFin(event) {
        
        this.setState({fechaFin: event.target.value});
        console.log(event.target.value);
    }

    handleHoraInicio(event, horaInicio) {
        console.log(horaInicio);
        this.setState({horaInicio});
        console.log(this.state.horaInicio.getHours());
        
    }

    handleHoraFin(event, horaFin) {
        console.log(horaFin);
        this.setState({horaFin});
        console.log(this.state.horaFin.getHours());
        
    }

    handleCategoria(event) {
        
        this.setState({categoria: event.target.value});
        console.log(event.target.value);
    }

    handleCupo(event){
        this.setState({cupo: event.target.value});
        console.log(event.target.value);
    }

    handlePrecio(event){
        this.setState({precio: event.target.value});
        console.log(event.target.value);
    }

    handleDescripcion(event){
        this.setState({descripcion: event.target.value});
        console.log(event.target.value);
    }

    handleRecomendaciones(event){
        this.setState({recomendaciones: event.target.value});
        console.log(event.target.value);
    }

  
    handleSubmit = (event) => {

        axios.post('http://127.0.0.1:4000/', this.state)
        .then(response => {
          console.log(response, 'Proceso exitoso!');
          
        })
        .catch(err => {
          console.log(err, 'Error');
        });
        event.preventDefault();
    }
    
    
    render(){
        return(
            
            <div className='container'>
                
                <Form onSubmit={this.handleSubmit} >
                     
                    <h3>Registro de actividades</h3>
                    <hr/>
                    <FormGroup>
                        
                        <Label for="exampleText">Lugar de salida</Label>
                        <Input required type="text" name="lugarSalida" id="" placeholder="lugar de salida" value={this.state.lugarSalida} onChange={this.handleLugarSalida} />
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Lugar de destino</Label>
                        <Input required type="text" name="lugarDestino" id="" placeholder="lugar de destino" value={this.state.lugarDestino} onChange={this.handleLugarDestino} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleDate">Fecha Inicio</Label>
                        <Input required type="date" name="fechaInicio" id="" placeholder="Fecha" value={this.state.fechaInicio} onChange={this.handleFechaInicio} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleDate">Fecha finalización</Label>
                        <Input type="date" name="fechaFin" id="" placeholder="Fecha" value={this.state.fechaFin} onChange={this.handleFechaFin} />
                    </FormGroup>
                    

                    <Label for="">Hora de salida</Label>
                    <MuiThemeProvider>
                        
                        <TimePicker
                            hintText="Hora de salida"
                            name='horaInicio'
                            value={this.state.horaInicio} 
                            onChange={this.handleHoraInicio}
                        />

                    </MuiThemeProvider>


                    <Label for="">Hora de finalización</Label>
                    <MuiThemeProvider>
                        
                        <TimePicker
                            hintText="Hora de finalización de la actividad"
                            name='horaFin'
                            value={this.state.horaFin} 
                            onChange={this.handleHoraFin}
                        />
                    </MuiThemeProvider>

                    <FormGroup>
                        <Label for="">Categoria</Label>
                        <Input required type="select" name="categoria" id="" onChange={this.handleCategoria} value={this.state.categoria}>
                            <option>Caminata</option>
                            <option>Ciclismo</option>
                            <option>Playa</option>
                            <option>Camping</option>
                            <option>...</option>
                            
                        </Input>
                    </FormGroup>

                     <FormGroup>
                        
                        <Label  for="">Cupo</Label>
                        <Input onChange={this.handleCupo} value={this.state.cupo} required type="number" min='1' name="cupo" id="" placeholder="Cupo" />
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="">Precio por persona</Label>

                        <InputGroup>
                            <InputGroupAddon addonType="prepend">₡</InputGroupAddon>
                            <Input onChange={this.handlePrecio} value={this.state.precio} required min='0' placeholder="Precio Por persona" type="number" step="1" />
                            <InputGroupAddon  addonType="append">.00</InputGroupAddon>
                        </InputGroup>



                    </FormGroup>

                    <FormGroup>
                        <Label for="">Descripción de la actividad</Label>
                        <Input onChange={this.handleDescripcion} value={this.state.descripcion} required type="textarea" name="descripcion" id="" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="">Recomendaciones para asistir</Label>
                        <Input onChange={this.handleRecomendaciones} value={this.state.recomendaciones} type="textarea" name="recomendacion" id="" />
                    </FormGroup>


                    <FormGroup>
                        <Label for="">Seleccione una o varias imágenes</Label>
                        <Input  required type="file" name="imagenes" id="" multiple />
                        
                    </FormGroup>

                    <Button>Agregar</Button>

                </Form>
            </div>
        );
    }
}

export default App;