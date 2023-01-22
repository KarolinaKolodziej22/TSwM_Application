import React, { useState } from "react";
import { Form, FormControl} from 'react-bootstrap'

function FilterMenu() {
    const [selectedOption, setSelectedOption] = useState("all")

    return (
        <>
        <p>Co ci dolega?</p>
        <Form>
            <FormControl as="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="all">Wszystkie</option>
                <option value="ból brzucha">Ból brzucha</option>
                <option value="wysypka">Wysypka</option>
                <option value="kaszel">Kaszel</option>
                <option value="gorączka">Gorączka</option>
                <option value="stany depresyjne">Stany depresyjne</option>
                <option value="guz">Guz</option>
                <option value="bol brzucha">Ból brzucha</option>
                <option value="zmiany na skórze">Zmiany skóry</option>
                <option value="złamanie">Złamanie</option>
                <option value="uraz">Urazy układu ruchu</option>
                <option value="nerwica">Nerwica</option>
                <option value="ból w klatce piersiowej">ból w klatce piersiowej</option>
                <option value="omdlenia">Omdlenia</option>
                
               
            </FormControl>
        </Form>
        </>
    )
}

export default FilterMenu