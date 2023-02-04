function CardPelicula(props) {
    //Si ponemos style acerlo asi: style={{ height }}
    //dentro del style recibe un objeto javaScript
    return <div className="card mb-3">
        <img src={ props.pelicula.url } 
            className="card-img-top img-fluid" 
            alt="..." />
        <div className="card-body">
            <h5 className="card-title">{ props.pelicula.nombre }</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
}

export default CardPelicula