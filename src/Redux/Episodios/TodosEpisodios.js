//slice Lista Detalles

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const DetalleEposodiosSlice = createSlice({
  name: 'Episodios',
  initialState: {
    ObjetosEpisodios: [],
    Load: false
  },
  reducers: {
    EpisodiosReducers : (state, action)=>{
      state.ObjetosEpisodios = action.payload
    },
    LoadReducers : (state, action)=>{
      state.Load = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { EpisodiosReducers,LoadReducers} = DetalleEposodiosSlice.actions
export default DetalleEposodiosSlice.reducer



export const EpisodiosOriginalApi = (idE) => (dispatch) =>{
  
    idE ?
        axios
        .get(`https://rickandmortyapi.com/api/episode/${idE}`)
        .then((response)=>{
          //console.log(response.data, idE)
          dispatch(EpisodiosReducers(response.data))  
          dispatch(LoadReducers(true))
        
        })
        .catch((error)=>{
            console.log(error)
        })

    :
        axios
            .get(`https://rickandmortyapi.com/api/episode/`)
            .then((response)=>{
              dispatch(EpisodiosReducers(response.data.results))
              dispatch(LoadReducers(true))

            })
            .catch((error)=>{
                console.log(error)
            })

    
  
}

