import React, {Component} from 'react';
import { Button, FormControl } from 'react-bootstrap';
class Registroe extends Component{

    

    render(){
        return(
            <div>
                <h1>Registro de Empresa</h1>

                <form>
                    
                    
                    
                    <FormControl
                        type="text"
                        value="Nombre de la empresa"
                        placeholder="Enter text"
                        
                    />
                    <Button>Registrar</Button>
                    
                </form>
            </div>
        );
    }
}

export default Registroe;