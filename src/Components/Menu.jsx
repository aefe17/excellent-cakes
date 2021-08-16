import React from 'react'
import {
    Link
} from "react-router-dom";

import uniqid from 'uniqid'


import dessert_product1 from '../assets/images/producto_postre1.png'
import dessert_product2 from '../assets/images/producto_postre2.png'
import dessert_product3 from '../assets/images/producto_postre3.png'
import dessert_product4 from '../assets/images/producto_postre4.png'
import dessert_product5 from '../assets/images/producto_postre5.png'
import dessert_product6 from '../assets/images/producto_postre6.png'

import banner4 from '../assets/images/banner-home-4.png'

const items = [
    {
        id: uniqid(),
        img: dessert_product1,
        title: 'Producto 1',
        description: 'Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim'
    },
    {
        id: uniqid(),
        img: dessert_product2,
        title: 'Producto 2',
        description: 'Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim'
    },
    {
        id: uniqid(),
        img: dessert_product3,
        title: 'Producto 3',
        description: 'Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim'
    },
    {
        id: uniqid(),
        img: dessert_product4,
        title: 'Producto 4',
        description: 'Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim'
    },
    {
        id: uniqid(),
        img: dessert_product5,
        title: 'Producto 5',
        description: 'Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim'
    },
    {
        id: uniqid(),
        img: dessert_product6,
        title: 'Producto 6',
        description: 'Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim'
    },

]


const Menu = () => {
    return (
        <div className='container'>
            <div className="col p-4 d-flex flex-column position-static mt-2 border-bottom border-dark" style={{ alignItems: 'center' }}>
                <img src={banner4}
                    alt=''
                    style={{ height: 400, width: 800 }}

                />
            </div>
            <div className="row mt-3">
                {
                    items.map(item => {
                        return (
                            <div className="col-4 p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center', fontFamily: 'Poppins' }}>
                                <img className='rounded-circle' style={{ width: 140, height: 140 }} src={item.img} alt='' />
                                <h2 className='font-weight-bold'>{item.title} </h2>
                                <p>{item.description}</p>
                                <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white', }}>ORDENAR</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu