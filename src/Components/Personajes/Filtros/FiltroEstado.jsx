import React, { Fragment } from 'react'

function FiltroEstado(props) {

    const Recoger = (dato) =>{ 
        props.estado(dato)
    }
  return (
    <Fragment>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Estado
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <div className='d-flex flex-wrap justify-content-center'>
                            <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option1" onClick={() => Recoger('Alive')}>Vivo</label>

                            <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option2" onClick={() => Recoger('Dead')}>Muerto</label>

                            <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option3" onClick={() => Recoger('unknown')}>Desconocido</label>
                          </div>
                        </div>
                    </div>
                </div>

    </Fragment>
  )
}

export default FiltroEstado