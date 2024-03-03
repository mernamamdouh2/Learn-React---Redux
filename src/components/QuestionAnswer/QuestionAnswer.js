import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../CSS/QuestionAnswer.css';
import FormInput from './FormInput';
import QAList from './QAList';
import { question } from '../../DataBase/questionAnswer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionAnswer = () => {
    const [questions, setQuestions] = useState(question); 

    //to add new item
    const addItem = () => {
        localStorage.setItem( "items", JSON.stringify([...question]));
        setQuestions([...question])
        notify("Your question has been added successfully!","Success");
    }

    //to delete all data items
    const deleteAllItems = () => {
        localStorage.removeItem("items");   
        question.splice(0, question.length);
        setQuestions([])
        notify("All questions has been deleted successfully!","Success");
    }

    //to delete one data item from array
    const deleteOneItem = (item) => {
        localStorage.setItem( "items", JSON.stringify([...item]));
        setQuestions([...item])
        if(item.length <= 0){
            deleteAllItems();
        }
        notify("Your question has been deleted successfully!","Success");
    }

    //to push notifaction
    const notify = (message, type) => {
        if (type === "Error"){
            toast.error(message)
        }else if (type === "Success"){
            toast.success(message)
        }
        
    };

    return (
        <div className='font text-center color-body'>
            <Container className='p-5'>
                <Row className="justify-content-center">
                    <Col sm="4">
                        <div className="fs-3 text-center py-2">Comman Question & Answer</div>
                    </Col>
                    <Col sm="8">
                        <FormInput onAdd={addItem} notify={notify}/>
                        <QAList data={questions} deleteOne={deleteOneItem}/>
                        {
                            localStorage.getItem('items') != null ? (
                                <button onClick={deleteAllItems} className="btn-color w-100 my-3">
                                    Delete All Questions
                                </button>
                            ) : null
                        }
                    </Col>
                </Row>
                <ToastContainer/>
            </Container>
        </div>
  )
}

export default QuestionAnswer;
