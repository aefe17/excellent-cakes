import React from 'react'

import whiteLine from '../assets/images/linea blanca.png'
import croissant from '../assets/images/croissant 2.png'


const Recieved = () => {
    return (
        <div className='container marketing mt-3' style={{ textAlign: 'center', backgroundColor: '#BA9A77' }}>
            <h1 className='mt-xl-5' style={{ fontFamily: 'Leckerli One', color: '#6A4C2A', fontSize: 100 }}>Tu orden fue recibida!</h1>
            <img src={whiteLine} alt='' style={{ width: 600 }} />
            <h2 className='mt-2' style={{ color: 'white', fontFamily: 'Poppins' }}>Recibirás un e-mail de confirmación de tu orden:<br /> PEDIDO# 12345</h2>
            <img className='mt-3 mb-3' src={croissant} alt='' style={{ width: 300 }} />
        </div>
    )
}

export default Recieved
