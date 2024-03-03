import React, { useState }  from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import { question } from '../../DataBase/questionAnswer';

const FormInput = ({onAdd,notify}) => {
    const [qu, setQu] = useState(''); 
    const [an, setAn] = useState(''); 

    //to push data from array
    const addNewItem = () => {  
        if(qu === '' || an === ''){
            notify("Please, Complete your data","Error");
            return;
        }
        question.push({id: Math.random(), q: qu, a: an})
        setQu('');
        setAn('');
        onAdd();
    }

  return (
    <Row>
        <Col sm="5" className="my-2">
            <Form.Control value={qu} onChange={(e)=> setQu(e.target.value)} type="text" placeholder="Enter Question" />
        </Col>
        <Col sm="5" className="my-2">
            <Form.Control value={an} onChange={(e)=> setAn(e.target.value)} type="text" placeholder="Enter Answer" />
        </Col>
        <Col sm="2" className="mt-1 mb-3">
            <button onClick={addNewItem} className="btn-color w-100" type="submit">
                Add
            </button>
        </Col>
    </Row>
  )
}

export default FormInput;
