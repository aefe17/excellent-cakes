import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import dessert_product1 from '../assets/images/producto_postre1.png'
import dessert_product2 from '../assets/images/producto_postre2.png'
import dessert_product3 from '../assets/images/producto_postre3.png'
import dessert_product4 from '../assets/images/producto_postre4.png'
import dessert_product5 from '../assets/images/producto_postre5.png'
import dessert_product6 from '../assets/images/producto_postre6.png'

import banner4 from '../assets/images/banner-home-4.png'

import Order from './Order'

const Menu = () => {
    return (
        <div className='container marketing'>
            <div className="col p-4 d-flex flex-column position-static mt-2 border-bottom border-dark" style={{ alignItems: 'center' }}>
                <img src={banner4}
                    alt=''
                    style={{ height: 400, width: 800 }}
                />
                <div style={{ position: 'absolute', right: '38%', bottom: '74%', fontFamily: 'Leckerli One', fontSize: 100 }}>
                    Nuestro Menu
                </div>
            </div>
            <Router>
                <div className="row mt-3 d-flex">
                    <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                        <img className='rounded-circle'
                            style={{ width: 140, height: 140 }}
                            src={dessert_product1}
                            alt=''
                        />
                        <h2>Producto 1</h2>
                        <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                        <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Order</Link>
                    </div>
                    <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                        <img className='rounded-circle'
                            style={{ width: 140, height: 140 }}
                            src={dessert_product2}
                            alt=''
                        />
                        <h2>Producto 2</h2>
                        <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                        <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Order</Link>
                    </div>
                    <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                        <img className='rounded-circle'
                            style={{ width: 140, height: 140 }}
                            src={dessert_product3}
                            alt=''
                        />
                        <h2>Producto 3</h2>
                        <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                        <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Order</Link>
                    </div>
                    <div className="row mt-3 d-flex">
                        <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                            <img className='rounded-circle'
                                style={{ width: 140, height: 140 }}
                                src={dessert_product4}
                                alt=''
                            />
                            <h2>Producto 4</h2>
                            <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                            <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Order</Link>
                        </div>
                        <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                            <img className='rounded-circle'
                                style={{ width: 140, height: 140 }}
                                src={dessert_product5}
                                alt=''
                            />
                            <h2>Producto 5</h2>
                            <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                            <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Order</Link>
                        </div>
                        <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                            <img className='rounded-circle'
                                style={{ width: 140, height: 140 }}
                                src={dessert_product6}
                                alt=''
                            />
                            <h2>Producto 6</h2>
                            <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                            <Link to='/Order' className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Order</Link>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path='/Order'><Order /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Menu
