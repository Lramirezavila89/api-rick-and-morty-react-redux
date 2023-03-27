//React
import React, { Fragment,useEffect, useState } from 'react'

//Lazy
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


//Redux
import { BuscadorApi } from '../../Redux/Header/Buscador'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'


//Router
import { Link } from 'react-router-dom'



function HeadeBuscarModal() {

    //Hooks detectar atras
    const [atras, setAtras] = useState(false)

    //Hooks cerrar
    const cerrar = React.useRef(null);

    //Hooks
    const [loading, setLoading] = useState(false)

    //Hooks
    const [datos, setDatos] = useState({
        tipo: '', nombre: ''
    })

    //Hooks 3 botones
    const [checked, setChecked] = useState(true)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)




    const Radios = (e) =>{
             setDatos({...datos, [e.target.name]: e.target.value}) 
    }
    const Input = (e) =>{
             setDatos({...datos, [e.target.name]: e.target.value}) 
    }


    //Redux
    const { MisDatos,LinkDatos,TipoDatos, Load } = useSelector(state => state.Buscador)
    const dispatch = useDispatch()

    //useEffect
    useEffect(() => {
        dispatch(BuscadorApi(datos))
        setLoading(Load)
    }, [datos,Load])

    //useEffect
    useEffect(() => {
        window.onpopstate = ()=>{
          setAtras(true)
        }
      }, [])
  
    if(atras===true){ 
        window.location.reload()
    }
    
    
    const funcionCerrar = () =>{
        cerrar.current.click()
    }

   

    return (
    <Fragment>
        <button type="button" className="btn buscador" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="bi bi-search"></i>Buscar personajes, episodios o ubicación<i className="bi bi-arrows-fullscreen"></i>
            </button>

           

           {/*_____________MODAL__________________ */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <form className='d-flex align-items-center justify-content-center w-100 flex-wrap'>
                          <div className='d-flex flex-row'>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                              <input type="radio" className="btn-check" name="tipo" id="btnradio1" value="Personajes" onClick={Radios} defaultChecked={checked} />
                              <label className="btn boton-radio2 uno" htmlFor="btnradio1">Personajes</label>

                              <input type="radio" className="btn-check" name="tipo" id="btnradio2" value="Episodios" onClick={Radios}  defaultChecked={checked2}/>
                              <label className="btn boton-radio2" htmlFor="btnradio2">Episodios</label>

                              <input type="radio" className="btn-check" name="tipo" id="btnradio3" value="Ubicacion" onClick={Radios}  defaultChecked={checked3}/>
                              <label className="btn boton-radio2 tres" htmlFor="btnradio3">Ubicación</label>
                            </div>
                          </div>

                          <div className='d-flex flex-row'>
                            <input  
                              type="text"
                              className='w-100'
                              id='search'
                              placeholder='Buscar por nombres...'
                              name='nombre'
                              onChange={Input}
                            />
                          </div>
                    </form>
                    <button ref={cerrar} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body d-flex flex-row flex-wrap justify-content-center">
                    {
                    loading?
                    TipoDatos==='personaje' ?   
                        
                        Array.isArray(MisDatos) === true  && MisDatos.length !== 0 ?
                            MisDatos?.map((item, index)=>
                            <Link to={LinkDatos+item.id} key={index} className="AcardR" onClick={funcionCerrar}>
                                <div className='cardR'>
                                    <div  className='cardR-header'>
                                        <LazyLoadImage src={item.image} className=" rounded-circle" effect="blur" />
                                    </div>
                                    <div  className='cardR-body'>
                                        <div className="cardR-body-nombre text-truncate px-2">{item.name}</div>
                                        <span><strong>Estado: </strong>{item.status}</span>
                                        <span><strong>Especie: </strong>{item.species}</span>
                                    </div>
                                </div>   
                            </Link>
                            )
                        :
                        <div className='d-flex flex-column align-items-center'>
                            <strong className='fs-5 text-center' id='texto'>
                                Intenta buscar un {TipoDatos===''? 'nombre': TipoDatos} que exista
                                </strong>    
                            <i className="bi bi-emoji-neutral fs-2 tituloIcon"></i>
                        </div>
                    :TipoDatos==='episodio' ?
                        
                        Array.isArray(MisDatos) === true  && MisDatos.length !== 0 ?
                            MisDatos?.map((item, index)=>
                            <Link to={LinkDatos+item.id} key={index} className="AcardR" onClick={funcionCerrar}>
                                <div className='cardR'>
                                    <div  className='cardR-header'>
                                        <LazyLoadImage src="/img/logo-azul.svg" className=" rounded-circle" effect="blur" />
                                    </div>
                                    <div  className='cardR-body'>
                                        <div className="cardR-body-nombre text-truncate px-2">{item.name}</div>
                                        <span><strong>Episodio: </strong>{item.episode}</span>
                                    </div>
                                </div>   
                            </Link>
                            )
                        :
                        <div className='d-flex flex-column align-items-center'>
                            <strong className='fs-5 text-center' id='texto'>
                                Intenta buscar un {TipoDatos===''? 'nombre': TipoDatos} que exista
                                </strong>    
                            <i className="bi bi-emoji-neutral fs-2 tituloIcon"></i>
                        </div>
                    
                    :
                        Array.isArray(MisDatos) === true  && MisDatos.length !== 0 ?
                            MisDatos?.map((item, index)=>
                                <div className='cardR' key={index}>
                                    <div  className='cardR-header'>
                                        <span className='Resident' id='texto'><strong>{item.id}</strong></span>
                                    </div>
                                    <div  className='cardR-body pt-0'>
                                        <div className="cardR-body-nombre text-truncate px-2">{item.name}</div>
                                        <span><strong>Tipo: </strong>{item.type}</span>
                                        <span>
                                            <strong>Residentes: </strong>
                                            {                                                
                                                <strong className='fs-5'>{item.residents.length}</strong>
                                            }
                                        </span>
                                    </div>
                                </div>   
                            )
                        :
                        <div className='d-flex flex-column align-items-center'>
                            <strong className='fs-5 text-center' id='texto'>
                                Intenta buscar un {TipoDatos===''? 'nombre': TipoDatos} que exista
                                </strong>    
                            <i className="bi bi-emoji-neutral fs-2 tituloIcon"></i>
                        </div>
                    
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

export default HeadeBuscarModal