import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import axios from 'axios';
import Mapa from '../Components/Mapa/Mapa';
import Paper from 'material-ui/Paper';


class ActivitiesRegister extends Component{

    constructor(){
        super();

        this.state = {
            categoriasUI:[],
            lugarSalida:'',
            
            activityID:'',
            lugarDestino:'',
            fechaInicio: new Date(),
            fechaFin: new Date(),
            horaInicio:new Date(),
            horaFin:new Date(),
            categoria:'',
            dificultad:'',
            cupo:5,
            precio:1000,
            descripcion:'no',
            recomendaciones:'no',
            tempListaFiltros: [],
            images:[],
            titulo:'',
            email: JSON.parse(localStorage.getItem("usuario")).usuario
            
            
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
        this.onImageChange = this.onImageChange.bind(this);
        this.handleDificultad = this.handleDificultad.bind(this);
        this.handlerTitulo = this.handlerTitulo.bind(this);
        
    }

    componentDidMount() {
        fetch('https://excursionesdatabase.firebaseapp.com/getCategories')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          tempListaFiltros: ['Seleccione'].concat(responseJson),
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
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

    handleDificultad(event) {
        
        this.setState({dificultad: event.target.value});
        console.log(event.target.value);
    }

    handleCupo(event){
        this.setState({cupo: parseInt(event.target.value, 10)});
        console.log(event.target.value);
    }

    handlePrecio(event){
        this.setState({precio: parseInt(event.target.value, 10)});
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

    handlerTitulo=(event)=>{
        this.setState({titulo: event.target.value});
        console.log(event.target.value);
    }

  
    handleSubmit = (event) => {

        axios.post('https://excursionesdatabase.firebaseapp.com/cargarActividad', this.state)//https://excursionesdatabase.firebaseapp.com
        .then(response => {
          console.log(response, 'Proceso exitoso!');
          
        })
        .catch(err => {
          console.log(err, 'Error');
        });
        
        event.preventDefault();
    }

    onImageChange(event) {
        
            
        for(var index = 0;index<event.target.files.length;index++){
            var file = event.target.files[index];
            this.handleLoadImage(file);
        }
    }

    handleLoadImage = (file) => {
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
         
            var arr = this.state.images;
            arr.push(reader.result);
            this.setState(() => ({
                images: arr,
              }));

          };
          reader.readAsDataURL(file);
        }
      }

      handlerImage = (key) =>{
          console.log("handlerImage "+key);
          var imagenes = this.state.images;
          imagenes.splice(key, 1);
          this.setState({images: imagenes});

      }      
    
    
    render(){
        const styles = {
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            },
            gridList: {
              width: '300px',
              height: '300px',
              overflowY: 'auto',
            },
          };

          const listFilter = this.state.tempListaFiltros.map((element, index) =>
            <option key={index.toString()}>
            {element}
            </option>
  );
        return(

            <div className='container'>
            {this.state.email ? 
            
            (

                
                <div id="formContainer" className='sm-col-6 md-col-6 lg-col-8' >
                
                
                    <MuiThemeProvider>
                    
                    <Paper elevation={18} style={{padding:"50px", margin:"10px"}}>
                    <Form onSubmit={this.handleSubmit} >
                        
                        <h3>Registro de actividades</h3>
                        <hr/>
                        <FormGroup>
                            
                            <Label for="exampleText">Lugar de salida</Label>
                            <Input required type="text" name="lugarSalida" id="" placeholder="lugar de salida" value={this.state.lugarSalida} onChange={this.handleLugarSalida} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">Seleccione punto de salida en el mapa</Label>
                            <Mapa/>
                        </FormGroup>

                         <FormGroup>
                            
                            <Label for="">Titulo de la actividad</Label>
                            <Input required type="text" name="tituloActividad" id="" placeholder="Titulo de la actividad" value={this.state.titulo} onChange={this.handlerTitulo} />
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
                                style={{color: "white"}}
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
                            {listFilter}
                                
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="">Dificultad</Label>
                            <Input required type="select" name="dificultad" id="" onChange={this.handleDificultad} value={this.state.dificultad}>
                                <option>Fácil</option>
                                <option>Medio</option>
                                <option>Avanzado</option>
                               
                                
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
                            <Input multiple type="file" onChange={this.onImageChange} className="filetype"/>
                            
                        </FormGroup>

                        
                        <div style={styles.root}>
                            <MuiThemeProvider>
                                <GridList
                                
                                cellHeight={180}
                                style={styles.gridList}
                                
                                >
                                
                                {this.state.images.map((tile, index) => (
                                    <GridTile
                                        key={index+1}
                                        title={index+1+" Eliminar"}   
                                        onClick={ ()=>this.handlerImage(index) }   
                                    >
                                
                                    
                                        <img src={tile} alt={tile} />
                                    </GridTile>

                                ))}

                                </GridList>
                            </MuiThemeProvider>
                        </div>

                        <Button>Agregar</Button>

                    </Form>
                    </Paper>
                    </MuiThemeProvider>
                    
                    
                </div>
            


            ):(
                
                <div>

                    No has iniciado sesion!
                </div>


            )
        }
            </div>
            
            
        );
    }
}

export default ActivitiesRegister;