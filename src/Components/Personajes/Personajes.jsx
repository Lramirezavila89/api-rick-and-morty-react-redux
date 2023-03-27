//react
import React,{Fragment, useEffect,useState} from 'react'
import Header from '../Header/Header'

//router
import { Link } from 'react-router-dom'


//redux
import { useDispatch,useSelector } from 'react-redux'
import { PersonajesApi } from '../../Redux/Personajes/Lista'
import PersonajesFiltro from './PersonajesFiltro'
import PersonajesLista from './PersonajesLista'
import Loading from '../Loading'



function Personajes() {
//redux
const { arrayPersonajes, load } = useSelector(state => state.Personajes)
const dispatch = useDispatch()


//hooks
const [loading, setLoading] = useState(false)


const Filtro = (filtro) =>{
    let estado = filtro[0]
    let especie = filtro[1]
    let genero = filtro[2]
    let url = `https://rickandmortyapi.com/api/character/?status=${estado}&species=${especie}&gender=${genero}`
   
    useEffect(() => {
      dispatch(PersonajesApi(url))
      setLoading(load)
    }, [url,load]);
}

//console.log(loading)


  return (
    <Fragment>
      <Header/>
      <div className="container z-1 position-relative py-3">
        <nav aria-label="breadcrumb" className='mt-2'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Personajes</li>
          </ol>
        </nav>

      
      
        <div className='w-100 d-flex flex-row' id='w-100'>
          <div className='w-25' id='w-25'>
            <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Filtro</p>
            <PersonajesFiltro filtroGeneral={Filtro}/>

          </div>
          <div className="d-flex flex-wrap flex-column align-items-center justify-content-center w-75" id='w-75'>
            <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Lista</p>
            { loading ? <PersonajesLista arrayPersonajes={arrayPersonajes}/>   :<Loading/>}
          </div>
        </div>
      </div>
    </Fragment>
    
  )
}

export default Personajes