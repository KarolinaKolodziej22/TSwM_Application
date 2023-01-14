import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Doctor({doctor}) { 
    return (
        <Card className = "my-3 p-3 rounded">
            <Link to={`/doctor/${doctor._id}`}>
                <Card.Img src={doctor.image}/>
            </Link>

            <Card.Body>
                <Link to={`doctor/${doctor._id}`}>
                    <Card.Title as = "div">
                        <strong>{doctor.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default Doctor