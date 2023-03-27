import React, { Fragment ,useState, useEffect} from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { cambio } from '../../Redux/Header/Oscuro'



function HeaderOscuro() {
  
  //redux
  const { estado ,tema } = useSelector(state => state.Oscuridad)
  const dispatch = useDispatch()

  //hooks
  const temaLocal = localStorage.getItem('tema')
  const estadoLocal = JSON.parse(localStorage.getItem('estado'))
  const [checked, setChecked] = useState(estadoLocal)
  
  useEffect(() => {
    inciarEstado()
    //*_* : borra error remove dependece asi comentariado como se ve abajo
    //eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [])
  
  const dato = (e) =>{
    dispatch(cambio(e.target.checked)) //le mandamos el estado el checked
    localStorage.setItem('tema',tema === 'light' ? 'dark' : 'light') 
    localStorage.setItem('estado',!estado) 
    document.body.setAttribute('data-theme', tema === 'light' ? 'dark' : 'light') //pintamos el atributo en el body   
    
    setChecked(estadoLocal=== true ?  false :  true) //modificar checked use PENDIENTE!!!!
    
    estadoLocal=== true ? localStorage.setItem('tema', 'light') : localStorage.setItem('tema', 'dark')
    estadoLocal=== true ? localStorage.setItem('estado', false) : localStorage.setItem('estado', true) //modificar checked use PENDIENTE!!!!
    estadoLocal=== true ? document.body.setAttribute('data-theme', 'light') : document.body.setAttribute('data-theme', 'dark')

  }
  
  const inciarEstado = () =>{
    localStorage.setItem('tema', temaLocal ===null ? tema : temaLocal)
    localStorage.setItem('estado', estadoLocal===null ? estado: estadoLocal) 
    document.body.setAttribute('data-theme', temaLocal) //pintamos el atributo en el body  
   
  }

  return (
    <Fragment>
        <input onChange={dato} type="checkbox" id="toggle_checkbox" checked={checked}  />
    
        <label htmlFor="toggle_checkbox">
            <div id="star">
              <i className="bi bi-sun-fill"></i>
            </div>
            <div id="moon"></div>
        </label>

    </Fragment>
  )
  
}

export default HeaderOscuro