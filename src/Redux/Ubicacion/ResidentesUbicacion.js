//slice Lista residentes

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const residentesSlice = createSlice({
  name: 'Residentes',
  initialState: {
    arrayresidentes : [],
    Load: false,


  },
  reducers: {
    residentesReducers : (state, action)=>{
      state.arrayresidentes = action.payload
    },
    LoadReducers : (state, action)=>{
      state.Load = action.payload
    },
    
  },
})


// Action creators are generated for each case reducer function
export const { residentesReducers, LoadReducers} = residentesSlice.actions
export default residentesSlice.reducer



export const residentesApi = (numero) => async (dispatch) =>{
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
    dispatch(residentesReducers(arr))
    dispatch(LoadReducers(true))

}