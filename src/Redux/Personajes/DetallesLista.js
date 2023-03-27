//slice Lista Detalles

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const DetallePersonajesSlice = createSlice({
  name: 'DetallesPersonaje',
  initialState: {
    ObjetosPersonajes : [],
    ObjetosEpisodios: [],
    Load1: false,
    Load2: false,


  },
  reducers: {
    DetallePersonajeReducers : (state, action)=>{
      state.ObjetosPersonajes = action.payload
    },
    EpisodiosReducers : (state, action)=>{
      state.ObjetosEpisodios = action.payload
    },
    Load1Reducers : (state, action)=>{
      state.Load1 = action.payload
    },
    Load2Reducers : (state, action)=>{
      state.Load2 = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { DetallePersonajeReducers, EpisodiosReducers, Load1Reducers, Load2Reducers} = DetallePersonajesSlice.actions
export default DetallePersonajesSlice.reducer



export const DetallesPersonajesApi = (id) => (dispatch) =>{
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
      //console.log(response.data.results)
         dispatch(DetallePersonajeReducers(response.data))
         dispatch(Load2Reducers(true))

        
    })
    .catch((error)=>{
        console.log(error)
    })
}


export const EpisodiosApi = (id) => (dispatch) =>{
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
      //console.log(response.data.results)
         dispatch(EpisodiosReducers(response.data.episode))
         dispatch(Load1Reducers(true))
         
    })
    .catch((error)=>{
        console.log(error)
    })
}




