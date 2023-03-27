import { configureStore } from '@reduxjs/toolkit'
import ListaReducers from './Personajes/Lista'
import DetallesListaReducers from './Personajes/DetallesLista'
import OscuridadReducers from './Header/Oscuro'
import EpisodiosReducers from './Episodios/TodosEpisodios'
import EpisodiosIDReducers from './Episodios/EpisodiosID'
import UbicacionReducers from './Ubicacion/MostrarUbicaciones'
import BuscadorReducers from './Header/Buscador'
import ResidentesReducers from './Ubicacion/ResidentesUbicacion'
import PersonajesEpisodioReducers from './Episodios/PersonajesEpisodios'

export default configureStore({
  reducer: {
    Personajes : ListaReducers,
    DetallesPersonaje: DetallesListaReducers,
    Oscuridad: OscuridadReducers,
    Episodios: EpisodiosReducers,
    EpisodiosID: EpisodiosIDReducers,
    Ubicaciones: UbicacionReducers,
    Buscador: BuscadorReducers,
    Residentes: ResidentesReducers,
    PersonajesEpisodios: PersonajesEpisodioReducers,
    //primero el nombre del slicer : luego el nombre cualquier que pusimos arriba en la import

  }, 
})
