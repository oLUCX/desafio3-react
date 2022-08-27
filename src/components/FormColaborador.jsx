import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../css/FormColaborador.css'

const FormColaborador = (props) => {
    const [nombreColaborador, setNombreColaborador] = useState("")
    const [correoColaborador, setCorreoColaborador] = useState("")
    const [error, setError] = useState(false);
    const capturaInputNombre = (e) => setNombreColaborador(e.target.value)
    const capturaInputCorreo = (e) => setCorreoColaborador(e.target.value)

    const enviarForm = (e) => {
        e.preventDefault()
        if (nombreColaborador === '' || correoColaborador === '') {
            setError(true);
            return alert('No se aceptan datos vacíos') ;
        } else {
            setError(false);
        }
        const colaborador = {
            nombre: nombreColaborador,
            correo: correoColaborador
        }
        props.guardarColaborador(colaborador)
        setNombreColaborador('')
        setCorreoColaborador('')
    }

    return (
        <>
            <Form>
                {/* Nombre colaborador */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre Colaborador</Form.Label>
                    <Form.Control
                        placeholder="Agrega un nombre de colaborador"
                        type="text"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={nombreColaborador} onChange={capturaInputNombre}
                    />
                </Form.Group>
                {/* Correo colaborador */}
                <Form.Group>
                    <Form.Label>Correo Colaborador</Form.Label>
                    <Form.Control
                        placeholder="Agrega un correo de colaborador"
                        type="email"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={correoColaborador} onChange={capturaInputCorreo}
                    />
                </Form.Group>
                <Button
                    variant="outline-success"
                    onClick={enviarForm}
                    className='btn'>Agregar colaborador
                </Button>{' '}
            </Form>
        </>
    )
}

export default FormColaborador