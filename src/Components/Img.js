import React, {Component} from 'react';

class Img extends Component{

    constructor(){
        super();

        this.state = {
            images:[],
            image:'',
            prueba: [{"nada":0}],
        };

        
        this.onImageChange = this.onImageChange.bind(this);
    }
    


    onImageChange(event) {
        

        for(var index = 0;index<event.target.files.length;index++){
            var file = event.target.files[index];
            this.handleLoadImage(file);
        }
        
       
    }
    
    handleLoadImage = (file) => {
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            
            var arr = this.state.images;
            arr.push(reader.result);
            this.setState(() => ({
                images: arr,
              }));

          };
          reader.readAsDataURL(file);
        }
      }

    render(){
        
        return(
         
            <div>
                
                
                
                <input multiple type="file" onChange={this.onImageChange} className="filetype"/>
                
                {console.log(this.state.image)}
                {this.state.images.length>0 ? 
                    (
                    <div>
                        <h3>imagenes llena</h3>
                        
                        
                        
                        <ul>
                            {this.state.images.map((image, index) =>
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