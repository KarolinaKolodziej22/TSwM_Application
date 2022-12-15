import React from 'react'
import {Card} from 'react-bootstrap'


function Doctor({doctor}) { 
    return (
        <Card className = "my-3 p-3 rounded">
            <a href={'/doctor/${doctor._id}'}>
                <Card.Img src={doctor.image}/>
            </a>

            <Card.Body>
                <a href={'doctor/${doctor._id}'}>
                    <Card.Title as = "div">
                        <strong>{doctor.name}</strong>
                    </Card.Title>
                </a>
            </Card.Body>
        </Card>
    )
}
export default Doctor