import React, {Component} from 'react';
import { NavItem, NavLink,Nav } from 'reactstrap';


class InicioEmpresa extends Component{
    constructor(props) {
        super(props);
        this.state = {
            usuario: JSON.parse(localStorage.getItem("usuario"))

        }
        
    }

    render(){
        return(
            <div>
                bienvenido XD...{this.state.usuario.usuario}
                <div style={{margin: 20, textAlign:"center"}}>
                    <Nav>
                      <NavItem>
                          <NavLink href="RegistroActividades">Cargar actividad</NavLink>
                      </NavItem>
                    </Nav>
                   
                </div >
            </div>
        );
    }
    
}
export default InicioEmpresa;