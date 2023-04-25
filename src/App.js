import './App.css';
import { useState } from 'react';
import Header from './componente/Header/Header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from './componente/MiOrg/MiOrg';
import Equipo from './componente/Equipo';



function App() {
  const [mostrarFormulario, actualizarMostra] = useState(true)

  const cambiarMostra=()=>{
    actualizarMostra(!mostrarFormulario)
  }

  const equipos = [
    {
      titulo:"Programación",
      colorPrimario:"#57C278 ",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      titulo:"Innovación y  Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
]
  return (
    <div >
      
      <Header/>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}/> : <></>}
      <MiOrg cambiarMostra = {cambiarMostra}/>
      {
        equipos.map((equipo)=>{
          return <Equipo  datos ={equipo} key={equipo.titulo}/>
        })
      }
    </div>
  );
}

export default App;
