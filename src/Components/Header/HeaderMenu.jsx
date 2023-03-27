import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function HeaderMenu() {
  return (
    <Fragment>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to={'/'}>Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/Personajes'}>Personajes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/Episodios'}>Episodios</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to={'/Ubicacion'}>Ubicación</NavLink>
        </li>
        
      </ul>
      
    </Fragment>
  )
}

export default HeaderMenu