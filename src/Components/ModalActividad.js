import React, { Component } from "react";
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input, NavItem, NavLink,Nav } from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';

Modal.setAppElement('#root');

export default class ModalActividad extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          modalIsOpen: false,
          open: false,
          vertical: null,
          horizontal: null,
          snackbarMessage:"",
          email: ""
        };
        console.log(JSON.stringify(this.props.actividades));
    
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
              transform             : 'translate(-50%, -50%)',
              width:'60%'
              
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
    
              <h2 ref={subtitle => this.subtitle = subtitle}style={{textAlign:'center'}}>Integrantes</h2>

                {this.props.actividades ?(
                    <div>
              <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Cupo adquirido</th>
                    </tr>
                </thead>
                
                {this.props.actividades.integrantes.map((integrante, index)=>(

                    index >0 ? (
                <tbody>
                    <tr>

                    <th scope="row">{index}</th>
                    <td>{integrante.email}</td>
                    <td>{integrante.cantidad}</td>
                    </tr>
                    
                    
                    </tbody>
                    ):(
                        <div></div>

                    )
                    

                ))}
                
                </table>

              </div>

):(

    <div></div>
)}
              

              

              
              
              
              
              
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