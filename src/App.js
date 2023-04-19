import './App.css';
import { useState } from 'react';
import Header from './componente/Header/Header.js';
import Formulario from './componente/Formulario/Formulario.js';
import MiOrg from './componente/MiOrg/MiOrg';



function App() {
  const [mostrarFormulario, actualizarMostra] = useState(true)

  const cambiarMostra=()=>{
    actualizarMostra(!mostrarFormulario)
  }
  return (
    <div >
      
      <Header/>
      {mostrarFormulario === true ? <Formulario/> : <></>}
      <MiOrg cambiarMostra = {cambiarMostra}/>
    </div>
  );
}

export default App;
