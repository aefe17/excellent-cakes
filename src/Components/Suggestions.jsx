import React from 'react'

import {
    Link
} from "react-router-dom";


import brownLine from '../assets/images/linea marron.png'

const Suggestions = () => {
    return (
        <div className='container marketing mt-3' style={{ textAlign: 'center'}}>
            <h2 style={{ fontFamily: 'Leckerli One' }}>¿Alguna sugerencia?</h2>
            <img src={brownLine} alt='' style={{ width: 600 }} />
            <h3 style={{ fontFamily: 'Poppins' }}>Ayudanos a mejorar</h3>
            <div className="row form-group" style={{ backgroundColor: '#BA9A77' }}>
                <div className="col-md-6 mx-auto mt-3 " style={{}}>
                    <div className='flex-v-center'>
                        <input placeholder="Nombre" className="form-control mb-3" type="text"/>
                        <input placeholder="Correo electronico" className="form-control mb-3" type="text" />
                    </div>
                    <textarea placeholder="Mensaje" className="form-control" ></textarea>
                    <Link to='/SuggestionSent' className="btn rounded-pill mt-2" style={{ backgroundColor: "#3E2F25", color: 'white' }}>ENVIAR SUGERENCIA</Link>
                </div>
            </div>
        </div>

    )
}

export default Suggestions