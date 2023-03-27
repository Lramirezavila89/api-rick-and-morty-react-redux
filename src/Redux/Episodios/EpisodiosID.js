//slice Lista Detalles

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const EposodiosIDSlice = createSlice({
  name: 'EpisodiosID',
  initialState: {
    ObjetosEpisodiosID: [],
    ObjetosEpisodiosIDCharacters:[],
    Load: false,

  },
  reducers: {
    EpisodiosIDReducers : (state, action)=>{
      state.ObjetosEpisodiosID = action.payload
    },
    EpisodiosIDCharactersReducers : (state, action)=>{
      state.ObjetosEpisodiosIDCharacters = action.payload
    },
    LoadReducers : (state, action)=>{
      state.Load = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { EpisodiosIDReducers,EpisodiosIDCharactersReducers, LoadReducers} = EposodiosIDSlice.actions
export default EposodiosIDSlice.reducer



export const EpisodiosIDApi = (id) => (dispatch) =>{
        axios
        .get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then((response)=>{
          //console.log(response.data, idE)
          dispatch(EpisodiosIDReducers(response.data))  
          dispatch(LoadReducers(true))
        })
        .catch((error)=>{
            console.log(error)
        })
  
}

