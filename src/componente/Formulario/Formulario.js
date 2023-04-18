import "./Formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"

function Formulario(){
    return <section className="formulario">
        <form>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto"/>
            <CampoTexto titulo="Foto" placeholder="ingresar enlace de foto"/>
            <ListaOpciones/>

        </form>
    </section>
}

export default Formulario