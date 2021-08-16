import React from 'react'

import * as Icons from 'react-bootstrap-icons'

import brownLine from '../assets/images/linea marron.png'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


const items = [
    {
        title: 'Local 1',
        direction: 'Dirección C-1 #12 Esq. San Luis',
        telephone: 'Número de teléfono: 6722345678'
    },
    {
        title: 'Local 2',
        direction: 'Dirección C-1 #12 Esq. San Luis',
        telephone: 'Número de teléfono: 6722345678'
    },
    {
        title: 'Local 3',
        direction: 'Dirección C-1 #12 Esq. San Luis',
        telephone: 'Número de teléfono: 6722345678'
    },
    {
        title: 'Local 4',
        direction: 'Dirección C-1 #12 Esq. San Luis',
        telephone: 'Número de teléfono: 6722345678'
    },
    {
        title: 'Local 5',
        direction: 'Dirección C-1 #12 Esq. San Luis',
        telephone: 'Número de teléfono: 6722345678'
    },
    {
        title: 'Local 6',
        direction: 'Dirección C-1 #12 Esq. San Luis',
        telephone: 'Número de teléfono: 6722345678'
    },
]


const WrappedMap = withScriptjs(withGoogleMap(Map))

function Map() {
    return (
        <GoogleMap defaultZoom={10}
            defaultCenter={{ lat: 18.454050, lng: -69.938110 }}
        />
    )
}

const Contact = () => {
    return (
        <div className="container mt-4" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Leckerli One', color: '#3E2F25' }}>¡Visitanos y Contáctanos!</h1>
            <img src={brownLine} alt='' style={{ width: 600 }} />
            <h2 className='mt-3 border-bottom border-dark' style={{ fontFamily: 'Poppins', color: '#3E2F25' }}>Tenemos 5 sucursales alrededor de Sto. Dgo.</h2>
            <div className="row border-bottom border-dark" style={{ backgroundColor: '#BA9A77' }}>
                {
                    items.map(item => {
                        return (
                            <div className='mt-3 col-4'>
                                <h2
                                    style={{ color: '#3E2F25', fontFamily: 'Poppins' }}>
                                    <Icons.GeoAltFill className='text-white' />{item.title}
                                </h2>
                                <p className='text-white'>{item.direction} <br /> {item.telephone}</p>
                            </div>
                        )
                    })
                }
                <div style={{ width: '100vw', height: '100vh' }}>
                    <WrappedMap
                        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&KEY="}
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact
