import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function HeaderLogo() {
  return (
    <Fragment>
        <Link className="navbar-brand" to={'/'}><div className='my-logo'></div></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    
    </Fragment>
    
  )
}

export default HeaderLogo