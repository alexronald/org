import "./CampoTexto.css";


function CampoTexto(props){

    const realizarCambio = (evento)=>{
        props.actualizarValor(evento.target.value);
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} value={props.valor} onChange={realizarCambio}/>
    </div>
}

export default CampoTexto;