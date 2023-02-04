import { useState } from "react"

function LoginForm(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    //Con las variables de estado, mapeamos el usuario y vemos con onLoginOk si puede "ingresar"
    const butOnClick = function() {
        console.log("USuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }

    return <form>
        <div>
            <label className="form-label">Usuario:</label>
            <input className="form-control" type="text"
            //Cuando ponemos value = usuario, guardamos lo que escribimos en aquella variable
                value={ usuario }
//onChange es una propiedad propia del react q se aplica cada vez que exista un cambio, como un click
//gracias al onChange podemos escribir letras en el formulario
//Con este cod “set” agrego valores a las variables de estado, evt es un obj q tiene
//  info del evento click y de su valor
                onChange={ function(evt) { setUsuario(evt.target.value) } } />
        </div>
        <div>
            <label className="form-label">Password:</label>
            <input className="form-control" type="password"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } } />
        </div>
        {//mt-2=espaciado hacia arriba mt = t de top
        //s es izq y e es der
        //onClick = registra la funcion butOnClick cuando se haga click al boton
        }
        <button className="btn btn-success mt-2" type="button"
            onClick={ butOnClick }>
            Login
        </button>
    </form>
}

export default LoginForm