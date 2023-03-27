//slice Lista Personajes

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const PersonajesSlice = createSlice({
  name: 'Personajes',
  initialState: {
    arrayPersonajes : [],
    load: false
  },
  reducers: {
    PersonajeReducers : (state, action)=>{
      state.arrayPersonajes = action.payload
    },
    LoadReducers : (state, action)=>{
      state.load = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { PersonajeReducers, LoadReducers} = PersonajesSlice.actions
export default PersonajesSlice.reducer



export const PersonajesApi = (url) => (dispatch) =>{
  axios
    .get(url)
    .then((response)=>{
      //console.log(response.data.results)
         dispatch(PersonajeReducers(response.data.results))
         dispatch(LoadReducers(true))
    })
    .catch((error)=>{
        dispatch(PersonajeReducers([])) 
    })
}