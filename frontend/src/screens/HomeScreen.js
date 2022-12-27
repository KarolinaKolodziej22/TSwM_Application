import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Doctor from '../components/Doctor'
import doctors from '../doctors'

function HomeScreen(){
    return (
        <div>
            <h1>Doktorzy</h1>
            <Row>
                {doctors.map(doctor => (
                    <Col key={doctor._id} sm={12} md={6} lg={4} xl={3}>
                        <Doctor doctor={doctor} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default HomeScreen