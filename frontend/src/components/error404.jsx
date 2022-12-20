import React from 'react'
import("../css/error404.css");

function Error404() {
    return (
        <div>
            <h1 className='title-error'>Error Page 404</h1>
            <p class="zoom-area">La pagina que intentas buscar no existe</p>
            <section className="error-container">
                <span className="four"><span class="screen-reader-text">4</span></span>
                <span className="zero"><span class="screen-reader-text">0</span></span>
                <span className="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div className='div-btn'>
                <a href="/" className="btn">Vuelve al inicio</a>
            </div>
        </div>
    )
}

export default Error404