//react
import React,{Fragment} from 'react'

//Params
import { useParams } from 'react-router-dom'


//importaciones
import Header from '../Header/Header'
import VerEpisodiosId from './VerEpisodiosId'
import VerEpisodiosTodos from './VerEpisodiosTodos'


function Espisodios() {

        //Params
        let idE = useParams().idE
   

        return (
        <Fragment>
            <Header/>
            <div  className='container'>
                {
                    idE 
                    ?
                    <VerEpisodiosId/>
                    :
                    <VerEpisodiosTodos/>
                }
            </div>
        </Fragment>
        )
}

export default Espisodios