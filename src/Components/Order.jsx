import React from 'react'


import dessert_product1 from '../assets/images/producto_postre1.png'

const Order = ({ img }) => {
    return (
        <div className="container marketing mt-5">
            <img className='rounded-circle' style={{ width: 300, height: 300 }} src={dessert_product1} alt='' />
            <h2 className='float-end ml-3'>Estas ordenando</h2>
        </div>
    )
}

export default Order
