import { faListCheck, faStopwatch, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap'
import usuario from "../assets/usuario1.png"

export default function Metrics() {

    const buttons = ["Año", "Mes", "Semana"]
    const metricsPerYear = { routinesDoneYear: 300, exercicesDoneYear: 1488, exercicesTimeYear: 1752 }
    const metricsPerMonth = { routinesDoneMonth: 25, exercicesDoneMonth: 124, exercicesTimeMonth: 146 }
    const metricsPerWeek = { routinesDoneWeek: 4, exercicesDoneWeek: 18, exercicesTimeWeek: 36.5 }


    const [isActive, setIsActive] = useState(buttons[0])

    return (
        <>
            <div style={{ position: "absolute", top: "1rem", right: "2rem" }} >
                <InputGroup className="mb-3">
                    <img src={usuario} alt="usuario" className='img-button-profile' />
                    <DropdownButton
                        variant="light"
                        title="Ragnar Lotbrok"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Editar perfil</Dropdown.Item>
                        <Dropdown.Item href="#">Cerrar sesión</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </div>
            <div className='metrics-container-wrapper'>
                <section className='text-center'>
                    <h4 className='text-primary'>¡Hola <b>Ragnar Lotbrok</b>!</h4>
                    <p>Tus métricas generales son las siguiente:</p>
                    <div>
                        {buttons.map((button) => (
                            <Button
                                variant="outline-primary"
                                className="btn btn-sm buttons-metrics"
                                active={isActive === button}
                                onClick={() => setIsActive(button)}
                            >
                                {button}
                            </Button>
                        ))}
                    </div>
                    <div className='metrics-container'>
                        <div className='text-center mx-3'>
                            <FontAwesomeIcon icon={faListCheck} style={{ fontSize: "30px", color: "#007bff" }} />
                            <h3 className='mt-2 mb-0 text-primary fw-bold'>{isActive === "Año" && metricsPerYear.routinesDoneYear}{isActive === "Mes" && metricsPerMonth.routinesDoneMonth}{isActive === "Semana" && metricsPerWeek.routinesDoneWeek}</h3>
                            <p>Rutinas realizadas</p>
                        </div>
                        <div className='text-center mx-3'>
                            <FontAwesomeIcon icon={faPersonRunning} style={{ fontSize: "30px", color: "#007bff" }} />
                            <h3 className='mt-2 mb-0 text-primary fw-bold'>{isActive === "Año" && metricsPerYear.exercicesDoneYear}{isActive === "Mes" && metricsPerMonth.exercicesDoneMonth}{isActive === "Semana" && metricsPerWeek.exercicesDoneWeek}</h3>
                            <p>Ejercicios realizados</p>
                        </div>
                        <div className='text-center mx-3'>
                            <FontAwesomeIcon icon={faStopwatch} style={{ fontSize: "30px", color: "#007bff" }} />
                            <h3 className='mt-2 mb-0 text-primary fw-bold'>{isActive === "Año" && metricsPerYear.exercicesTimeYear}{isActive === "Mes" && metricsPerMonth.exercicesTimeMonth}{isActive === "Semana" && metricsPerWeek.exercicesTimeWeek}<span className='text-primary' style={{ fontSize: "1rem" }}>min.</span></h3>
                            <p>Tiempo de ejercicio</p>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}
