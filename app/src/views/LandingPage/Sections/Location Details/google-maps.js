import './index.css'

import React, { Component } from 'react'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import appsettings from "app.json";

export class MapContainer extends Component {
    render() {

        return (
            <Map
                className='maps'
                google={this.props.google}
                zoom={16}
                initialCenter={{  lat: -29.745275, lng: 30.9728973 }}
            >
                <Marker
                    title={'P46 Bhejane Road'}
                    position={{  lat: -29.745275, lng: 30.9728973 }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: appsettings.MapsApiKey
})(MapContainer)