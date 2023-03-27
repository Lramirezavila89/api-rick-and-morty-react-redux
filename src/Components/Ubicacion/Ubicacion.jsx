//React
import React, { Fragment,useEffect } from 'react'
import Header from '../Header/Header'
import Rango from './Rango'
import MostrarUbicaciones from './MostrarUbicaciones'

//Router
import { Link } from 'react-router-dom'



function Ubicacion() {
    //Hooks
    const [rango, setRango] = React.useState(1)
    

    const RangoValor = (dato) =>{ 
        useEffect(() => {
            setRango(dato)
        }, [dato])
        
          
    }
  return (
    <Fragment>
        <Header/>
        <div className="container z-1 position-relative py-3">
            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Ubicación</li>
                </ol>
            </nav>

        
        
            <div className='w-100 d-flex flex-row' id='uw-100'>
                <div className='w-25' id='uw-25'>
                    <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Ubicación</p>
                    <Rango rangoValor={RangoValor}/>
                </div>
                <div className="w-75 d-flex flex-wrap flex-column align-items-center justify-content-center " id='uw-75'>
                    <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Descripción</p>
                    <MostrarUbicaciones enviarRango={rango}/>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Ubicacion