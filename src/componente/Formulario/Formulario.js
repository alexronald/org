import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"

function Formulario(props){
    const [nombre,actualizarNombre]=useState("");
    const [puesto,actualizarPuest]=useState("");
    const [foto,actualizarFoto]=useState("");
    const [equipo,actualizarEquipo]=useState("");

    const manejarEnvio = (evento)=>{
        evento.preventDefault()
        let datosEnviar = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        console.log(props.registrarColaborador(datosEnviar));
        props.registrarColaborador(datosEnviar)
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required valor={puesto} actualizarValor={actualizarPuest}/>
            <CampoTexto titulo="Foto" placeholder="ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones equipos={props.equipos}  valor={equipo} actualizarValor={actualizarEquipo}/>
            <Boton>crear...</Boton>


        </form>
    </section>
}

export default Formulario