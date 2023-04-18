import "./CampoTexto.css";


function CampoTexto(props){
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder}/>
    </div>
}

export default CampoTexto;