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
        id:uniqid(),
        title: 'Producto',
        description:'Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim'
    }
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
                {
                    items.map(item => {
                        return(
                            <div className="row mt-3">
                                
                                <div className="col-4 p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center', fontFamily: 'Poppins' }}>
                                    <img className='rounded-circle' style={{width: 140, height:140}} src={dessert_product1} alt=''/>
                                    <h2 className='font-weight-bold'>{item.title} 1</h2>
                                    <p>{item.description}</p>
                                    <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white', }}>ORDENAR</Link>
                                </div>

                                <div className="col-4 p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center', fontFamily: 'Poppins' }}>
                                    <img className='rounded-circle' style={{width: 140, height:140}} src={dessert_product2} alt=''/>
                                    <h2 className='font-weight-bold'>{item.title} 2</h2>
                                    <p>{item.description}</p>
                                    <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white', }}>ORDENAR</Link>
                                </div>

                                <div className="col-4 p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center', fontFamily: 'Poppins' }}>
                                    <img className='rounded-circle' style={{width: 140, height:140}} src={dessert_product3} alt=''/>
                                    <h2 className='font-weight-bold'>{item.title} 3</h2>
                                    <p>{item.description}</p>
                                    <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white', }}>ORDENAR</Link>
                                </div>

                                <div className="col-4 p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center', fontFamily: 'Poppins' }}>
                                    <img className='rounded-circle' style={{width: 140, height:140}} src={dessert_product4} alt=''/>
                                    <h2 className='font-weight-bold'>{item.title} 4</h2>
                                    <p>{item.description}</p>
                                    <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white', }}>ORDENAR</Link>
                                </div>

                                <div className="col-4 p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center', fontFamily: 'Poppins' }}>
                                    <img className='rounded-circle' style={{width: 140, height:140}} src={dessert_product5} alt=''/>
                                    <h2 className='font-weight-bold'>{item.title} 5</h2>
                                    <p>{item.description}</p>
                                    <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white', }}>ORDENAR</Link>
                                </div>

                                <div className="col-4 p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center', fontFamily: 'Poppins' }}>
                                    <img className='rounded-circle' style={{width: 140, height:140}} src={dessert_product6} alt=''/>
                                    <h2 className='font-weight-bold'>{item.title} 6</h2>
                                    <p>{item.description}</p>
                                    <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white', }}>ORDENAR</Link>
                                </div>
                        </div> 
                        )
                    })
                }
            </div>
    )
}

export default Menu