import React, { Fragment } from 'react'
import HeaderBuscar from '../Header/HeaderBuscar'
import HeaderLogo from '../Header/HeaderLogo'
import HeaderMenu from '../Header/HeaderMenu'
import ScrollToTop from "react-scroll-to-top";




function Header() {
  
  
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg shadow-sm fondo ">
            <div className="container-fluid">
                    <HeaderLogo/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <HeaderMenu/>
                    <HeaderBuscar/>
                </div>
            </div>
        </nav>
        <ScrollToTop smooth />
    </Fragment>
  )
}

export default Header