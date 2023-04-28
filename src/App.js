import './App.css';
import { useState } from 'react';
import {v4 as uuid} from "uuid";
import Header from './componente/Header/Header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from './componente/MiOrg/MiOrg';
import Equipo from './componente/Equipo';
import Footer from './componente/Footer';




function App() {
  const [mostrarFormulario, actualizarMostra] = useState(true)
  const [colaboradores, actualizarColavoradores]=useState([
    {
      id:uuid(),
      equipo:"UX y Diseño",
      foto:"https://www.facebook.com/profile.php?id=100086531473650",
      nombre:"ales",
      puesto:"colaborador",
      fav:false
    }
  ])
  const [equipos, actualizarEquipo]=useState([
    {
      id:uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278 ",
      colorSecundario:"#D9F7E9"
    },
    {
      id:uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id:uuid(),
      titulo:"Innovación y  Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])
  const cambiarMostra=()=>{
    actualizarMostra(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador)=>{
    console.log("nuevo colaborador",colaborador)

    //spread operator
    actualizarColavoradores([...colaboradores,colaborador])
  }

  const eliminarColaborador=(id)=>{
    const nuevosColaboradores= colaboradores.filter((colaborador)=> colaborador.id !=id)
    actualizarColavoradores(nuevosColaboradores)
  }

  const actualizarColor=(color, id)=>{

    const equipoActualizado = equipos.map((equipo)=>{
      if (equipo.id === id){
        equipo.colorPrimario = color
        equipo.colorSecundario = color
      }
      return equipo
    })

    actualizarEquipo(equipoActualizado)
  }

  const crearEquipo = (nuevoEquipo)=>{
    actualizarEquipo([...equipos, {...nuevoEquipo,id:uuid()}])
  }

  const like=(id)=>{
    
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav;
        console.log("like",colaborador.fav)
      }
      return colaborador
    })
    actualizarColavoradores(colaboradoresActualizados)
  }

  return (
    <div >
      
      <Header/>
      {
      mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <></>
      }

      <MiOrg cambiarMostra = {cambiarMostra}/>
      {
        equipos.map((equipo)=>{
          return <Equipo  
          datos ={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)} 
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}/>
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
