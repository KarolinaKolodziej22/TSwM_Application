import React,{ useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import Doctor from '../components/Doctor'
import doctors from '../doctors'
import FilterMenu from '../components/FilterMenu'

function HomeScreen(){
    const [selectedOption, setSelectedOption] = useState("all")
    const filteredDoctors = doctors.filter(doctor => {
        if (selectedOption === 'zmiany na skórze' || selectedOption === 'wysypka') {
           // return doctor.name === 'Alergolog'
           return doctor.symptoms.join(',').includes(selectedOption)

        } 
        else if(selectedOption === 'złamanie' || selectedOption==='uraz') {
            // return doctor.name === 'Ortopeda'
            return doctor.symptoms.join(',').includes(selectedOption)

        }
        else if(selectedOption === 'ból brzucha' || selectedOption==='gorączka'|| selectedOption==='kaszel') {
            // return doctor.name === 'Lekarz Ogólny'
            return doctor.symptoms.join(',').includes(selectedOption)

        }
        else if(selectedOption === 'guz' || selectedOption==='zmiany na skórze') {
           // return doctor.name === 'Chirurg' || doctor.name ==='Onkolog'
           return doctor.symptoms.join(',').includes(selectedOption)

        }
        else if(selectedOption === 'nerwica' || selectedOption==='Alzheimer') {
           // return doctor.name === 'Neurolog'
            return doctor.symptoms.join(',').includes(selectedOption)

        }
        else if(selectedOption === 'stany depresyjne' || selectedOption==='ból brzucha') {
          //  return doctor.name === 'Psychiatra'
          return doctor.symptoms.join(',').includes(selectedOption)

        }
        else if(selectedOption === 'ból w klatce piersiowej' || selectedOption==='omdlenia') {
           // return doctor.name === 'Kardiolog'
           return doctor.symptoms.join(',').includes(selectedOption)

        }
     

        
        return selectedOption === 'all';
    });
    
    return (
        <div>
            <h1>Doktorzy</h1>
            <FilterMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            <Row>
            {filteredDoctors.map(doctor => (
                    <Col key={doctor._id} sm={12} md={6} lg={4} xl={3}>
                        <Doctor doctor={doctor} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default HomeScreen