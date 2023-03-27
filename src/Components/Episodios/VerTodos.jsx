//react
import React, { Fragment } from 'react'

//router
import { Link } from 'react-router-dom'

function VerTodos(props) {
    let arrayEpisodios = props.arrayEpisodios
    let tipoVariable= Array.isArray(arrayEpisodios)

  return (
    <Fragment>
        {
         tipoVariable===true
         ?
                arrayEpisodios?.map( (item, index) => 
                      <Link to={`/Episodios/${item.id}`} key={index} className="d-flex justify-content-center">
                        
                        <div className="card mb-3 w-100 p-3" id='card-epi'>
                          <div className="row g-0">
                            <div className="w-100">
                              <div className="card-body">
                                <h5 className="card-title">
                                  {item.name}
                                </h5>
                              </div>
                            </div>
                            <div className="w-100 d-flex flex-row">
                              <div className="w-100">
                                      <div className="card-body">
                                        <p className="card-text d-flex flex-row  align-items-left">
                                          <strong>Fecha de lanzamiento: </strong> {item.air_date}
                                        </p>
                                      </div>
                              </div>
                            </div>
                            <div className="w-100 d-flex flex-row">
                              <div className="w-50">
                                  <div className="card-body">
                                        <p className="card-text"><strong>Episodio: </strong><span className='fs-5'>{item.episode}</span> </p>
                                  </div>
                              </div>
                              <div className="w-50">
                                  <div className="card-body">
                                    <p className="card-text"><strong>Creación:</strong> {item.created} </p>
                                  </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </Link>
                          
                )    
          :    

          <Link to={`/Episodios/${arrayEpisodios.id}`} className="d-flex justify-content-center">
                        
                        <div className="card mb-3 w-100">
                          <div className="row g-0">
                            <div className="col-md-6">
                              <div className="card-body">
                                <h5 className="card-title">
                                  {arrayEpisodios.name}
                                </h5>
                                <p className="card-text d-flex flex-row justify-content-between align-items-center">
                                  <strong>Fecha de lanzamiento:</strong> 
                                  {
                                  arrayEpisodios.air_date
                                  }
                                  
                                </p>
                                <p className="card-text"><strong>Episodio: </strong><span className='fs-5'>{arrayEpisodios.episode}</span> </p>
                                
                                
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card-body">
                                <p className="card-text"><strong>Datos adicionales</strong></p>
                                <p className="card-text"><strong>Creación:</strong> {arrayEpisodios.created} </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
            
    }

    </Fragment>
  )
}

export default VerTodos