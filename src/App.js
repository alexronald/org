import './App.css';
import { useState } from 'react';
import Header from './componente/Header/Header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from './componente/MiOrg/MiOrg';
import Equipo from './componente/Equipo';
import Footer from './componente/Footer';



function App() {
  const [mostrarFormulario, actualizarMostra] = useState(true)
  const [colaboradores, actualizarColavoradores]=useState([])

  const cambiarMostra=()=>{
    actualizarMostra(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador)=>{
    console.log("nuevo colaborador",colaborador)

    //spread operator
    actualizarColavoradores([...colaboradores,colaborador])
  }

  const eliminarColaborador=()=>{
    console.log("eliminar colaborador")
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
      {
      mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador={registrarColaborador}
      /> : <></>
      }

      <MiOrg cambiarMostra = {cambiarMostra}/>
      {
        equipos.map((equipo)=>{
          return <Equipo  datos ={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)} eliminarColaborador={eliminarColaborador}/>
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
