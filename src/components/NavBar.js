import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faGear, faGrip, faCircleQuestion, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import aictiveLogo from "../assets/aictive-logo.png"

export default function NavBar() {

    const handleClick = () => {
        document.getElementById("sidebar-hide").classList.toggle("sidebar-hide")
    }

    return (
        <Navbar bg="light" expand="lg" className='sidebar' id="sidebar-hide">
            <div className='logo-container'><Link to="#" onClick={handleClick}><img src={aictiveLogo} alt="aictive" className="aictive-logo" /></Link></div>
            <Container className='sidebar-container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='flex-column icons-column'>
                    <Nav className="me-auto justify-content-between text-start" style={{ width: "260px" }}>
                        <div>
                            <ul className='links-wrapper'>
                                <li className='links-sidebar'><Link className='links-text' to="/">Inicio</Link></li>
                                <li className='links-sidebar'><Link className='links-text' to="myaccount">Mi cuenta</Link></li>
                                <li className='links-sidebar'><Link className='links-text' href="#link">Ajustes</Link></li>
                                <li className='links-sidebar'><Link className='links-text' href="#link">Aplicaciones</Link></li>
                                <li className='links-sidebar'><Link className='links-text' href="#link">Soporte</Link></li>
                                <li className='link-sidebar-closeSession'><Link className='links-text' href="#link">Cerrar Sesión</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='icons-wrapper'>
                                <li className='icons-sidebar-li'><Link className='links' to="/"><FontAwesomeIcon icon={faHouse} className="icons-sidebar" /></Link></li>
                                <li className='icons-sidebar-li'><Link className='links' to="myaccount"><FontAwesomeIcon icon={faUser} className="icons-sidebar" /></Link></li>
                                <li className='icons-sidebar-li'><Link className='links' href="#link"><FontAwesomeIcon icon={faGear} className="icons-sidebar" /></Link></li>
                                <li className='icons-sidebar-li'><Link className='links' href="#link"><FontAwesomeIcon icon={faGrip} className="icons-sidebar" /></Link></li>
                                <li className='icons-sidebar-li'><Link className='links' href="#link"><FontAwesomeIcon icon={faCircleQuestion} className="icons-sidebar" /></Link></li>
                                <li className='icons-sidebar-li'><Link className='links' href="#link"><FontAwesomeIcon icon={faArrowRightFromBracket} className="icon-sidebar-closeSession" /></Link></li>
                            </ul>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}
