import React, { Fragment } from 'react'

function FiltroGenero(props) {
    
    const Recoger = (dato) =>{ 
        props.estado3(dato)
      }
  return (
    <Fragment>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Género
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <div className='d-flex flex-wrap justify-content-center'>
                            <input type="radio" className="btn-check" name="options3" id="option13" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option13" onClick={() => Recoger('Male')}>Masculino</label>

                            <input type="radio" className="btn-check" name="options3" id="option23" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option23" onClick={() => Recoger('Female')}>Femenino</label>

                            <input type="radio" className="btn-check" name="options3" id="option33" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option33" onClick={() => Recoger('Genderless')}>Sin género</label>

                            <input type="radio" className="btn-check" name="options3" id="option43" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option43" onClick={() => Recoger('unknown')}>Desconocido</label>
                          </div>
                        </div>
                    </div>
                </div>

    </Fragment>
  )
}

export default FiltroGenero