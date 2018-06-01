import React, {Component} from 'react';
import {Link} from "react-router";


class Header extends Component{

    render(){
        return (
            <nav className= "navbar navbar-default">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/inicio"}>Inicio</Link></li>
                        <li><Link to={"/RegistroActividades"}>Subir Actividad</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;
