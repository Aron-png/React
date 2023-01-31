function Filtro(props){
    return <div className="mt-4 mb-4">
        <label className="form-label">
            Categoria
            <select className="form-select" onChange={function(evt) { 
                props.onFiltrar(evt.target.value)
             }}>

                {
                    props.categorias.map(function(cat){
                        return <option value={ cat.id }>
                            { cat.nombre }
                        </option>
                    }
                    )
                }
            </select>
        </label>
    </div>
}
export default Filtro