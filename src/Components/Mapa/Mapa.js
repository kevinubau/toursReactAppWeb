import React, { Component } from "react";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps"

class Mapa extends Component{
    constructor(props) {
        super(props);
        this.state = {
            draggedLatitude: 10.363639,
            draggedLongitude: -84.513359
        };
        
    }

    handlerDragger = (event) =>{
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
        this.setState({draggedLatitude: event.latLng.lat()});
        this.setState({draggedLongitude: event.latLng.lng()});
    }

    render() {

        const GoogleMapExample = withGoogleMap(props => (
           <GoogleMap
             defaultCenter = { { lat: this.state.draggedLatitude, lng: this.state.draggedLongitude } }
             defaultZoom = { 15 }
            
           >
           <Marker  position={{ lat: this.state.draggedLatitude, lng: this.state.draggedLongitude }} onDragEnd={this.handlerDragger} draggable={true} />
           </GoogleMap>
        ));
     
        return(
           <div>
             <GoogleMapExample
               containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
               mapElement={ <div style={{ height: `100%` }} /> }
             />
           </div>
        );
     
        }
    
}
export default Mapa;