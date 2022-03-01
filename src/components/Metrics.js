import { faListCheck, faStopwatch, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function Metrics() {
    return (
        <div className='metrics-container-wrapper'>
            <section className='text-center'>
                <h4 className='text-primary'>¡Hola <b>Ragnar Lotbrok</b>!</h4>
                <p>Tus métricas generales son las siguiente:</p>
                <div>
                    <Button variant="outline-primary" className='btn btn-sm buttons-metrics'>Año</Button>
                    <Button variant="outline-primary" className='btn btn-sm buttons-metrics'>Mes</Button>
                    <Button variant="outline-primary" className='btn btn-sm buttons-metrics'>Semana</Button>
                </div>
                <div className='metrics-container'>
                    <div className='text-center mx-3'>
                        <FontAwesomeIcon icon={faListCheck} style={{ fontSize: "35px" }} />
                        <h3 className='mt-2 mb-0'>25</h3>
                        <p>Rutinas realizadas</p>
                    </div>
                    <div className='text-center mx-3'>
                        <FontAwesomeIcon icon={faPersonRunning} style={{ fontSize: "35px" }} />
                        <h3 className='mt-2 mb-0'>124</h3>
                        <p>Ejercicios realizados</p>
                    </div>
                    <div className='text-center mx-3'>
                        <FontAwesomeIcon icon={faStopwatch} style={{ fontSize: "35px" }} />
                        <h3 className='mt-2 mb-0'>146 min.</h3>
                        <p>Tiempo de ejercicio</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
