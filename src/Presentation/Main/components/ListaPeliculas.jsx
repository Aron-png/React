import CardPelicula from "./CardPelicula"

function ListaPeliculas(props) {
    {
        /*
                                             El codigo:
        return <div className="row">
        {
        props.peliculas.map(function(pelicula){
            <div className="col-md-6">
            <CardPelicula/>
        </div>
        })
    }
    </div>
                                              Lo interpretaria asi:
    <div className="row">
        <div className="col-md-6">
            <CardPelicula/>
        </div>
        <div className="col-md-6">
            <CardPelicula/>
        </div>
        <div className="col-md-6">
            <CardPelicula/>
        </div>
    </div>
        El problema con esto es que el md-6 suma mas de 12. Yo deseo que luego de 2, creee otro div:
      
    <div className="row">
        <div className="col-md-6">
            <CardPelicula/>
        </div>
        <div className="col-md-6">
            <CardPelicula/>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6">
            <CardPelicula/>
        </div>
        <div className="col-md-6">
            <CardPelicula/>
        </div>
    </div>
      
        */
    }
    const listaRows = []//Lista de filas
    let listaCols = []//Lista de columnas
    //la funcion map ejecuta la funcion en cada elemento de la lista de manera PARALELA
    //En for seria secuencial. PERO el forEach() funciona de manera a map pero se ejecuta de forma //
    //SECUENCIAL
    props.peliculas.forEach(function(pelicula, index) {
        if (index % 2 === 0) {//indices pares, para que cada que 2 "col" se cree un "row" 
            //lo que te permite el ` es convertirle en un String. AltGr y teclado al costado de enter
            listaCols.push(
                <div className="col-md-6">
                    {
                        //El key es necesario para q no salga un warning(advertencia y no error).
                    }
                    <CardPelicula key={ pelicula.id } pelicula={ pelicula }/>
                </div>
            )
        } else {
            listaCols.push(
                <div className="col-md-6">
                    <CardPelicula key={ pelicula.id } pelicula={ pelicula } />
                </div>
            )
            listaRows.push(
                <div className="row">
                    { listaCols }
                </div>
            )
            listaCols = []
        }
    })
    //Como pinta de 2 e 2, Si el numero de peliculas es impar (faltara una pelicula por pintar)
    //Es por esto que ponemos:
    if (props.peliculas.length % 2 !== 0) {
        listaCols = []
        listaCols.push(
            <div className="col-md-6">
                <CardPelicula key={ props.peliculas[props.peliculas.length - 1].id } 
                    pelicula={ props.peliculas[props.peliculas.length - 1] }/>
            </div>
        )
        listaRows.push(
            <div className="row">
                { listaCols }
            </div>
        )
    }

    return <div>
        {
            listaRows//Retornar lista filas
        }
    </div>
    
}

export default ListaPeliculas