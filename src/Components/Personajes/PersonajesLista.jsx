//react
import React, { Fragment } from 'react'

//Lazy
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//router
import { Link } from 'react-router-dom'

function PersonajesLista(props) {
    let arrayPersonajes = props.arrayPersonajes

    return (
    <Fragment>
    {
      arrayPersonajes !='' ?
                      arrayPersonajes.map( (item, index) => 
                      <Link to={`/Personajes/detalles/${item.id}`} key={index}>
                        
                        <div className="card mb-3">
                          <div className="row g-0 align-items-center" id='pw-100'>

                            <div className="w-25 d-flex justify-content-center" id='pw-25'>
                              <LazyLoadImage  src={item.image} className="rounded-circle" alt="..." effect='blur' />
                            </div>

                            <div className="w-75 d-flex flex-column justify-content-center" id='pw-75'>
                                <h5 className="card-title">{item.name}</h5>
                                <div className="w-100 d-flex flex-row justify-content-center" id='pw-100'>
                                    <div className="w-50 d-flex flex-column justify-content-center" id='pw-50'>
                                          <p className="card-text w-100"><strong>Estado:</strong> 
                                            {
                                            item.status==='Alive'? <span>Vivo</span> : item.status==='Dead'? <span>Muerto</span> : <span>Desconocido</span>
                                            }
                                            {
                                              item.status === 'Alive' ? 
                                                <span className="px-2 py-1  rounded-circle">
                                                  <i className="bi bi-emoji-smile-fill tituloIconVivo"></i>
                                                </span>
                                              : item.status === 'Dead' ?
                                                <span className="px-2 py-1  rounded-circle">
                                                  <i className="bi bi-emoji-dizzy-fill tituloIconMuerto"></i>
                                                </span>
                                              :
                                                <span className="px-2 py-1  rounded-circle">
                                                  <i className="bi bi-emoji-frown-fill tituloIconDesconocido"></i>
                                                </span>
                                            } 
                                          </p>
                                          <p className="card-text w-100"><strong>Especie:</strong> {item.species}</p>
                                
                                    </div>
                                    <div className="w-50 d-flex flex-column justify-content-center" id='pw-50'>
                                            <p className="card-text w-100"><strong>Datos adicionales</strong></p>
                                            <p className="card-text w-100"><strong>Origen:</strong> {item.origin?.name}</p>
                                    </div>
                                </div>
                            </div>
                           

                          </div>
                        </div>
                      </Link>
                          
                      )        
            :
            <div className='d-flex flex-column align-items-center'>
              <strong className='fs-5 text-center' id='texto'>No existe el Personaje filtrado</strong>    
              <i className="bi bi-emoji-neutral fs-2 tituloIcon"></i>
            </div>
    }
   </Fragment>
  )
}

export default PersonajesLista