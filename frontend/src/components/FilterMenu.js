import React from "react";
import { Form, FormControl} from 'react-bootstrap'

import Cookies from 'universal-cookie';
const cookies = new Cookies();
const complaint = cookies.get('complaint');

function FilterMenu() {
    const onSelectChange = (complaint => {
        console.log(complaint)
        cookies.set('complaint', complaint, { path: '/' });
        window.location.reload(false);
    })
    return (
        <>
        <p>Co ci dolega?</p>
        <Form>
            <FormControl as="select" value={complaint} onChange={(e) => onSelectChange(e.target.value)}>
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