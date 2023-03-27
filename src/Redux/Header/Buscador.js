import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const BuscadorSlice = createSlice({
    name: 'Buscador',
    initialState: {
        MisDatos: [],
        LinkDatos: '',
        TipoDatos: '',
        Load: true

    },
    reducers:{
            datosReducers : (state,action) =>{
                state.MisDatos = action.payload
            },
            linkReducers : (state,action) =>{
                state.LinkDatos = action.payload
            },
            tipoReducers : (state,action) =>{
                state.TipoDatos = action.payload
            },
            LoadReducers : (state,action) =>{
                state.Load= action.payload
            },
    },
})


export const { datosReducers,linkReducers, tipoReducers, LoadReducers} = BuscadorSlice.actions
export default BuscadorSlice.reducer


export const BuscadorApi = (datos) => (dispatch)=>{
    //console.log(datos)

    datos.tipo==='Personajes'
    ?
    axios
        .get(`https://rickandmortyapi.com/api/character/?name=${datos.nombre}`)
        .then((response)=>{
            dispatch(datosReducers(response.data.results))
            dispatch(linkReducers('/Personajes/detalles/'))
            dispatch(tipoReducers('personaje'))
            dispatch(LoadReducers(true))
        })
        .catch((error)=>{
            dispatch(datosReducers([])) 
        })
    
    :datos.tipo==='Episodios'
    ?
    axios
        .get(`https://rickandmortyapi.com/api/episode/?name=${datos.nombre}`)
        .then((response)=>{
            dispatch(datosReducers(response.data.results))
            dispatch(linkReducers('/Episodios/'))
            dispatch(tipoReducers('episodio'))
            dispatch(LoadReducers(true))
        })
        .catch((error)=>{
            dispatch(datosReducers([])) 
        })
    :datos.tipo==='Ubicacion'?
    //console.log('U')
    axios
        .get(`https://rickandmortyapi.com/api/location/?name=${datos.nombre}`)
        .then((response)=>{
            dispatch(datosReducers(response.data.results))
            dispatch(linkReducers(''))
            dispatch(tipoReducers('ubicación'))
            dispatch(LoadReducers(true))
        })
        .catch((error)=>{
            dispatch(datosReducers([])) 
        })
    :
    //si no manda nada, es decir, por defecto

    axios
        .get(`https://rickandmortyapi.com/api/character/?name=${datos.nombre}`)
        .then((response)=>{
            dispatch(datosReducers(response.data.results))
            dispatch(linkReducers('/Personajes/detalles/'))
            dispatch(tipoReducers('personaje'))
        })
        .catch((error)=>{
            dispatch(datosReducers([])) 
        })


}