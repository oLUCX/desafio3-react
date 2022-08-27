//import { useState } from "react"
import '../css/ListaColab.css'

const ListaColab = (props) => {
    const db = props.listaColaboradores
    const busqueda = props.nombreBusqueda
    return (
        <>
            <div className="list">
                <hr />
                <h3 className="titleColab">Lista de Colaboradores</h3>
                <ul>
                {
                    db.filter((val)=>{
                        if(busqueda === ''){
                            return val
                        } else if (val.nombre.toLowerCase().includes(busqueda.toLowerCase())){
                            return val
                        }
                    }).map((val) =>{
                        return(
                            <li key={val.nombre}> {val.nombre} - {val.correo}</li>
                        )
                    })
                }
                </ul>
            </div>
        </>
    )
}
export default ListaColab

