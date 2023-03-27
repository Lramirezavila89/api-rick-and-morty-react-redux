//react
import React,{Fragment, useEffect, useState} from 'react'

//router
import { Link, useParams } from 'react-router-dom'

//Lazy
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//redux
import { useDispatch,useSelector } from 'react-redux'
import { DetallesPersonajesApi } from '../../Redux/Personajes/DetallesLista'
import { EpisodiosApi } from '../../Redux/Personajes/DetallesLista'
import Header from '../Header/Header'
import Loading from '../Loading'

function Detalles() {
//hooks
const [loading, setLoading] = useState(false)
const [loading2, setLoading2] = useState(false)

//redux
const { ObjetosPersonajes, ObjetosEpisodios, Load1,Load2} = useSelector(state => state.DetallesPersonaje)
const dispatch = useDispatch()

//useParams 
let id = useParams().id

//useEffect
useEffect(() => {
    dispatch(DetallesPersonajesApi(id)) //funciona que trae la APi
    dispatch(EpisodiosApi(id)) //funciona que trae la APi
    setLoading(Load1)
    setLoading2(Load2)
    //eslint-disable-next-line react-hooks/exhaustive-deps 
},[Load1,Load2])





  return (
    <Fragment>
        <Header/>
        <div className="container z-1 position-relative py-3">

            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
                <li className="breadcrumb-item"><Link to={'/Personajes'}>Personajes</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{ObjetosPersonajes.name}</li>
                </ol>
            </nav>


            <div className='w-100 d-flex flex-row flex-wrap' id='pwd-100'>
                <div className="mb-3 w-25" id='pwd-25'>
                    <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Detalles</p>
                    {
                    loading2 ?
                    <Fragment>
                    <LazyLoadImage src={ObjetosPersonajes.image} className="card-img-top rounded-3" alt="..." effect='blur'/>
                    <div className="card-body mt-3">
                        <h5 className="card-title">{ObjetosPersonajes.name}</h5>
                        <p className="card-text" id='texto'>
                          <strong>Género:</strong> <br/> 
                            {ObjetosPersonajes.gender==='Male' 
                            ? 
                            <small><i className="bi bi-gender-male tituloIcon"></i><span>Masculino</span></small>
                            : ObjetosPersonajes.gender==='Female'?
                            <small><i className="bi bi-gender-female tituloIcon"></i><span>Femenino</span></small>
                            :
                            <small><i className="bi bi-gender-ambiguous tituloIcon"></i><span>Otros</span></small>
                            } 
                        </p>
                        <p className="card-text" id='texto'>
                          <strong>Estado:</strong><br/> 
                            {ObjetosPersonajes.status==='Alive' 
                            ? 
                            <small><i className="bi bi-emoji-smile-fill tituloIconVivo"></i><span>Vivo(a)</span></small>
                            : ObjetosPersonajes.status==='Dead'?
                            <small><i className="bi bi-emoji-dizzy-fill tituloIconMuerto"></i><span>Muerto(a)</span></small>
                            :
                            <small><i className="bi bi-emoji-frown-fill tituloIconDesconocido"></i><span>Desconocido(a)</span></small>
                            } 
                        </p>
                        <p className="card-text" id='texto'>
                          <strong>Especie:</strong><br/> 
                          <span><i className="bi bi-person-badge-fill tituloIcon"></i></span>
                          <small>{ObjetosPersonajes.species}</small>
                        </p>
                        <p className="card-text" id='texto'>
                          <strong>Fecha de creación:</strong><br/> 
                          <span><i className="bi bi-calendar-day tituloIcon"></i></span>
                          <small>{ObjetosPersonajes.created}</small>
                        </p>
                        <p className="card-text" id='texto'>
                          <strong>Ubicación:</strong><br/> 
                          <span><i className="bi bi-geo-alt-fill tituloIcon"></i></span>
                          <small>{ObjetosPersonajes.location?.name}</small>
                        </p>
                    </div>
                    </Fragment>
                      :
                      <div className='d-flex w-100 align-items-center justify-content-center'>
                        <Loading/>
                      </div>
                      }
                </div>


                <div className="px-3 mb-3 w-75" id='pwd-75'>
                <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Episodios</p>
                    <div className="w-100 d-flex flex-row flex-wrap justify-content-center">
                      {
                       loading2 ?
                        ObjetosEpisodios?.map((items , index) =>
                            <Link to={`/Episodios/${index+1}`} key={index} >                  
                            <div className="toast m-1" >
                              <div className="toast-header">
                                <strong className="me-auto">Episodio</strong>
                              </div>
                              <div className="toast-body text-center fs-2">
                                {index+1} 
                              </div>
                            </div>
                          </Link>
                        ) 
                        :
                        <Loading/>
                      }
                      
                    </div>
                </div>

            </div>
       </div>
           
    </Fragment>
  )
}

export default Detalles