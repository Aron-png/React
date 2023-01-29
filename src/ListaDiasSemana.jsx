import { useState } from "react"

function ListaDias(props) {
    if (props.modo === "tabla") {
        return <table className="table table-hover">
            <thead>
                <tr>
                    <th>Dia</th>
                </tr>
            </thead>
            <tbody>
                {
                    //Map, ejecuta la funcion en cada elemento de la lista y te devuelve otro array
                    //Aca se usa una function anonima, solo se usa una vez... es una func sin name.
                    props.lista.map(function(dia) {
                        return <tr key={ dia }>
                            <td>{ dia }</td>
                        </tr>
                    })
                } 
            </tbody>
        </table>
    }else if (props.modo === "lista"){
        return <ul className="list-group">
            {
                props.lista.map(function(dia) {
                    return <li key={ dia }
                                className="list-group-item">
                                { dia }
                            </li>
                })
            }
        </ul>
    }else {
        return <div>Modo incorrecto</div>
    }
}

// Componente React
function ListaDiasSemana(props) {
    //Variable de estado de React
    //useState, funcion de la libreria React = inicializa los variables de estado
    //modovisualizacion = "tabla"
    //tmb se reemplaza por el useState("props.modo")
    // Variable de estado
    const [modoVisualizacion, setModoVisualizacion] = useState(props.modo)
    //Cambiamos el props.modo por modoVisualizacion
    const butOnClick = function() {
        if (modoVisualizacion === "tabla") {
            // cambiar a modo lista
            setModoVisualizacion("lista")
            //Cambiar a modo lista
            //No puedo hacer esto porque es un objeto especial
            //modoVisualizacion="lista"
        }else {
            // cambiar a modo tabla
            setModoVisualizacion("tabla")
        }
    }
    return <div className="card">
        <div className="card-body">
            <h3>Dias Semana <button onClick={ butOnClick } className="btn btn-primary" type="button">Cambiar</button> </h3>
            <ListaDias modo={ modoVisualizacion } lista={ props.lista }/>
        </div>
    </div>   


    
    
}

export default ListaDiasSemana


