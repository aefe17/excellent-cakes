import React from 'react'

import brownLine from '../assets/images/linea marron.png'

const Suggestions = () => {
    return (
        <div className='mt-3' style={{ textAlign: 'center' }}>

            <h2>Alguna sugerencia?</h2>
            <img src={brownLine} alt='' style={{ width: 600 }} />
            <h3>Ayudanos a mejorar</h3>
            <div className="row" style={{ backgroundColor: '#BA9A77', alignItems: 'center' }}>
                <div className="col-md-4 mx-4 mt-3">
                    <input placeholder="Nombre y Apellido" className="form-control mb-3" type="text" />
                    <input placeholder="Correo electronico" className="form-control mb-3" type="text" />
                </div>
            </div>






        </div>

    )
}

export default Suggestions