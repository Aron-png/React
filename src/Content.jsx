import ListaDiasSemana from "./ListaDiasSemana"

function Content(props) {
    const total = ["Domingo", listaDias, listaDias2]
    const listaDias2 = ["Martes","Jueves","Sabado"]
    const listaDias = ["Lunes", "Miercoles" ,"Viernes"]
    
    if (props.sePintaNombre === true) {
        return <div className="container">
            <p>Hola { props.nombre }</p>
            <ListaDiasSemana 
                lista={ total }
                modo={ "tabla" }/>
        </div>
    } else {
        return <div>
            <p>Hola { props.apellido }</p>
        </div>
    }
}

export default Content