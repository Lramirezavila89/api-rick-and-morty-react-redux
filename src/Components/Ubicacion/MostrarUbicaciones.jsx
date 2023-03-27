//React
import React,{Fragment, useEffect,useState} from 'react'

//Redux
import { useDispatch,useSelector } from 'react-redux'
import { ubicacionesApi} from '../../Redux/Ubicacion/MostrarUbicaciones'
import Loading from '../Loading'
import Residentes from './Residentes'

function MostrarUbicaciones({enviarRango}) {
    //hooks
    const [loading, setLoading] = useState(false)

    //Redux
    const { arrayUbicaciones,Load } = useSelector(state => state.Ubicaciones) //traigo lo del slice
    const dispatch = useDispatch()

    //array id residentes
    let arr = []
    arrayUbicaciones.residents?.map((i, index)=>
        arr.push(i.replace(/[^0-9]+/g, ""))
    )

    //useEffect
    useEffect(() => {
        dispatch(ubicacionesApi(enviarRango))  
        setLoading(Load)
    }, [enviarRango, Load])


  return (
    <Fragment>
       
        <div className="container text-center" id='texto'>
        { loading ?
            <div className="row g-2" id='uw-datos'>
                <div className="col-6">
                    <div className="p-3 fz-15px"><strong>Nombre:</strong>{arrayUbicaciones.name}</div>
                </div>
                <div className="col-6">
                    <div className="p-3 fz-15px"><strong>Tipo: </strong>{arrayUbicaciones.type}</div>
                </div>
                <div className="col-6">
                    <div className="p-3 fz-15px"><strong>Dimensión: </strong>{arrayUbicaciones.dimension}</div>
                </div>
                <div className="col-6">
                    <div className="p-3 fz-15px"><strong>Creación: </strong>{arrayUbicaciones.created}</div>
                </div>
            </div>
            :
            <Loading/>
        }
        </div>
        <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Residentes</p>
        <div className='w-75 d-flex flex-row flex-wrap justify-content-center'>

          <Residentes array={arr}/>
  
        </div>

    </Fragment>
  )
}

export default MostrarUbicaciones