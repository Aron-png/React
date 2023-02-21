function AboutPage() {
    //el "sessionStorage" sirve para guardar la data de tipo String hasta que se cierre 
    //la (pestaña = SESION)
    //sessionStorage.getItem("nombre", valor) = EXTRALLENDO info.
    //Ahora, el dataUsuarioJSON = Es un String
    const dataUsuarioJSON = sessionStorage.getItem("DATA_USUARIO")
    // JSON.parse transforma: JSON (string) -> objeto JS
    //De JSON pasarse al objeto (para usar "dataUsuario.username" ya q los objetos tiene
    //estos atributos y no el String)
    const dataUsuario = JSON.parse(dataUsuarioJSON)
    return <div>About Page { dataUsuario.username }</div>
}

export default AboutPage