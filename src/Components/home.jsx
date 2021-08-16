import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import logo from '../assets/images/logo.png'
import banner1 from '../assets/images/banner-home-1.png'
import banner2 from '../assets/images/banner-home-2.png'
import banner3 from '../assets/images/banner-home-3.png'
import igpreview from '../assets/images/ig preview.png'
import ilustrasion from '../assets/images/ilustrasion.png'

const home = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-12 p-4 d-flex flex-column position-static mt-2 border-bottom border-dark" style={{ alignItems: 'center' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner2}
                                alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt=""
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
            <div className="col p-4 border-bottom border-dark">
                <h1 style={{ fontFamily: 'Leckerli One', color: '#3E2F25' }}>Nuestro delicioso menú</h1>
                <div className="row">

                    <p className="col-12 col-md-5" style={{ fontFamily: 'Poppins' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur auctor enim placerat dui luctus, tincidunt ullamcorper lacus volutpat. Sed nec libero risus.
                        Nam porttitor viverra ornare. Nullam mollis lectus et lorem ullamcorper, at commodo tortor posuere.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc malesuada sed libero ut iaculis.
                        Integer sollicitudin iaculis pretium.
                    </p>
                    <div className="col-7 col-12 col-md-5">
                        <img
                            src={ilustrasion}
                            alt=''
                            style={{ height: 300, width: 300, float: 'right' }}
                        />
                    </div>
                </div>
                <button className="btn rounded-pill mt-3" style={{ backgroundColor: "#544234", color: 'white', fontFamily: 'Poppins' }}>
                    Suscribirse
                </button>
            </div>

            <div className="row" style={{ backgroundColor: '#B99877' }}>
                <div className="col-md-4">
                    <div className="px-4 mt-3">
                        <h1 className='mt-3' style={{ color: '#402D22', fontFamily: 'Leckerli One' }}>Suscribete a nuestro newsletter</h1>
                        <input placeholder="Nombre y Apellido" className="form-control mb-3" type="text" />
                        <input placeholder="Correo electronico" className="form-control mb-3" type="text" />
                        <button className="btn rounded-pill" style={{ backgroundColor: "#544234", color: 'white', fontFamily: 'Poppins' }}>Suscribirse</button>
                    </div>
                </div>

                <div className="col-md-4 mt-3 offset-md-3">
                    <h3 style={{ color: 'white', fontFamily: 'Poppins' }}>SIGUENOS EN INSTAGRAM</h3>
                    <div className='mb-3'>
                        <img
                            src={igpreview}
                            alt=''
                            style={{ height: 300, width: 300 }}
                        />
                    </div>
                    <div>
                        <img
                            src={logo}
                            alt=""
                            style={{ height: 60, width: 300 }}
                        />
                    </div>
                    <p style={{ fontFamily: 'Poppins' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div >
    )
}

export default home
