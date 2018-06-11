import React, {Component} from 'react';
import { NavItem, NavLink,Nav, Label, Button, Form, FormGroup, Row, Col, Container } from 'reactstrap';
import { browserHistory  } from 'react-router';
import Vista from "./Vista";
import axios from 'axios';
import ModalActividad from "./ModalActividad";
import ModalDetalle from "./ModalDetalle";

class InicioEmpresa extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre:"",
            cedula:"",
            numeroTelefono:"",
            direccion:"",
            descripcion:"",
            actividades:[]
        };
        
        this.handlerData=this.handlerData.bind(this);
        
    }

    componentDidMount() {
        if(JSON.parse(localStorage.getItem("usuario"))){
            this.setState({usuario: JSON.parse(localStorage.getItem("usuario"))});
            this.handleSubmit();
            this.obtenerTodasLasActividades();
        }
        else{
            browserHistory.push("/");
        }
        
    }

    handlerData=(event)=>{

        this.setState({nombre: event.nombreComercial,
          descripcion: event.descripcion,
          numeroTelefono: event.telefonos,
          direccion: event.direccionExacta,
          cedula: event.cedulaJuridica  
        });
        
        //7/this.setState({email: event.data.email})
        //console.log(event.target.value);
    
      }
      handlerActivities=(event)=>{
            this.setState({actividades: event});
        
      }
      

    handleSubmit = (event) => {
        this.setState({loading:true});
        
        //consulta al endpoint
        var correo = JSON.parse(localStorage.getItem("usuario")).usuario;
        console.log(">>>>>>>"+correo);
        axios.post('https://excursionesdatabase.firebaseapp.com/getEmpresa', {"email":correo})
        .then(response => {
          console.log(response.data, 'Proceso exitoso!');
            var key;
            for(key in response.data){
                console.log("KEYSSSSS: "+key);
            }
            console.log("KEYSSSSS: "+key);


          
          var objeto = response.data[key];
          if(objeto.email){
            
            this.handlerData(objeto)
            
          }
          
        })
        .catch(err => {
          console.log(err, 'Error');
        });
        
        
    }

    obtenerTodasLasActividades= (event) => {
        this.setState({loading:true});
        
        //consulta al endpoint
        var correo = JSON.parse(localStorage.getItem("usuario")).usuario;
        console.log(">>>>>>>"+correo);
        axios.post('https://excursionesdatabase.firebaseapp.com/activitiesCompany', {"email":correo})
        .then(response => {
          console.log(response.data, 'Proceso exitoso!');
            var key;
            var indexKey;
            var objeto = response.data;
            var array = [];
            for(key in response.data){
                console.log("Key Actividad: "+key);
                console.log(objeto[key]);
                array.push(objeto[key]);
            }
            console.log("KEYS Actividad: "+JSON.stringify(array));
            console.log("Fechavvcccccv"+JSON.stringify(objeto[key].horaFin));
            
          
          var objeto = response.data[key];
          
          if(objeto.email){
            console.log("Folagor");
            //console.log(JSON.stringify(array));
            this.handlerActivities(array)
            
          }
          
        })
        .catch(err => {
          console.log(err, 'Error');
        });

    }
    borrarLocalStorage () {
        window.localStorage.clear();
        browserHistory.push("/");

    }
    render(){
        
        //console.log("Array de actividades: "+JSON.stringify(this.state.actividades[1]));
        return(
            <div style={{margin: 20}} >

                {this.state.usuario ?(

                <div>      
                    {/* <div style={{margin: 20, textAlign:"center"}} >
                        {this.state.usuario.usuario}
                    </div> */}
                 
                <Container fluid>
                <Row>
                    <Col sm="6">
                    <div style={styles}>
                        <h1>Información de la empresa</h1>
                    </div>

                    <div>

                    </div>
                    <FormGroup>
        
                        <Label for="exampleText">Nombre comercial de la empresa</Label>
                        <option value="nombreEmpresa">{this.state.nombre}</option>
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Cédula jurídica</Label>
                        <option value="cedula">{this.state.cedula}</option>
                            
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <option value="email">{this.state.usuario.usuario}</option>
                    </FormGroup>

                    
                    <FormGroup>
                        
                        <Label for="exampleText">Número de teléfono</Label>
                        <option value="telefono">{this.state.numeroTelefono}</option>
                    </FormGroup>

        
                    <FormGroup>
                        
                        <Label for="exampleText">Dirección</Label>
                        <option value="direccion">{this.state.direccion}</option>
                    </FormGroup>

                    <div style={{marginLeft: 10, textAlign:"center", fontSize:24, marginTop:100}} >
                    <Nav>
                    <NavItem>
                        <NavLink href="RegistroActividades" >Cargar actividad</NavLink>
                    </NavItem>
                    
                    </Nav>
                    </div> 
                    <div style={{marginLeft: 10, textAlign:"center", fontSize:24, marginTop:10}} >
                    <Nav>
                    <NavItem>
                        <Button style={{marginLeft: 10, textAlign:"center", fontSize:24, marginTop:10, backgroundColor:'white', color: 'red',
                        borderColor:'white'}}
                         onClick={this.borrarLocalStorage} >Cerrar sesión</Button>
                    </NavItem>
                    
                    </Nav>
                    </div>







                    </Col>
                    
                    <Col sm="20">
                    <div><h1>Actividades</h1></div>
                    <div style={{
                            padding:20, 
                            
                            margin:'0 auto',
                            
                            background:'#fff',
                            height:'600px',
                            
                            
                            overflow:'scroll',
                            }}>
                        
                        {this.state.actividades.length>0?(

                        this.state.actividades.map((actividad, index)=>(
                            <div style={{border: '1px solid black',padding:20}} >
                            
                                <FormGroup>    
                                    <div className="row">
                                    <Label for="exampleText" style={{marginRight:15}}>Nombre de la actividad </Label>
                                    <option value="nombreActividad">{actividad.titulo}</option>
                                    </div>

                                    <div className="row">
                                    <Label for="exampleText" style={{marginRight:15}}>Salida</Label>
                                    <option value="lugar">{actividad.lugarSalida}</option>
                                    </div>

                                    <div className="row">
                                    <Label for="exampleText" style={{marginRight:15}}>Destino</Label>
                                    <option value="lugar">{actividad.lugarDestino}</option>
                                    </div>

                                    <div className="row">
                                    <Label for="exampleText" style={{marginRight:15}}>Fecha</Label>
                                    <option value="lugar">{actividad.fechaInicio}</option>
                                    </div>

                                    <div className="row">
                                    <Label for="exampleText" style={{marginRight:15}}>Cupo</Label>    
                                    <option value="cupo">{actividad.cupo}</option>
                                    </div>
                                    
                                    <div className="row">   
                                    <Label for="exampleText" style={{marginRight:15}}>Precio</Label>
                                    <option value="precio">{"‎₡"+actividad.precio}</option>
                                    </div>
                                    <div>
                                    <div >
                                        <ModalDetalle actividades={this.state.actividades[index]} textoBoton={"Detalles"}/>
                                    </div>
                                        <ModalActividad actividades={this.state.actividades[index]}  textoBoton={"Ver participantes"}/>
                                    </div>
                                </FormGroup>
                            </div>
                        ))
                        

                        

                         
                    ): (
                        <div>
                            </div>
                    )}  
                    </div>            
                    </Col>
                </Row>
              </Container>
                    
                        
                    
                    </div >
                    
                ):(

                    <div></div>

                )
                }
                
            </div>
        );
    }
    
}


const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: '100px',
      height: '100px',
      overflowY: 'auto',
    },
  };
export default InicioEmpresa;