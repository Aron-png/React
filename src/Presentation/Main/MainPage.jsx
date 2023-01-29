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
function MainPage() {
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
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    {
        /* 
        hub
        Efecto secundario (ingles), es el efecto secundario de la primera renderizacion de tu
        codigo en otra palabras... 
        lo que este dentro de la funcion useEffect se ejecutara en luego de la primera 
        renderizacion. Es decir, en la 2da, 3ra, etc veces q se ejecute el cod
        Luego de la segunda renderizacion, las demas lineas de codigo actuaran segun
        a lo que responda el useEffect.
        Si no se aplica esto, la lineas de cod que se necesita ejecutar una vez producira
        errores. 
        Necesitamos de esta funcion para que primero ejecute el div vacio "<div></div> "
        y luego lo enviar rapidamente al "/", es casi imperseptible
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
    
    //En vez de esos <div> en true deberia ir lo siguiente
    //<ListaPeliculas peliculas = {ListaPeliculas}/>
     return location.state !== null?
     <div>Main Page: {location.state.username}</div> : <div></div> 

}


export default MainPage
