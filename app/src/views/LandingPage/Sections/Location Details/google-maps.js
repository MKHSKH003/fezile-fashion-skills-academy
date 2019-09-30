import './index.css'

import React, { Component } from 'react'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import appsettings from "app.json";

export class MapContainer extends Component {
    render() {
        const getLocationCordinates = (location) => {
            if (location == 'Capetown-CBD') return { lat: -33.925225, lng: 18.424164 }
            else if (location == 'Observatory') return { lat: -33.938709, lng: 18.469037 }
            else if (location == 'Maitland') return { lat: -33.921301, lng: 18.501493 }
            else if (location == 'Rondebosch') return { lat: -33.964335, lng: 18.475788 }
            else if (location == 'Newlands') return { lat: -33.979350, lng: 18.448153 }
            else if (location == 'Claremont') return { lat: -33.986830, lng: 18.472329 }
            else if (location == 'Kenilworth') return { lat: -33.996833, lng: 18.478623 }
        }
        //const { location } = this.props;
        const locationCordonates = getLocationCordinates("Capetown-CBD");

        return (
            <Map
                className='maps'
                google={this.props.google}
                zoom={13}
                initialCenter={{  lat: -33.925225, lng: 18.424164 }}
            >
                <Marker
                    title={'location'}
                    position={{  lat: -33.925225, lng: 18.424164 }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: appsettings.MapsApiKey
})(MapContainer)