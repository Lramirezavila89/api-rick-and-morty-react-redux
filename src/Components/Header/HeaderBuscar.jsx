//React
import React, { Fragment } from 'react'
import HeaderOscuro from '../Header/HeaderOscuro'
import HeadeBuscarModal from './HeadeBuscarModal'

function HeaderBuscar() {

  return (
    <Fragment>
        <div className="d-flex align-items-center" role="search" id='buscadorB' >
            <HeadeBuscarModal/>
            <HeaderOscuro/>
        </div>
    </Fragment>
  )
}

export default HeaderBuscar