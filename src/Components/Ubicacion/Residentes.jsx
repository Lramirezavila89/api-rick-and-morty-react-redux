//React
import React, { Fragment,useEffect,useState } from 'react'

//Lazy
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//Redux
import { useDispatch,useSelector } from 'react-redux'
import { residentesApi} from '../../Redux/Ubicacion/ResidentesUbicacion'
import Loading from '../Loading'


function Residentes(props) {
//hooks
const [loading, setLoading] = useState(false)

//Redux
const { arrayresidentes, Load } = useSelector(state => state.Residentes) //traigo lo del slice
const dispatch = useDispatch()


useEffect(() => {
 dispatch(residentesApi(props.array))
 setLoading(Load)
}, [props.array, Load])


  return (
    <Fragment>
        {
          loading ?

          arrayresidentes.length ===0 ?
          <div className='w-100 d-flex flex-column align-items-center'>
            <Loading />
            <div className='d-flex flex-column align-items-center text-center'>
                          <strong className='fs-5 text-center' id='texto'>Buscando residentes para la ubicación</strong>    
                          <i className="bi bi-emoji-neutral fs-2 tituloIcon"></i>
            </div>
          </div>
            
          :
          arrayresidentes?.map((item, index)=>
              <div className='cardR'  key={item.id}>
                <div  className='cardR-header'>
                    <LazyLoadImage src={item.image} className=" rounded-circle" effect='blur'/>
                </div>
                <div  className='cardR-body'>
                    <div className="cardR-body-nombre text-truncate px-2">{item.name}</div>
                    <span><strong>Estado: </strong>{item.status}</span>
                    <span><strong>Especie: </strong>{item.species}</span>
                </div>
              </div>  
          )
          :
          <Loading/>
          
        }
    </Fragment>
  )
}

export default Residentes