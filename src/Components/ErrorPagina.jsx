import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header'

function ErrorPagina() {
  return (
    <Fragment>
      <Header/>
      <h1>Error 404</h1><h3>No existe la pagina</h3>
      <Link to={'/'}>Volver al inicio</Link>
    </Fragment>
  )
}

export default ErrorPagina