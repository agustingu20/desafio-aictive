import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import usuario from "../assets/usuario1.png"

export default function MyAccount() {
    return (
        <div className='myaccount-container'>
            <div>
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
                    <Form>
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
                        <Form.Group className="mb-1 d-flex" controlId="formBasicPassword">
                            <Form.Label className='form-label'>Contraseña</Form.Label>
                            <Form.Control className='form-control' type="password" placeholder='**********' />
                        </Form.Group>
                        <div className='d-flex flex-column align-items-end'>
                            <Link to="#">Cambiar contraseña</Link>
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
