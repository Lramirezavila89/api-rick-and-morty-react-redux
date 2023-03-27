//React
import React, { Fragment } from 'react'

//Redux
import { useDispatch } from 'react-redux'
import { EpisodiosOriginalApi  } from '../../Redux/Episodios/TodosEpisodios'

function VerFiltro() {

    //redux
    const dispatch = useDispatch()

    //creo un array de tamaño 51
    const rango = Array.from({length: 51}, (_, i) => i + 1)

    const Cambia = (e) =>{
        let id = e.target.value
        dispatch(EpisodiosOriginalApi(id))
    }

   
  return (
    <Fragment>
            <select className="classic"  onChange={Cambia}>
                    <option value="" defaultValue>Todos</option>
                            {
                            rango.map((item,index) =>
                                    <Fragment key={index}>
                                        <option value={item} >{item}</option>
                                    </Fragment>
                            )
                            }
            </select>
    </Fragment>
  )
}

export default VerFiltro

