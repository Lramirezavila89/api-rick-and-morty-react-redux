import React, { Fragment } from 'react'

function FiltroEspecie(props) {
    
    const Recoger = (dato) =>{ 
        props.estado2(dato)
      }
  return (
    <Fragment>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Especie
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <div className='d-flex flex-wrap justify-content-center'>
                            <input type="radio" className="btn-check" name="options2" id="option12" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option12" onClick={() => Recoger('Human')}>Humano</label>

                            <input type="radio" className="btn-check" name="options2" id="option22" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option22" onClick={() => Recoger('Alien')}>Alien</label>

                            <input type="radio" className="btn-check" name="options2" id="option32" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option32" onClick={() => Recoger('Humanoid')}>Humanoide</label>

                            <input type="radio" className="btn-check" name="options2" id="option42" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option42" onClick={() => Recoger('Proopybutthole')}>proopybutthole</label>

                            <input type="radio" className="btn-check" name="options2" id="option52" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option52" onClick={() => Recoger('Mythological')}>Mitológica</label>

                            <input type="radio" className="btn-check" name="options2" id="option62" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option62" onClick={() => Recoger('Unknown')}>Desconocido</label>

                            <input type="radio" className="btn-check" name="options2" id="option72" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option72" onClick={() => Recoger('Animal')}>Animal</label>

                            <input type="radio" className="btn-check" name="options2" id="option82" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option82" onClick={() => Recoger('Disease')}>Enfermo</label>

                            <input type="radio" className="btn-check" name="options2" id="option92" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option92" onClick={() => Recoger('Robot')}>Robot</label>

                            <input type="radio" className="btn-check" name="options2" id="option102" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option102" onClick={() => Recoger('Cronenberg')}>Cronenberg</label>

                            <input type="radio" className="btn-check" name="options2" id="option112" autoComplete="off" />
                            <label className="btn boton-radio" htmlFor="option112" onClick={() => Recoger('Planet')}>Planeta</label>
                          </div>
                        </div>
                    </div>
                </div>

    </Fragment>
  )
}

export default FiltroEspecie