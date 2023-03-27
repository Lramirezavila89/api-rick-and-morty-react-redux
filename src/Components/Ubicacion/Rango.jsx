//React
import React from 'react'

function Rango(props) {
  const [rango, setRango] = React.useState(1)

 
  props.rangoValor(rango)

  const Cambio = (e) => {
    setRango(e.target.value)
  }
  
  return (
    <div className='w-100 d-flex flex-column align-items-center'>

        <input 
          type="range" 
          className="range"
          min="1" 
          max="126" 
          step="1" 
          value={rango}
          onChange={Cambio}
          />
        <span id="titulo" className='fs-3 my-4'>{rango}</span>
    </div>
  )
}

export default Rango