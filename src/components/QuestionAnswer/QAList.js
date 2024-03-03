import React from 'react'
import { Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { question } from '../../DataBase/questionAnswer';

const QAList = ({data, deleteOne}) => {
    const dataLocal = JSON.parse(localStorage.getItem('items'));

    //to delete one item from array
    const onDeleteItem = (ID) =>{
        if(localStorage.getItem('items') != null){
            const index = question.findIndex((item) => item.id === ID); 
            question.splice(index, 1);
            deleteOne(question);
        }
    }
  return (
    <Row>
        <Accordion>
            {
                localStorage.getItem('items') != null ? (dataLocal.map((item, index)=>{
                    return (<Accordion.Item key={index} eventKey={item.id}>
                        <Accordion.Header>{item.q}</Accordion.Header>
                        <Accordion.Body className="text-start">
                            <div className='px-3 d-inline'>{item.a}</div>
                            <button onClick={()=> onDeleteItem(item.id)} className="btn-color">
                                Delete Question
                            </button>
                        </Accordion.Body>
                    </Accordion.Item>)
                })) : <h2 className='fs-4 text-center p-4'>There is No Questions Now</h2>
            }
        </Accordion>
    </Row>
  )
}

export default QAList;
