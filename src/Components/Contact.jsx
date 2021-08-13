import React from 'react'

import brownLine from '../assets/images/linea marron.png'

const Contact = () => {
    return (
        <div className="mt-4" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Leckerli One' }}>¡Visitanos y Contáctanos!</h1>
            <img src={brownLine} alt='' style={{ width: 600 }} />
            <h2 className='mt-3 border-bottom border-dark' style={{ fontFamily: 'Poppins' }}>Tenemos 5 sucursales alrededor de Sto. Dgo.</h2>
            <div className="row form-group" style={{ backgroundColor: '#BA9A77' }}>
                <div className="col-md-4 mx-4 mt-3">

                </div>
            </div>
        </div>
    )
}

export default Contact
