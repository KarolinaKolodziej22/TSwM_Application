import React from 'react'
import {useParams} from 'react-router-dom'
//import Doctor from '../components/Doctor'
import doctors from '../doctors'
import {Link} from 'react-router-dom'
import { Row,Col,Image, ListGroup, ListGroupItem } from 'react-bootstrap'


function DoctorScreen({match}) {
    const {id} = useParams()
    const doctor = doctors.find(doctor=>doctor._id === id)
    return(
        <div>
            <Link to ="/" className='btn btn-light my'>Wróć</Link>
            <Row>
                <Col md={6}>
                    <Image src={doctor.image} alt={doctor.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3 style={{ marginLeft: '80px' }}>{doctor.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cena: {doctor.price}zł
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Opis: {doctor.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                {/* <Col md={2}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>Przykładowi lekarze</h3>
                        </ListGroup.Item>
                        </ListGroup>
                           <ListGroup>
                            
                           </ListGroup>
                           </Col> */}
            </Row>
            <Row>
                <Col md={6}>
                <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3 style={{ marginLeft: '100px' }}> Zalecani lekarze</h3>
                            {doctor.example.map(exampleDoctor => (
                    <ListGroup.Item>
                        {exampleDoctor.name} - kontakt: {exampleDoctor.contact}
                    </ListGroup.Item>
                ))}
                </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </div>
    )
}
export default DoctorScreen