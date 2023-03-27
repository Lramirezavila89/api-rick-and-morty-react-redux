//React
import React, { Fragment,useEffect,useState } from 'react'
import VerTodos from './VerTodos'
import VerFiltro from './VerFiltro'


//Router
import { Link } from 'react-router-dom'

//Redux
import { useDispatch,useSelector } from 'react-redux'
import { EpisodiosOriginalApi  } from '../../Redux/Episodios/TodosEpisodios'
import Loading from '../Loading'


function VerEpisodiosTodos() {
    //hooks
    const [loading, setLoading] = useState(false)

    //redux
    const { ObjetosEpisodios, Load} = useSelector(state => state.Episodios)
    const dispatch = useDispatch()
    

    //useEffect
    useEffect(() => {
        dispatch(EpisodiosOriginalApi()) //funciona que trae la APi
        setLoading(Load) //funciona que trae la APi
        //eslint-disable-next-line react-hooks/exhaustive-deps 
    },[Load])

  return (
    <Fragment>
        <div className="container z-1 position-relative py-3">
            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Episodios</li>
                </ol>
            </nav>
            <div className='w-100 d-flex' id='ew-100'>
                <div className='w-25' id='ew-25'>
                    <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Filtro</p>
                    <VerFiltro/>
                </div>
                <div className="d-flex flex-wrap justify-content-center w-75" id='ew-75'>
                    <p className="fs-2 w-100 text-center mb-4 fw-bold" id='titulo'>Lista</p>
                    { loading ? <VerTodos arrayEpisodios={ObjetosEpisodios}/> : <Loading/>}
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default VerEpisodiosTodos