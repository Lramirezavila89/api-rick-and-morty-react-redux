//React
import React, { Fragment,useEffect,useState} from 'react'

//Lazy
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//Redux
import { useDispatch,useSelector } from 'react-redux'
import { personajesEpiApi} from '../../Redux/Episodios/PersonajesEpisodios'
import Loading from '../Loading'

function PersonajesEpisodio(props) {
    //hooks
    const [loading, setLoading] = useState(false)


    //Redux
    const { arraypersonajesEpi, Load } = useSelector(state => state.PersonajesEpisodios) //traigo lo del slice
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(personajesEpiApi(props.array))
      setLoading(Load)
    }, [props.array, Load])

    

    

  return (
    <Fragment>
        {
          loading
          ?
            arraypersonajesEpi.length ===0 ?
               <Loading/>  
            :
            arraypersonajesEpi?.map((item, index)=>
            <div className='cardR'  key={index}>
              <div  className='cardR-header'>
                  <LazyLoadImage src={item.image} className=" rounded-circle" effect='blur'/>
              </div>
              <div  className='cardR-body'>
                  <div className="cardR-body-nombre">{item.name}</div>
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

export default PersonajesEpisodio