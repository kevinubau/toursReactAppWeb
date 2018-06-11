import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Row, Col, Container } from 'reactstrap';



export class Vista extends Component{

    render (){
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
          return(
              <Container fluid>
                <Row>
                    <Col sm="6">
                    <div style={styles}>
                        <h1>Información de la empresa</h1>
                    </div>
                    <FormGroup>
        
                        <Label for="exampleText">Nombre comercial de la empresa</Label>
                        <option value="nombreEmpresa">Empresa</option>
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Cédula jurídica</Label>
                        <option value="cedula">23332</option>
                            
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <option value="email">kevin.perez.cascante@hotmail.com</option>
                    </FormGroup>

                    
                    <FormGroup>
                        
                        <Label for="exampleText">Número de teléfono</Label>
                        <option value="telefono">8749-6860</option>
                    </FormGroup>

                    <FormGroup>
                        
                        <Label for="exampleText">Dirección</Label>
                        <option value="direccion">Venecia, San Carlos</option>
                    </FormGroup>

                    <Button color="primary" >Crear</Button>

                    </Col>
                    
                    <Col sm="20">
                    <div style={styles}>
                        <h1>Actividades Creadas</h1>
                        <FormGroup>    
                            <Label for="exampleText">Nombre de la actividad</Label>
                            <option value="nombreActividad">Rio Celeste tour</option>
                            <Label for="exampleText">Lugar</Label>
                            <option value="lugar">Venecia, San Carlos</option>
                            <Label for="exampleText">Cupo</Label>    
                            <option value="cupo">50 pax</option>   
                            <Label for="exampleText">Precio</Label>
                            <option value="precio">10000</option>
                        </FormGroup>

                        <FormGroup>    
                            <Label for="exampleText">Nombre de la actividad</Label>
                            <option value="nombreActividad">Rio Celeste tour</option>
                            <Label for="exampleText">Lugar</Label>
                            <option value="lugar">Venecia, San Carlos</option>
                            <Label for="exampleText">Cupo</Label>    
                            <option value="cupo">50 pax</option>   
                            <Label for="exampleText">Precio</Label>
                            <option value="precio">10000</option>
                        </FormGroup>

                    </div>                   
                    </Col>
                </Row>
              </Container>

        );
        
        
    }
}