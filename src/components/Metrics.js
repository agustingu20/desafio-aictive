import React from 'react'
import { Button } from 'react-bootstrap'

export default function Metrics() {
    return (
        <div>
            <section>
                <h4>¡Hola Ragnar Lotbrok!</h4>
                <p>Tus métricas generales son las siguiente:</p>
                <div>
                    <Button className='mx-3'>Año</Button>
                    <Button className='mx-3'>Mes</Button>
                    <Button className='mx-3'>Semana</Button>
                </div>
            </section>
        </div>
    )
}
