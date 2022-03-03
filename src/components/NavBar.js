import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faGear, faGrip, faCircleQuestion, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className='sidebar'>
            <Container className='sidebar-container'>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='flex-column icons-column'>
                    <Nav className="me-auto flex-column text-start" style={{ width: "260px" }}>
                        <div className='d-flex justify-content-between'>
                            <Link href="#home">Inicio</Link>
                            <FontAwesomeIcon icon={faHouse} className="mt-2" />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to="myaccount">Mi cuenta</Link>
                            <FontAwesomeIcon icon={faUser} className="mt-2" />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link href="#link">Ajustes</Link>
                            <FontAwesomeIcon icon={faGear} className="mt-2" />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link href="#link">Aplicaciones</Link>
                            <FontAwesomeIcon icon={faGrip} className="mt-2" />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link href="#link">Soporte</Link>
                            <FontAwesomeIcon icon={faCircleQuestion} className="mt-2" />
                        </div>
                        <div className='d-flex justify-content-between mt-5'>
                            <Link href="#link" className='text-start'>Cerrar Sesión</Link>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="mt-2" />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}
