//react
import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPagina from './Components/ErrorPagina';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/carousel'
import 'bootstrap/js/dist/toast'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/modal'





import './index.css'



//redux
import store from './Redux/store'
import { Provider } from 'react-redux'

//router
/*import { createBrowserRouter,RouterProvider,}  from "react-router-dom";*/
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Personajes from './Components/Personajes/Personajes';
import Detalles from './Components/Personajes/Detalles';
import Espisodios from './Components/Episodios/Espisodios';
import Ubicacion from './Components/Ubicacion/Ubicacion';
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPagina />,
  },
  {
    path: 'Personajes',
    element: <Personajes/>,
  },
  {
    path: 'Personajes/detalles/:id',
    element: <Detalles/>,
  
  },
  {
    path: 'Episodios',
    element: <Espisodios/>,
  
  },
  {
    path: 'Episodios/:idE',
    element: <Espisodios/>,
  
  },
  {
    path: 'Ubicacion',
    element: <Ubicacion/>,
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} /> 
  </Provider>

);
