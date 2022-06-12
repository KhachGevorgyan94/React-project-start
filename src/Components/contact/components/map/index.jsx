import React from "react";
import './style.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapLocation extends React.Component {
    render() {
        return <section>
            <div className="container">
                <div className="map">
                    <Map google={this.props.google} zoom={14}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        </section>
    }
}
export default GoogleApiWrapper({
    apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapLocation)