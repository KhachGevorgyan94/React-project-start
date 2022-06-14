import React from "react";
import './style.css';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapLocation extends React.Component {
    render() {
        return <section>
            <div className="container">
                <div className="map G-images" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7605.876012381971!2d43.84731837879141!3d40.788373698837084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1655155449553!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
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