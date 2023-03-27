import React  from 'react'
import FiltroEstado from './Filtros/FiltroEstado'
import FiltroEspecie from './Filtros/FiltroEspecie'
import FiltroGenero from './Filtros/FiltroGenero'


function PersonajesFiltro(props) {

  const [filtro1, setFiltro1] = React.useState('')
  const [filtro2, setFiltro2] = React.useState('')
  const [filtro3, setFiltro3] = React.useState('')


  let array = []

  const dato = (dato) =>{ 
    setFiltro1(dato)
  }
  const dato2 = (dato2) =>{
    setFiltro2(dato2)
  }
  const dato3 = (dato3) =>{
    setFiltro3(dato3)
  }

  array =[filtro1,filtro2,filtro3]
  props.filtroGeneral(array)


  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">

                  <FiltroEstado estado={dato}/>
                  <FiltroEspecie estado2={dato2}/>
                  <FiltroGenero estado3={dato3}/>
   
    </div>
    
  )
}

export default PersonajesFiltro