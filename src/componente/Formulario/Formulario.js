import { useState } from "react"
import {v4 as uuid} from "uuid";
import "./Formulario.css"
import Campo from "../campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"

function Formulario(props){
    const [nombre,actualizarNombre]=useState("");
    const [puesto,actualizarPuest]=useState("");
    const [foto,actualizarFoto]=useState("");
    const [equipo,actualizarEquipo]=useState("");

    const [titulo,actualizarTitulo]=useState("");
    const [color,actualizarColor]=useState("");

    const {crearEquipo, registrarColaborador} = props

    const manejarEnvio = (evento)=>{
        evento.preventDefault()
        let datosEnviar = {
            id:uuid(),
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        console.log(registrarColaborador(datosEnviar));
        registrarColaborador(datosEnviar)
    }

    const manejarEquipo = (evento) =>{
        evento.preventDefault()
        crearEquipo({titulo,colorPrimario:color})

    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <Campo titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar Puesto" required valor={puesto} actualizarValor={actualizarPuest}/>
            <Campo titulo="Foto" placeholder="ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones equipos={props.equipos}  valor={equipo} actualizarValor={actualizarEquipo}/>
            <Boton>crear...</Boton>


        </form>

        <form onSubmit={manejarEquipo}>
            <h2>
                Rellena el formulario para crear el Equipo.
            </h2>
            <Campo titulo="titulo" placeholder="Ingresar Titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingresar Color Hexadecimal" required valor={color} actualizarValor={actualizarColor} type="color"/>
            <Boton>registra equipo...</Boton>
        </form>
    </section>
}

export default Formulario