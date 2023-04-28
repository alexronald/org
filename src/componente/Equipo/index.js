import "./Equipo.css"
import Colaborador from "../Colaborador/index";
import hexToRgba from 'hex-to-rgba';

const Equipo =(props)=>{
    //DESTRUCTURACION
    const {colorSecundario,colorPrimario,titulo,id} =props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj ={
        backgroundColor: hexToRgba(colorPrimario,0.7)
    }
    return <>{colaboradores.length >0 && <section className="equipo" style={obj}>
        <input className="input-color" type="color" value={colorPrimario} onChange={(event)=>{
            actualizarColor(event.target.value, id)
        }}/>
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">

            {
            colaboradores.map((colaborador,index)=><Colaborador 
            datos={colaborador} key={index} 
            colorPrimario={colorPrimario}
            eliminarColaborador={eliminarColaborador}
            like={like}/>)}

        </div>

    </section>}</>
}

export default Equipo;