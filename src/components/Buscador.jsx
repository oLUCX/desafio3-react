import Form from 'react-bootstrap/Form';
import '../css/Buscador.css'

const Buscador = (props) => {
    const capturaInputNombre = (e) => props.setNombreBusqueda(e.target.value)
    return (
        <div className='containerBuscador'>
            <h2 className='title'>Buscador de Colaboradores</h2>
            <div className="containerForm">
                <Form.Control
                    type="search"
                    placeholder="Busca a un colaborador"
                    className="me-2"
                    aria-label="Search"
                    onChange={capturaInputNombre}
                />
            </div>
        </div>
    )
}


export default Buscador;