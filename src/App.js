import React, {Component} from 'react';
import { Button, FormControl } from 'react-bootstrap';
class App extends Component{

    

    render(){
        return(
            <div>
                <form>
                    
                    <Button>Default</Button>
                    
                    <FormControl
                        type="text"
                        value="hola"
                        placeholder="Enter text"
                        
                    />

                    
                </form>
            </div>
        );
    }
}

export default App;