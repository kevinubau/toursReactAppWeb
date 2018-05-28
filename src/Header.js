import React from 'react';
import {Link} from "react-router";
export const Header = (props) => {
    return (
        <nav className= "navbar navbar-default">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li><Link to={"/RegistroActividades"}>ActivitiesRegister</Link></li>
                    <li><Link to={"/RegistroEmpresa"}>RegistroEmpresa</Link></li>
                </ul>
            </div>
        </nav>
    )
}