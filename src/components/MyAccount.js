import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import usuario from "../assets/usuario1.png"


export default function MyAccount() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault()
        setValidated(true);
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
    }

    const changePass = () => {
        document.getElementById("password").classList.toggle("d-none")
        document.getElementById("newPassword").classList.toggle("d-none")
        document.getElementById("actualPassword").classList.toggle("d-none")
        document.getElementById("repeatedNewPassword").classList.toggle("d-none")
    }

    return (
        <div className='myaccount-container'>
            <Link className='back-link' to="/"><FontAwesomeIcon className='me-3' icon={faArrowCircleLeft} style={{ fontSize: "30px", color: "#007bff" }} />Atrás</Link>
            <div>
                <h4 className='text-primary fw-bold mb-3 mx-4'>Mi cuenta</h4>
                <Card className='card-container'>
                    <Card.Img variant="center" src={usuario} className="card-image p-2" />
                    <Card.Body className='d-flex flex-column'>
                        <Link to="#" className='fw-bold'>Subir una nueva foto</Link>
                        <Link to="#" >Quitar foto</Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className='card-form-container'>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Form.Group className="mb-1 d-flex" controlId="formBasicName">
                            <Form.Label className='form-label'>Nombre</Form.Label>
                            <Form.Control className='form-control' type="text" />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex" controlId="formBasicLastName">
                            <Form.Label className='form-label'>Apellido</Form.Label>
                            <Form.Control className='form-control' type="text" />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex" controlId="formBasicEmail">
                            <Form.Label className='form-label-double'>Correo electrónico</Form.Label>
                            <Form.Control className='form-control' type="email" placeholder='rufian.contreri@company.com' />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex" controlId="formBasicOrg">
                            <Form.Label className='form-label'>Organización</Form.Label>
                            <Form.Control className='form-control' type="text" placeholder='My Company' />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex" controlId="formBasicBirthDate">
                            <Form.Label className='form-label-double'>Fecha de nacimiento</Form.Label>
                            <Form.Control className='form-control' type="date" />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex" controlId="formBasicWeight">
                            <Form.Label className='form-label'>Peso</Form.Label>
                            <Form.Control className='form-control' type="text" placeholder='kg' />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex" controlId="formBasicHeight">
                            <Form.Label className='form-label'>Talla</Form.Label>
                            <Form.Control className='form-control' type="text" placeholder='cm' />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex" controlId="formBasicPassword" Id="password">
                            <Form.Label className='form-label'>Contraseña</Form.Label>
                            <Form.Control
                                className='form-control'
                                type="password"
                                placeholder='**********'
                                required
                                pattern='(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}'
                                minLength={10}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex d-none" controlId="formBasicPassword" Id="actualPassword">
                            <Form.Label className='form-label-double'>Contraseña actual</Form.Label>
                            <Form.Control
                                className='form-control'
                                type="password"
                                placeholder='**********'
                                required
                                pattern='(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}'
                                minLength={10}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex d-none" controlId="formBasicPassword" Id="newPassword">
                            <Form.Label className='form-label-double'>Nueva contraseña</Form.Label>
                            <Form.Control
                                className='form-control'
                                type="password"
                                placeholder='**********'
                                required
                                pattern='(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}'
                                minLength={10}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1 d-flex d-none" controlId="formBasicPassword" Id="repeatedNewPassword">
                            <Form.Label className='form-label-double'>Repetir nueva contraseña</Form.Label>
                            <Form.Control
                                className='form-control'
                                type="password"
                                placeholder='**********'
                                required
                                pattern='(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}'
                                minLength={10}
                            />
                        </Form.Group>
                        <div className='d-flex flex-column align-items-end'>
                            <Link to="#" onClick={changePass}>Cambiar contraseña</Link>
                            <Button className='form-button' variant="primary" type="submit">
                                Guardar
                            </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    )
}
