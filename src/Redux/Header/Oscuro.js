//slice tema oscuro/claro

import { createSlice } from '@reduxjs/toolkit'

export const oscuridadSlice = createSlice({
  name: 'Oscuridad',
  initialState: {
    estado : false, 
    tema: 'light'
  },
  reducers: {
    estadoReducers : (state, action)=>{
        state.estado = action.payload
    },
    temaReducers : (state, action)=>{
        state.tema = action.payload
      },
  },
})


export const { estadoReducers, temaReducers} = oscuridadSlice.actions
export default oscuridadSlice.reducer


export const cambio = (check) => (dispatch) =>{
    //console.log(check)
    dispatch(temaReducers(check=== true ? 'dark' :'light'))
    dispatch(estadoReducers(check === true ? true : false))

}