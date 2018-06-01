import React, { Component } from 'react';

class NavBar extends Component{
    constructor(props) {
        super(props);
        
    }

    

    

    render(){

     
      
        return(
          
      <div style={{width: '100%',  height: '70px',backgroundColor: "#003366"}}>
        <div class='row'>
          <div class='md-col-4 lg-col-4'>Administrar</div>

          <div class='md-col-4 lg-col-4'>
            <a class="" href="#">Inicio</a>
          </div>
        </div>
         
      </div>
          
        );
    }
    

}
export default NavBar;