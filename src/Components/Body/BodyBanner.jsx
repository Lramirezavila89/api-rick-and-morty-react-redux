//React
import React, { Fragment } from 'react'

//Lazy
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function BodyBanner() {
  return (
    <Fragment>
        <div className=" container banner">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <div className='carousel-item-img'>
                        <LazyLoadImage 
                            src="banner/004.jpg"
                            effect="blur"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='carousel-titulo'>Gracias!</h5>
                        <p>Api Rick and Morty</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <div className='carousel-item-img'>
                        <LazyLoadImage 
                            src="banner/002.jpg"
                            effect="blur"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='carousel-titulo'>Episodios.</h5>
                        <p>+ de 200 episodios !.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <div className='carousel-item-img'>
                        <LazyLoadImage 
                            src="banner/003.jpg"
                            effect="blur"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='carousel-item-img'>
                        <LazyLoadImage 
                            src="banner/001.jpg"
                            effect="blur"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='carousel-titulo'>Personajes...</h5>
                        <p>Vivos!, Muertos!, Desconocidos !.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <i className="bi bi-arrow-left-circle-fill"></i>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
            </div>
        </div>
    </Fragment>
  )
}

export default BodyBanner