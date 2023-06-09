//slice Lista ubicaciones

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const ubicacionesSlice = createSlice({
  name: 'Ubicaciones',
  initialState: {
    arrayUbicaciones : [],
    Load: false


  },
  reducers: {
    UbicacionesReducers : (state, action)=>{
      state.arrayUbicaciones = action.payload
    },
    LoadReducers : (state, action)=>{
      state.Load = action.payload
    }
    
  },
})


// Action creators are generated for each case reducer function
export const { UbicacionesReducers, LoadReducers} = ubicacionesSlice.actions
export default ubicacionesSlice.reducer



export const ubicacionesApi = (numero) => (dispatch) =>{
    //console.log(numero)
    let url,dat
    url = `https://rickandmortyapi.com/api/location/${numero}`
    //console.log(url)
    axios
    .get(url)
    .then((response)=>{
         dat = response.data
        dispatch(UbicacionesReducers(dat))
        dispatch(LoadReducers(true))
    
    })
    .catch((error)=>{})
}
/*
export const residentesApi = (numero) => async (dispatch) =>{
 
    let payload = [
      {
        id: 38,
        name: 'Beth Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/51'
        ],
        url: 'https://rickandmortyapi.com/api/character/38',
        created: '2017-11-05T09:48:44.230Z'
      },
      {
        id: 45,
        name: 'Bill',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/45.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/3'
        ],
        url: 'https://rickandmortyapi.com/api/character/45',
        created: '2017-11-05T10:22:27.446Z'
      },
      {
        id: 71,
        name: 'Conroy',
        status: 'Dead',
        species: 'Robot',
        type: '',
        gender: 'unknown',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/71.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/22'
        ],
        url: 'https://rickandmortyapi.com/api/character/71',
        created: '2017-11-30T11:35:50.183Z'
      },
      {
        id: 82,
        name: 'Cronenberg Rick',
        status: 'unknown',
        species: 'Cronenberg',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Cronenberg Earth',
          url: 'https://rickandmortyapi.com/api/location/12'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/82.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/10'
        ],
        url: 'https://rickandmortyapi.com/api/character/82',
        created: '2017-11-30T14:28:54.596Z'
      },
      {
        id: 83,
        name: 'Cronenberg Morty',
        status: 'unknown',
        species: 'Cronenberg',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Cronenberg Earth',
          url: 'https://rickandmortyapi.com/api/location/12'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/83.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/10'
        ],
        url: 'https://rickandmortyapi.com/api/character/83',
        created: '2017-11-30T20:02:29.204Z'
      },
      {
        id: 92,
        name: 'Davin',
        status: 'Dead',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/92.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/6'
        ],
        url: 'https://rickandmortyapi.com/api/character/92',
        created: '2017-12-01T11:20:51.247Z'
      },
      {
        id: 112,
        name: 'Eric McMan',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/112.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/3'
        ],
        url: 'https://rickandmortyapi.com/api/character/112',
        created: '2017-12-26T13:40:06.005Z'
      },
      {
        id: 114,
        name: 'Ethan',
        status: 'unknown',
        species: 'Human',
        type: 'Cronenberg',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/114.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/3'
        ],
        url: 'https://rickandmortyapi.com/api/character/114',
        created: '2017-12-26T16:01:13.904Z'
      },
      {
        id: 116,
        name: 'Evil Beth Clone',
        status: 'Dead',
        species: 'Human',
        type: 'Clone',
        gender: 'Female',
        origin: {
          name: 'unknown',
          url: ''
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/116.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/5'
        ],
        url: 'https://rickandmortyapi.com/api/character/116',
        created: '2017-12-26T16:10:47.781Z'
      },
      {
        id: 117,
        name: 'Evil Jerry Clone',
        status: 'Dead',
        species: 'Human',
        type: 'Clone',
        gender: 'Male',
        origin: {
          name: 'unknown',
          url: ''
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/117.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/5'
        ],
        url: 'https://rickandmortyapi.com/api/character/117',
        created: '2017-12-26T16:11:15.395Z'
      },
      {
        id: 120,
        name: 'Evil Summer Clone',
        status: 'Dead',
        species: 'Human',
        type: 'Clone',
        gender: 'Female',
        origin: {
          name: 'unknown',
          url: ''
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/120.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/5'
        ],
        url: 'https://rickandmortyapi.com/api/character/120',
        created: '2017-12-26T16:24:02.059Z'
      },
      {
        id: 127,
        name: 'Frank Palicky',
        status: 'Dead',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/127.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1'
        ],
        url: 'https://rickandmortyapi.com/api/character/127',
        created: '2017-12-26T19:22:48.474Z'
      },
      {
        id: 155,
        name: 'Harold',
        status: 'Alive',
        species: 'Cronenberg',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/155.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/6'
        ],
        url: 'https://rickandmortyapi.com/api/character/155',
        created: '2017-12-29T15:41:18.773Z'
      },
      {
        id: 169,
        name: 'Jacob',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/169.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/15'
        ],
        url: 'https://rickandmortyapi.com/api/character/169',
        created: '2017-12-29T17:20:52.037Z'
      },
      {
        id: 175,
        name: 'Jerry Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/175.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/22'
        ],
        url: 'https://rickandmortyapi.com/api/character/175',
        created: '2017-12-29T18:07:17.610Z'
      },
      {
        id: 179,
        name: 'Jessica',
        status: 'Alive',
        species: 'Cronenberg',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/179.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/6'
        ],
        url: 'https://rickandmortyapi.com/api/character/179',
        created: '2017-12-29T18:34:37.806Z'
      },
      {
        id: 186,
        name: 'Joyce Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/186.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/3'
        ],
        url: 'https://rickandmortyapi.com/api/character/186',
        created: '2017-12-29T18:58:34.530Z'
      },
      {
        id: 201,
        name: 'Leonard Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/201.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/3'
        ],
        url: 'https://rickandmortyapi.com/api/character/201',
        created: '2017-12-30T12:51:27.835Z'
      },
      {
        id: 216,
        name: 'MC Haps',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/216.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/25'
        ],
        url: 'https://rickandmortyapi.com/api/character/216',
        created: '2017-12-30T14:30:06.479Z'
      },
      {
        id: 239,
        name: 'Mr. Goldenfold',
        status: 'Alive',
        species: 'Cronenberg',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/239.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/6'
        ],
        url: 'https://rickandmortyapi.com/api/character/239',
        created: '2017-12-30T17:42:11.894Z'
      },
      {
        id: 271,
        name: 'Principal Vagina',
        status: 'Alive',
        species: 'Cronenberg',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/271.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6'
        ],
        url: 'https://rickandmortyapi.com/api/character/271',
        created: '2017-12-31T14:08:43.602Z'
      },
      {
        id: 302,
        name: 'Ruben',
        status: 'Dead',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/302.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/3'
        ],
        url: 'https://rickandmortyapi.com/api/character/302',
        created: '2018-01-05T14:03:21.824Z'
      },
      {
        id: 303,
        name: 'Samantha',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/303.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/5'
        ],
        url: 'https://rickandmortyapi.com/api/character/303',
        created: '2018-01-05T14:09:03.150Z'
      },
      {
        id: 338,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/338.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/22'
        ],
        url: 'https://rickandmortyapi.com/api/character/338',
        created: '2018-01-10T16:55:03.390Z'
      },
      {
        id: 343,
        name: 'Tammy Guetermann',
        status: 'Alive',
        species: 'Cronenberg',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/343.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6'
        ],
        url: 'https://rickandmortyapi.com/api/character/343',
        created: '2018-01-10T17:27:04.773Z'
      },
      {
        id: 356,
        name: 'Tom Randolph',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/356.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/3'
        ],
        url: 'https://rickandmortyapi.com/api/character/356',
        created: '2018-01-10T18:07:03.215Z'
      },
      {
        id: 394,
        name: 'Davin',
        status: 'Dead',
        species: 'Cronenberg',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/394.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/6'
        ],
        url: 'https://rickandmortyapi.com/api/character/394',
        created: '2018-01-20T19:48:42.201Z'
      }
    ]
    console.log(numero)
    numero.length ===0 
    ?
    dispatch(RedisentesReducers(payload))
    :
    dispatch(RedisentesReducers(numero))
}*/