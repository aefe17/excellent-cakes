import React from 'react'

import brownLine from '../assets/images/linea marron.png'

const Suggestions = () => {
    return (
        <div className='mt-3' style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Leckerli One' }}>¿Alguna sugerencia?</h2>
            <img src={brownLine} alt='' style={{ width: 600 }} />
            <h3 style={{ fontFamily: 'Poppins' }}>Ayudanos a mejorar</h3>
            <div className="row form-group" style={{ backgroundColor: '#BA9A77' }}>
                <div className="col-md-4 mx-4 mt-3">
                    <input placeholder="Nombre y Apellido" className="form-control mb-3" type="text" />
                    <input placeholder="Correo electronico" className="form-control mb-3" type="text" />
                    <textarea className="form-control" ></textarea>
                    <button to='/Order' className="btn rounded-pill mt-2" style={{ backgroundColor: "#3E2F25", color: 'white' }}>ORDENAR</button>
                </div>
            </div>
        </div>

    )
}

export default Suggestions