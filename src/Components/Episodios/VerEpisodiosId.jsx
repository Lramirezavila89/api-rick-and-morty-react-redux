//React
import React, { Fragment,useEffect,useState } from 'react'

//Router
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//Redux
import { useDispatch,useSelector } from 'react-redux'
import { EpisodiosIDApi } from '../../Redux/Episodios/EpisodiosID'
import PersonajesEpisodio from './PersonajesEpisodio'
import Loading from '../Loading'


function VerEpisodiosId() {
  //hooks
  const [loading, setLoading] = useState(false)

  //redux
  const { ObjetosEpisodiosID, Load} = useSelector(state => state.EpisodiosID)
  const dispatch = useDispatch()

  
    //Params
    let idUrl = useParams().idE
    
    //Effect
    useEffect(() => {
      dispatch(EpisodiosIDApi(idUrl)) 
      setLoading(Load)
    },[Load])


    //array id personajes
    let arr = []
    ObjetosEpisodiosID.characters?.map((i, index)=>
        arr.push(i.replace(/[^0-9]+/g, ""))
    )

  return (
    <Fragment>
      <div className='w-100 d-flex mh-50 mt-4'>
            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
                    <li className="breadcrumb-item"><Link to={'/Episodios'}>Episodios</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"> Detalle Episodio</li>
                </ol>
            </nav>
      </div>
      
      <div className='w-100 d-flex ' id='ew-100'>
          <div className='w-25 d-flex flex-column' id='ew-25'>
                <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Datos</p>
                {
                  loading ?
                  <div className="datosCardR d-flex w-100 flex-column " >
                      <div className='w-100 py-2'><strong>Nombre: </strong>{ObjetosEpisodiosID.name}</div>
                      <div className='w-100 py-2'><strong>Episodio: </strong><span className='fs-3'>{ObjetosEpisodiosID.episode}</span></div>
                      <div className='w-100 py-2'><strong>Aire: </strong>{ObjetosEpisodiosID.air_date}</div>
                      <div className='w-100 py-2'><strong>Creación: </strong>{ObjetosEpisodiosID.created}</div>
                  </div>
                  :
                  <div className="w-100 d-flex justify-content-center"><Loading/></div> 
                  
                }
            </div>
            <div className='w-75 d-flex flex-row flex-wrap justify-content-center' id='ew-75'>
              <div className='w-100 d-flex '><p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Personajes del episodio</p></div>
              <PersonajesEpisodio array={arr}/>
            </div>
        </div>
    </Fragment>
  )
}

export default VerEpisodiosId


