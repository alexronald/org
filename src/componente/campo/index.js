import "./Campo.css";


function Campo(props){

    const {type ="text"} = props
    const realizarCambio = (evento)=>{
        props.actualizarValor(evento.target.value);
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input type={type} placeholder={props.placeholder} required={props.required} value={props.valor} onChange={realizarCambio}/>
    </div>
}

export default Campo;