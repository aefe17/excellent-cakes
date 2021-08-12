import { Button } from 'bootstrap'
import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import img from '../img/placeholder.com-logo1.jpg'

const home = () => {
    return (
        <div>
            <div className="col p-4 d-flex flex-column position-static mt-2 border-bottom border-dark" style={{ alignItems: 'center' }}>
                <Carousel style={{ height: 400, width: 800 }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.picsum.photos/id/373/800/400.jpg?hmac=S9GZ-LQ8X3bO6GMOs4x9_zY7QE2mTtsVdKO7Uy44T64"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.picsum.photos/id/373/800/400.jpg?hmac=S9GZ-LQ8X3bO6GMOs4x9_zY7QE2mTtsVdKO7Uy44T64"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.picsum.photos/id/373/800/400.jpg?hmac=S9GZ-LQ8X3bO6GMOs4x9_zY7QE2mTtsVdKO7Uy44T64"
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col p-4 border-bottom border-dark" style={{ marginTop: 30 }}>
                <h3>Nuestro delicioso menú</h3>
                <p className="card-text mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor enim placerat dui luctus, tincidunt ullamcorper lacus volutpat. Sed nec libero risus. Nam porttitor viverra ornare. Nullam mollis lectus et lorem ullamcorper, at commodo tortor posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc malesuada sed libero ut iaculis. Integer sollicitudin iaculis pretium.</p>
                <button className="btn rounded-pill mt-3" style={{ backgroundColor: "#544234", color: 'white' }}>
                    Suscribirse
                </button>
            </div>

            <div className="row" style={{ backgroundColor: '#B99877' }}>
                <div className="col-md-4 mx-4">
                    <h3 className='mt-3' style={{ color: '#402D22' }}>Suscribete a nuestro newsletter</h3>
                    <input placeholder="Nombre y Apellido" className="form-control mb-3" type="text" />
                    <input placeholder="Correo electronico" className="form-control mb-3" type="text" />
                    <button className="btn rounded-pill mt-3" style={{ backgroundColor: "#544234", color: 'white' }}>Suscribirse</button>
                </div>

                <div className="col-md-3 mt-3">
                    <h3 style={{ color: 'white' }}>SIGUENOS EN INSTAGRAM</h3>
                    <div className='mb-3'>
                        <img
                            src='https://i.picsum.photos/id/73/150/200.jpg?hmac=j34QA7IU2SPF17qrnrcjZHjWiwllLPvDbqobKtfTdb0'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src={img}
                            alt=""
                            style={{ height: 60, width: 300 }}
                        />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div >
    )
}

export default home
