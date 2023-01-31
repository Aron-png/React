import { useEffect} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import ListaPeliculas from "./components/ListaPeliculas"
{
    /*
    En conclucion: Se modifico todo esto para que cuando uno valla con el enlace
    /MainPage  me regrese a la pagina /LoginPage, como que diciendo que si o si
    debo registrarme para entrar.
    */
}
function MainPage(){ 
//Comentar todo, ctr+shift(flecha arriba)+p : luego pone comentario
     /*const listPeli = [
         {
             id : 1,
             nombre : "Avatar 2",
             url: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
         },
         {
             id : 2,
             nombre : "Jujutsu Kaisen",
             url: "https://es.web.img3.acsta.net/pictures/22/05/18/16/23/5993750.jpg"
         },
         {
             id : 3,
             nombre : "Cars",
             url: "https://lumiere-a.akamaihd.net/v1/images/og_cars_lightningmcqueenday_18244_4435f27a.jpeg?region=40,0,1120,630"
         }
     ]*/
    //Con el state podemos enviar un objeto javaScript y se guarda esta info
    //en la pagina (LoginPage), sino
    const obtenerPeliculas = function(){
        //Abre un canal de comunicacion con el servidor y realiza una peticion http
        //Ademas no te devuelve una lista de pelicula sino una promesa.
        //Una promesa de ejecucion, vamos a definir que se va ejecutar cuando termine su peticion
        //http
        fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=peliculas")
        //La funcion then te permite ejecutar el codigo cuando termine la peticion fetch.
        //then es una funcion asincrona, asique el console puede pintar antes o dsps.
        promesa.then(function (response){
            console.log("respuesta de servidor")
        })
        console.log("fin de la funcion obtener peliculas")
    }
    obtenerPeliculas()
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    {
        /* 
        hub
        Efecto secundario (ingles), es el efecto secundario de la primera renderizacion de tu
        codigo en otra palabras... 
        lo que este dentro de la funcion useEffect se ejecutara la primera vez que se renderice.
        Renderizar es pintar de manera grafica la pagina web pero en react simplemente es ejecutar
        el codigo.
        Necesitamos de esta funcion para evitar un esfuerzo computacional, sino lo pusieramos 
        nos sale un error en donde el mismo react nos recomienda utilizar esta funcion para
        utilizarlo.
        useEffect(function(){
        }, [])
        dentro de []= podemos hacer que el cod se renderice una vez mas cuando cambien algunas
        variables de estado que puede configurar en el mismo array.
        */
    }
    useEffect(function(){//useEffect explicado arriba
    //con location.state podemos acceder al objeto que se envia desde la pag LoginPage, q en este
    //caso el USUARIO, pero sino escribio nada ahi lo detectara como nulo
    //Tmb "podriamos" poner location.state.username pero no siempre tendra informacion
    //Porque puede haber el caso de que alguien ponga ../main y enter (se produce un error)
    //y aunque pongamos location.state.username==null -> hacer esto (tmb se produce error)
    //la manera correcta es evaluar SOLO el estado
        if(location.state == null){
        navigate("/")
        }
    },[])

    /* Operador Ternario:
        Es una "Expresion" = bloque de codigo que va a devolver un valor.
        <condicion>?<si_es_true>:<si_es_false>
        return location.state !== null ? <div>Main Page: {location.state.username}</div>:<div></div>
        A diferencia de los "if", no de vuelve ningun valor.
    */

    //con location.state podemos acceder al objeto que se envia desde la pag LoginPage
    //Aca el div vacio no importa porque rapidamente lo enviara a "/", pero si pasa por aqui
    //aunque es casi imperseptible. 
    
    //En vez de esos <div> en true deberia ir lo siguiente
    //<ListaPeliculas peliculas = {ListaPeliculas}/>
    //O podemos usar esto
    //Main Page: {location.state.username}
     return location.state !== null?
     <div><ListaPeliculas peliculas = {[]}/></div> : <div></div> 

}


export default MainPage
