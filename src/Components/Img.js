import React, {Component} from 'react';

class Img extends Component{

    constructor(){
        super();

        this.state = {
            images:[],
            image:''
        };
    }


    onImageChange(event) {
        
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
       
    }


    render(){
        
        return(
         
            <div>
                <img width={'100px'} height={'100px'} id="target" src={this.state.image} />
                {console.log(this.state.image)}
                <input multiple type="file" onChange={this.onImageChange.bind(this)} className="filetype" id="group_image"/>
               

                {this.state.images.length>0 ? 
                    (
                    <div>
                        <h3>imagenes llena</h3>
                        {console.log("imagenes"+" llena")}
                        {console.log(this.state.image)}
                        
                        
                        <ul>
                            {this.state.image.map((image, index) =>
                                <li key={index}>
                                {index}
                                <img width={'100px'} height={'100px'} id="target" src={image} />
                                </li>
                            )}
                            
                        </ul>
                    </div>
                    


                    ):(
                        <div>...</div>
                    )
                }
                
            </div>
        )
    }

}
export default Img;