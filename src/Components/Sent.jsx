import React from 'react'

import whiteLine from '../assets/images/linea blanca.png'
import croissant from '../assets/images/croissant 1.png'

const Sent = () => {
    return (
        <div className='container marketing mt-3' style={{ textAlign: 'center', backgroundColor: '#BA9A77' }}>
            <h1 className='mt-xl-5' style={{ fontFamily: 'Leckerli One', color: '#6A4C2A', fontSize: 150 }}>¡Gracias!</h1>
            <img src={whiteLine} alt='' style={{ width: 600 }} />
            <h2 className='mt-2' style={{ color: 'white', fontFamily: 'Poppins' }}>Te responderemos lo más pronto posible</h2>
            <img className='mt-3 mb-3' src={croissant} alt='' style={{ width: 300 }} />
        </div>
    )
}

export default Sent