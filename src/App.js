import { useState } from "react"
import './css/App.css'
import ListaColab from './components/ListaColab'
//import Colaboradores from './Colaboradores.json'
import FormColaborador from './components/FormColaborador'
import Buscador from './components/Buscador'
import ColaboradoresDB from "./ColaboradoresDB"


function App() {
  const [nombreBusqueda, setNombreBusqueda] = useState("")
  const [listaColaboradores, setListaColaboradores] = useState(ColaboradoresDB)
  const guardarColaborador = (colaborador) => {
    const nuevoColaborador = {
      id: `${listaColaboradores.length + 1}`,
      ...colaborador
    }
    setListaColaboradores([...listaColaboradores, nuevoColaborador])
  }
  
  return (
    <div className="App">
      < Buscador setNombreBusqueda={setNombreBusqueda} />
      < FormColaborador guardarColaborador={guardarColaborador} />
      < ListaColab listaColaboradores={listaColaboradores} nombreBusqueda={nombreBusqueda}/>
    </div>
  );
}

export default App;
