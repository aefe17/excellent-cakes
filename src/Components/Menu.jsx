import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Ordenar from './Ordernar'

const Menu = () => {
    return (
        <div className='container marketing'>
            <div className="col p-4 d-flex flex-column position-static mt-2 border-bottom border-dark" style={{ alignItems: 'center' }}>
                <img src='https://i.picsum.photos/id/484/800/600.jpg?hmac=kuhqXFPDWFNLGZhctoCT_0Of-F1t1sm8hqnM5cRHM4M'
                    alt=''
                    style={{ height: 400, width: 800 }}
                />
            </div>
            <Router>
                <div className="row mt-3 d-flex">
                    <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                        <img className='rounded-circle'
                            style={{ width: 140, height: 140 }}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                            alt=''
                        />
                        <h2>Producto 1</h2>
                        <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                        <button className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Ordenar</button>
                    </div>
                    <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                        <img className='rounded-circle'
                            style={{ width: 140, height: 140 }}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                            alt=''
                        />
                        <h2>Producto 2</h2>
                        <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                        <button className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Ordenar</button>
                    </div>
                    <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                        <img className='rounded-circle'
                            style={{ width: 140, height: 140 }}
                            src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                            alt=''
                        />
                        <h2>Producto 3</h2>
                        <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                        <button className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Ordenar</button>
                    </div>
                    <div className="row mt-3 d-flex">
                        <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                            <img className='rounded-circle'
                                style={{ width: 140, height: 140 }}
                                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                                alt=''
                            />
                            <h2>Producto 4</h2>
                            <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                            <button className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Ordenar</button>
                        </div>
                        <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                            <img className='rounded-circle'
                                style={{ width: 140, height: 140 }}
                                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                                alt=''
                            />
                            <h2>Producto 5</h2>
                            <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                            <button className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Ordenar</button>
                        </div>
                        <div className="col p-4 d-flex flex-column position-static mt-3" style={{ alignItems: 'center' }}>
                            <img className='rounded-circle'
                                style={{ width: 140, height: 140 }}
                                src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                                alt=''
                            />
                            <h2>Producto 6</h2>
                            <p>Lorem ipsum doolor sit amet, consectetuer adipscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolere magna aliquam erat volutpat. ut wisi enim</p>
                            <button className="btn rounded-pill mb-3" style={{ backgroundColor: "#B99877", color: 'white' }}>Ordenar</button>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path='/Menu/Ordernar'><Ordenar /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Menu
