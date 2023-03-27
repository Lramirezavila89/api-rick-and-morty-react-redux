import React, { Fragment } from 'react'

function BodyCuerpo1() {
  return (
    <Fragment>
        <div className="container mb-5 ">
            <p className="fs-2 w-100 text-center my-5 py-3 fw-bold" id='titulo'>Tecnologías utilizadas!</p>
            <div className='w-100 d-flex flex-row ' id='iw-100'>
                <div className="w-50 d-flex flex-row flex-wrap justify-content-center align-items-center" id='iw-50'>
                    <a className='tecnology w-25' href="https://es.reactjs.org/" target="_blank" id='iw-25'>
                        <div className="mx-2 w-100 d-flex flex-column align-items-center">
                            <img width="110" height="110" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" className="img-fluid" />
                            <div className="card-body mt-2">
                                <p className="card-text fw-bold fs-4 text-center" id='subtitulo'>React</p>
                            </div>
                        </div>
                    </a>

                    <a className='tecnology w-25' href="https://react-redux.js.org/" target="_blank" id='iw-25'>
                    <div className="mx-2 w-100 d-flex flex-column align-items-center">
                        <img width="110" height="110" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" className="img-fluid" />
                        <div className="card-body">
                            <p className="card-text fw-bold fs-4 text-center" id='subtitulo'>Redux</p>
                        </div>
                    </div>
                    </a>

                    <a className='tecnology w-25' href="https://reactrouter.com/en/main" target="_blank" id='iw-25'>
                    <div className="mx-2 w-100 d-flex flex-column align-items-center">
                        <svg id="logo" width="110" height="110"  viewBox="0 0 38 38" fill="none">
                            <path d="M13.582 20.41c-1.39 0-2.523-1.142-2.523-2.542s1.133-2.542 2.523-2.542c1.39 0 2.523 1.142 2.523 2.542 0 1.399-1.134 2.542-2.523 2.542zM7.524 25.457c-1.388-.003-2.518-1.15-2.514-2.55a2.537 2.537 0 012.532-2.534c1.389.003 2.519 1.15 2.514 2.551a2.538 2.538 0 01-2.532 2.533zM30.486 25.457a2.538 2.538 0 01-2.543-2.523c-.007-1.402 1.118-2.553 2.505-2.56a2.538 2.538 0 012.542 2.522c.008 1.401-1.118 2.553-2.504 2.561z" fill="currentColor"></path>
                            <path d="M25.757 15.474c-.686-.214-1.419-.303-2.138-.381-1.112-.12-1.555-.554-1.743-1.668-.106-.622-.254-1.26-.523-1.825-.513-1.075-1.715-1.557-2.922-1.282-1.02.233-1.867 1.248-1.914 2.29-.054 1.188.626 2.203 1.794 2.553.555.167 1.145.25 1.724.293 1.063.077 1.418.394 1.705.878.182.306.357.607.357 1.517 0 .911-.177 1.212-.357 1.517-.287.484-.642.8-1.705.879-.58.042-1.17.126-1.724.293-1.168.351-1.848 1.364-1.794 2.554.047 1.041.895 2.056 1.914 2.289 1.207.276 2.409-.207 2.922-1.282.27-.564.417-1.203.523-1.825.189-1.114.632-1.547 1.743-1.668.72-.078 1.452-.168 2.138-.382 1.041-.325 1.667-1.296 1.667-2.375 0-1.078-.626-2.048-1.667-2.375z" fill="#F44250"></path>
                        </svg>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-4 text-center" id='subtitulo'>Router</p>
                        </div>
                    </div>
                    </a>

                   
                </div>
                

                <div className="w-50 d-flex flex-row flex-wrap justify-content-center align-items-center" id='iw-50'>

                    <a className='tecnology w-25' href="https://rickandmortyapi.com/" target="_blank" id='iw-25'>
                    <div className="mx-2 w-100 d-flex flex-column align-items-center ">
                        <div className="rickyIcon mb-2"></div> 
                        <div className="card-body">
                            <p className="card-text fw-bold fs-4 text-center" id='subtitulo'>Api Rest</p>
                        </div>
                    </div>
                    </a>

                    <a className='tecnology w-25' href="https://getbootstrap.com/" target="_blank" id='iw-25'>
                    <div className="mx-2 w-100 d-flex flex-column align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" className="my-1 bootstrapIcon" viewBox="0 0 118 94" role="img"><title>Bootstrap</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path>
                        </svg>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-4 text-center" id='subtitulo'>Bootstrap</p>
                        </div>
                    </div>
                    </a>

                    <a className='tecnology w-25' href="https://es.wikipedia.org/wiki/CSS" target="_blank" id='iw-25'>
                    <div className="mx-2 w-100 d-flex flex-column align-items-center">
                    <svg className='cssIcon' xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M64,32,99,435.22,255.77,480,413,435.15,448,32ZM354.68,366.9,256.07,395l-98.46-28.24L150.86,289h48.26l3.43,39.56,53.59,15.16.13.28h0l53.47-14.85L315.38,265H203l-4-50H319.65L324,164H140l-4-49H376.58Z" fill="blue"></path></svg>
                        <div className="card-body">
                            <p className="card-text fw-bold fs-4 text-center" id='subtitulo'>CSS</p>
                        </div>
                    </div>
                    </a>


                </div>
            </div>

           
        </div>
        <div className='w-100 py-2 text-center tituloCambio'>© 2023, 💻 con <span className='text-danger'>❤</span> by Luis Enrique Ramirez Avila.</div>
        <div className='w-100 pb-4 text-center tituloCambio'>
            <a className='tituloCambio' href="https://github.com/Lramirezavila89" target="_blank">
            https://github.com/Lramirezavila89
            </a>
            
        </div>

    </Fragment>
  )
}

export default BodyCuerpo1