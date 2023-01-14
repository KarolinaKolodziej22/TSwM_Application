import React from 'react'
import {useParams} from 'react-router-dom'
import Doctor from '../components/Doctor'
import doctors from '../doctors'
import {Link} from 'react-router-dom'
import { Row,Col,Image, ListGroup } from 'react-bootstrap'


function DoctorScreen({match}) {
    const {id} = useParams()
    const doctor = doctors.find(doctor=>doctor._id == id)
    return(
        <div>
            <Link to ="/home" className='btn btn-light my'>Wróć</Link>
            <Row>
                <Col md={6}>
                    <Image src={doctor.image} alt={doctor.name} fluid />
                </Col>
                <Col md={2}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{doctor.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cena: 100{doctor.price}zł
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Opis: {doctor.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={2}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                          
                        </ListGroup.Item>
                    </ListGroup>

                
                </Col>
            </Row>
        </div>
    )
}
export default DoctorScreen