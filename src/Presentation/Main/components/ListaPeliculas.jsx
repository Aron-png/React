import CardPelicula from "./CardPelicula"

function ListaPeliculas(props){
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
        El proble con esto es que el md-6 suma mas de 12. Yo deseo que luego de 2, creee otro div:
      
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
    const listarow = []//Lista de filas
    let listacol = []//Lista de columnas
    //la funcion map ejecuta la funcion en cada elemento de la lista de manera PARALELA
    //En for seria secuencial. PERO el forEach() funciona de manera a map pero se ejecuta de forma //
    //SECUENCIAL
    props.peliculas.forEach(function(pelicula, index){
        if(index % 2 === 0){//indices pares, para que cada que 2 "col" se cree un "row" 
            //lo que te permite el ` es convertirle en un String. AltGr y teclado al costado de enter
            
            listacol.push(
                <div className="col-md-6">
                    <CardPelicula key={pelicula.id} peli={pelicula}/>
                    </div>
            )
        }else{
            listacol.push(
                <div className="col-md-6"><CardPelicula peli={pelicula}/></div>
            )
            listarow.push(
                <div className="row">{ listacol }</div>
            )
            listacol = []
        }
    })
    //Como pinta de 2 e 2, Si el numero de peliculas es impar (faltara una pelicula por pintar)
    //Es por esto que ponemos:
    if(props.peliculas.length % 2 !== 0){
        listacol = []
        listacol.push(
            <div className="col-md-6"><CardPelicula key={props.pelicula.id} peli={props.peliculas[props.peliculas.length-1]} />
            </div>
        )
        listarow.push(
            <div className="row">{ listacol }</div>
        )
    }

    return <div>
        {
            listarow//Retornar lista filas
        }
    </div>
}
export default ListaPeliculas