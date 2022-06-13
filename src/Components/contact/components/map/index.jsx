import React from "react";
import './style.css';
import mapimage from '../../../assets/images/map.png';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapLocation extends React.Component {
    render() {
        return <section>
            <div className="container">
                <div className="map G-images" style={{ background: `url('${mapimage}')` }}>                </div>
            </div>
        </section>


        // return <section>
        //     <div className="container">
        //         <div className="map">
        //             <Map google={this.props.google} zoom={14}>

        //                 <Marker onClick={this.onMarkerClick}
        //                     name={'Current location'} />

        //                 <InfoWindow onClose={this.onInfoWindowClose}>
        //                     {/* <div>
        //                         <h1>{this.state.selectedPlace.name}</h1>
        //                     </div> */}
        //                 </InfoWindow>
        //             </Map>
        //         </div>
        //     </div>
        // </section>
    }
}
export default MapLocation

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyCxPxrOps7PrBLIZ6JWyicB1sfJALVWhUY')
// })(MapLocation)