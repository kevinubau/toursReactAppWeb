import React, { Component } from "react";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps"

class Mapa extends Component{
    constructor(props) {
        super(props);

        this.state = {
            draggedLatitude: 10.363639,
            draggedLongitude: -84.513359,
            defaultZoom: 15
        };
        
    }


    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    handlerDragger = (event) =>{
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
        //console.log(this.map.getZoom());

        
        this.props.handler(event.latLng.lat(), event.latLng.lng());
        
        this.setState({draggedLatitude: event.latLng.lat()});
        this.setState({draggedLongitude: event.latLng.lng()});
        //this.setState({defaultZoom: event.zoom});
        
        
    }

    _handleZoomChanged() {
        const zoomLevel = this.map.getZoom();
        if (zoomLevel !== this.state.zoomLevel) {
          this.setState({zoomLevel});
        }
    }

    render() {

        const GoogleMapExample = withGoogleMap(props => (
           
           <GoogleMap
             defaultCenter = { { lat: this.state.draggedLatitude, lng: this.state.draggedLongitude } }
             defaultZoom = { this.state.defaultZoom }
             //onZoomChanged={(e)=> {console.log(e)}}
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