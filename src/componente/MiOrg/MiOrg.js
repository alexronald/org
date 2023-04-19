
import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props)=>{

    //const [nombre, actualizarNombre] = useState("cris")

    /* console.log("fuc ",props)
    const [mostrar , actualizarMostra] = useState(true)
    console.log(useState("cris"))

    const manejarClick = ()=>{
        actualizarMostra(!mostrar)
        console.log("click",!mostrar)
    } */
    return <div className="org-div">
        <h3 className="org-titulo">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostra}></img>
    </div>
}

export default MiOrg;