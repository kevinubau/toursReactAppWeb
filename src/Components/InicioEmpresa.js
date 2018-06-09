import React, {Component} from 'react';
import { NavItem, NavLink,Nav } from 'reactstrap';
import { browserHistory  } from 'react-router';


class InicioEmpresa extends Component{
    constructor(props) {
        super(props);
        this.state = {
           
        }

        
        
    }

    componentDidMount() {
        if(JSON.parse(localStorage.getItem("usuario"))){
            this.setState({usuario: JSON.parse(localStorage.getItem("usuario"))});
        }
        else{
            browserHistory.push("/");
        }
        
    }

    render(){
        
        
        return(
            <div>

                {this.state.usuario ?(

                    
                    <div style={{margin: 20, textAlign:"center"}}>
                    {this.state.usuario.usuario}
                        <Nav>
                        <NavItem>
                            <NavLink href="RegistroActividades">Cargar actividad</NavLink>
                        </NavItem>
                        </Nav>
                    
                    </div >


                ):(

                    <div></div>

                )
                }
                
            </div>
        );
    }
    
}
export default InicioEmpresa;