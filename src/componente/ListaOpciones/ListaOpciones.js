import "./ListaOpciones.css"
const ListaOpciones = (props)=>{
const equipos = [
            "Programación",
            "Front End",
            "Data Science",
            "Devops",
            "UX y Diseño",
            "Móvil",
            "Innovación y  Gestión"
]

const manejarCambio = (evento)=>{
    props.actualizarValor(evento.target.value)
}

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {
                /* equipos.map((equipo, index)=>{
                    return <option key={index} > {equipo} </option>
                }) */
                equipos.map((equipo, index)=><option key={index} > {equipo} </option>)
            }
        </select>
    </div>

}

export default  ListaOpciones