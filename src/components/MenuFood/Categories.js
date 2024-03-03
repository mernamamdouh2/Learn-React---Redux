import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Roll from 'react-awesome-reveal';

const Categories = ({filterbyCategory,allCategories}) => {

    //to filter by category
    const onFilter = (cat) => {
        filterbyCategory(cat)
    }

    return (
        <Row className='my-2 mb-5'>
            <Col xs="12" className="d-flex justify-content-center">
                <Roll>
                    {
                        allCategories.length >=1 ? (
                            allCategories.map((cat) => {
                                return(
                                    <div key={cat.id}>
                                        <button onClick={()=> onFilter(cat)} className='btn mx-2'>{cat}</button>
                                    </div>
                                )
                            })
                        ) : <h4>There is no category now</h4>   
                    }
                </Roll>
            </Col>
        </Row>
    )
}

export default Categories;
