//slice Lista personajesEpi

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const personajesEpiSlice = createSlice({
  name: 'PersonajesEpisodios',
  initialState: {
    arraypersonajesEpi : [],
    Load: false,


  },
  reducers: {
    personajesEpiReducers : (state, action)=>{
      state.arraypersonajesEpi = action.payload
    },
    LoadReducers : (state, action)=>{
      state.Load = action.payload
    },
    
  },
})


// Action creators are generated for each case reducer function
export const { personajesEpiReducers, LoadReducers} = personajesEpiSlice.actions
export default personajesEpiSlice.reducer



export const personajesEpiApi = (numero) => async (dispatch) =>{
  let arr = []
  for(let i of numero) {
     await axios
      .get(`https://rickandmortyapi.com/api/character/${i}`)
      .then((response)=>{
          let dat = response.data
          arr.push(dat)
      })
      .catch((error)=>{})
      
    }
    dispatch(personajesEpiReducers(arr))
    dispatch(LoadReducers(true))

}