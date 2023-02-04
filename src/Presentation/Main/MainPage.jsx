import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Filtro from "./components/Filtro"
import ListaPeliculas from "./components/ListaPeliculas"
{
    /*
    En conclucion: Se modifico todo esto para que cuando uno valla con el enlace
    /MainPage  me regrese a la pagina /LoginPage, como que diciendo que si o si
    debo registrarme para entrar. Ademas se pueda filtrar peliculas por categoria.
    */
}

function MainPage() {
    {
        /*
    const listaPeliculas = [
        {
            id : 1,
            nombre : "Avatar 2",
            url: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
        },
        {
            id : 2,
            nombre : "Morbius",
            url: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/morbius_onesheet_1400x2100_he.jpg?itok=-jQVkWIe"
        }
    ]
        */
    }
    // Variable de estado
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])
    //Lo que yo quiero es q luego de ejecutar la funcion obtenerPeliculassAsyncAwait
    //Quiero q listaPeliculas sea la data que envia el servidor. setListaCategorias(data).
    //En el return pasara como variable a la pagina "ListaPeliculas".

    //ya no necesito obtenerPeliculas porque fue reemplazado por filtrarPelicula
    const obtenerPeliculas = function(){
        //                             El fetch
        /*
        Abre un canal de comunicacion con el servidor y realiza una peticion http
        Es decir, puede recibir o enviar data al servidor, pero no se cuanto tiempo
        Se va a demorar este proceso... por eso es asincrona, para que nuestro cod
        No se quede esperando sin hacer nada. 
        Dentro de la funciona esta la direccion en donde quiero hacer la peticion http
        El link devuelve String de listaPeliculas
        Ademas no te devuelve una lista de pelicula sino una promesa.
        "Todas las funciones que te devuelvan un objeto promesa son fuciones asincronas".
        */
        const promesa = fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=peliculas")
        
        //Una promesa de ejecucion, una funcion que vamos a definir que se va ejecutar 
        //cuando termine de realizarse la peticion fetch
        promesa.then(function (response){
        //La funcion then te permite ejecutar el codigo cuando termine la peticion fetch.
        //then es una funcion asincrona, asique el console puede pintar antes o dsps.
            console.log("respuesta de servidor", response)
            //Cuando vemos "response" en la consola esta en un flujo de datos que no se puede 
            //ENTENDER
            //Para acceder o traducir a la respuesta del servidor...
            //METODO 1:
            const promesaResponse=response.text()//El text() tmb es asincrona
            //El text() = al terminar la funcion, va a recibir un String como data de entrada
            promesaResponse.then(function(data){
                console.log("Respuesta del servidor:", data)//Respuesta del servidor traducida
                //Pero esta en Strgin
                const dataJ = JSON.parse(data)//Convertir de String a objeto
                console.log("Respuesta en objeto:",dataJ)
            }
            )
            //METODO 2:
            
            //Es un atajo para obtener la respuesta del servidor como un objeto javaScript
            //La funcion json devuelve cualquier objeto de javaScript
            
                const promesaResponse2=response.join()
                promesaResponse2.then(function(data){
                    //La data al ser un objeto, ya no necesita del "".parse"
                    console.log("Respuesta del servidor:", data)
                }
                )
            //Cuando SALE ERROR:
            promesaResponse.cath(function(err){
                console.error("Error de comunicacion")
            })
            
        })
        console.log("fin de la funcion obtener peliculas")
    }
    /*
    Cuando llamamos a funciones asíncronas una después de la otra varias veces se genera 
    el triángulo de la muerte(Tener 2 funciones esta bien, pero mas NO):
    Esto hace que el código se vuelva menos libre, mayor carga computacional.
    Es por esto que se crreo el "async" y "await", para obetener la respuesta del servidor
    de forma directa. El "async" y "await" van de la mano, si no se usan en simultanea sale
    error.
    */
   /*
    //                   ESTA FUNCION reemplaza a obtenerPeliculas
        
    const obtenerPeliculassAsyncAwait = async function() {
//async sirve para avisarle al navegador que sera una funcion Asincrona
            const response = await fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=categorias")
            const data = await response.json()
            setListaCategorias(data)
//Con el await(esperar), se convierte una funcion Asincrona en una funcion Sincrona x asi decirlo, 
//va a la respuesta del servidor para continuar con e codigo.
//Aqui las funciones asincronas son el fetch y json.
    }
    */
   //Obtener lista de categorias
    const obtenerCategoriasAsyncAwait = async function() {
        try {
            const response = await fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=categorias")
            const data = await response.json()//Se obtiene la data en forma de objeto
            setListaCategorias(data)//Variable de estado
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }
    //Obtener lista de peliculas filtradas por categoria
    const filtrarPelicula = async function (categoriaId) {
        try {
            const response = await fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=peliculas")
            const data = await response.json()//Recojo el objeto, lista de peliculas
            let peliculas = data;
            //Si la categoria id es -1, me devuelve toda la lista porque no pasa por el filtrado
            if (categoriaId != -1) {
                //filter recibe una funcion predicado = que devuelve true o false.
                //filter es como un map, si la funcion devuelve true ese elemento se va a mantener.
                peliculas = data.filter(function(pelicula) {
                    //Si el argumento de entrada (un id) es igual al id de la pelicula.
                    return pelicula.categoria == categoriaId
                })
            }
            //Ahora la pelicula filtrada por categoria ira a Variable de estado
            //Aunque si no cumple el "if", sera todo la lista de peliculas
            setListaPeliculas(peliculas)
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }

    const location = useLocation()

    const navigate = useNavigate()

    // Funcion que se renderizara (ejecutara en react) solo la primera vez
    //Por renderizar en javaScript es pintar lo que hay en la pantalla
    {
        /* 
                                        useEffect
        Efecto secundario (ingles), es el efecto secundario de la primera renderizacion de tu
        codigo en otra palabras.. las demas lineas de codigo actuaran segun
        a lo que responda el useEffect.
        Si no se aplica esto, la lineas de cod que se necesita ejecutar una vez producira
        errores. 
        dentro de []= podemos hacer que el cod se renderice una vez mas cuando cambien algunas
        variables de estado que puede configurar en el mismo array.
        */
    }
    useEffect(function() {
        if (location.state == null) {
            navigate("/React_Aprender/")
    /*
    Con location.state podemos acceder al objeto que se envia desde la pag LoginPage, q en este
    caso el USUARIO, pero sino escribio nada ahi lo detectara como nulo
    Tmb "podriamos" poner location.state.username pero no siempre tendra informacion
    y aunque pongamos location.state.username==null -> hacer esto (tmb se produce error)
    la manera correcta es evaluar SOLO el estado
    Todo esto para que cuando uno intente poner el link defrente sin registrarse
     no te salga error sino te devuelva a la pagina para registrarse 
    */
        }else {
            //Por defecto al cargar toda la pagina se cargara un selector de categorias y todas las 
            //peliculas (Si la categoria id es -1, me devuelve toda la lista xq no pasa por filtrado)

            obtenerCategoriasAsyncAwait()//Se ejecuta 2 veces el obtener Categorias, x defecto
            //No significa que este mal aunque se este utilizando el useEffect
            filtrarPelicula(-1)
        }
        
    }, [])//Si no lo pongo los corchetes esta funcion se llama de manera indefinida
    {
        /* Operador Ternario:
            Es una "Expresion" = bloque de codigo que va a devolver un valor.
            <condicion>?<si_es_true>:<si_es_false>
            return location.state !== null ? <div>Main Page: {location.state.username}</div>:<div></div>
            A diferencia de los "if", no de vuelve ningun valor.
        */
    }
        //con location.state podemos acceder al objeto que se envia desde la pag LoginPage
        //Aca el div vacio no importa porque rapidamente lo enviara a "/", pero si pasa por aqui
        //aunque es casi imperseptible. 
        
        //                   PARA CAMBIAR DE FUNCIONALIDAD, lo siguiente:
        //<div> en true deberia ir lo siguiente
        //<div>Main Page: { location.state.username }</div>

        //container: para que no este pegadito los lados

    return location.state !== null 
        ? <div className="container">
            {
                //Se pasara con un props. las siguientes funciones
            }
            <Filtro 
                categorias={ listaCategorias }
                onFiltrar={ filtrarPelicula } />
            <ListaPeliculas 
                peliculas={ listaPeliculas } />
        </div>
        : <div></div>//div vacio

}

export default MainPage