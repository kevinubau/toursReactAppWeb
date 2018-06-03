import React, { Component } from "react";
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input, NavItem, NavLink,Nav } from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';

Modal.setAppElement('#root');

export default class ModalComponent extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false,
          open: false,
          vertical: null,
          horizontal: null,
          snackbarMessage:"",
          email: ""
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.handlerEmail = this.handlerEmail.bind(this);
      }

    


      handlerEmail(event){

        this.setState({email: event.target.value});
        console.log(event.target.value);
    
      }

      handleSubmit = (event) =>{
        
        console.log("object");
        var object = {};
        object.email = this.state.email;
        axios.post('https://excursionesdatabase.firebaseapp.com/forgotPassword', object)
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


    
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }



      //snackbar

      handleClick = state => () => {
        this.setState({ open: true, ...state });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

   

      
    
      render() {
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
        };
        const { vertical, horizontal, open } = this.state;
        return (
          <div>
            
            <Nav>
              <NavItem>
                  <NavLink style={{color:"#0099cc"}} onClick={this.openModal} >{this.props.textoBoton}</NavLink>
              </NavItem>
            </Nav>

            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
    
              <h2 ref={subtitle => this.subtitle = subtitle}>Recuperación de contraseña.</h2>

              <Form onSubmit={this.handleSubmit} >
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Correo</Label>
                    <Input required value={this.state.email} onChange={this.handlerEmail} type="email" name="email" id="exampleEmail" placeholder="usuario@dominio.com" />
                  </FormGroup>


                  <div className="d-flex justify-content-between" style={{marginTop:"30px"}}>
                      <div >
                        <Button style={{marginLeft:100}} onClick={this.closeModal}>Cancelar</Button>
                      
                      </div>
                      <div >
                        <Button 
                         style={{marginRight:100}}>Aceptar</Button>
                        
                      
                      </div>
                    
              </div>
              </Form>

              
              
              
              
              
            </Modal>

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