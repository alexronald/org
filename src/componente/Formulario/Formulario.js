import "./Formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"

function Formulario(){
    const manejarEnvio = (evento)=>{
        evento.preventDefault()
        console.log("manejar envio ", evento)
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required/>
            <CampoTexto titulo="Foto" placeholder="ingresar enlace de foto" required/>
            <ListaOpciones/>
            <Boton>crear...</Boton>


        </form>
    </section>
}

export default Formulario