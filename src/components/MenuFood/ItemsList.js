import React from 'react';
import { Card, Col, Row} from 'react-bootstrap';
import Zoom from 'react-awesome-reveal';

const ItemsList = ({itemsData}) => {
    return (
        <Row>
            <Zoom>
                {
                    itemsData.length >=1 ? (
                        itemsData.map((item) =>{
                            return(
                                <Col key={item.id} sm="12" className='mb-3'>
                                    <Card className='d-flex flex-row' style={{backgroundColor: '#f8f8f8'}}>
                                        <Card.Img className='img-item' variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title className='d-flex justify-content-between'>
                                                <div className='item-title'>
                                                    {item.title}
                                                </div>
                                                <div className='item-price'>
                                                    {item.price}
                                                </div>
                                            </Card.Title>
                                            <Card.Text className='py-2'>
                                                <div className='item-description text-start'>
                                                    {item.description}
                                                </div>
                                            </Card.Text>
                                        </Card.Body>  
                                    </Card>
                                </Col>
                            )
                        })
                    )
                    : <h3 className='text-center'>There is no Food Here</h3>
                }
            </Zoom>
        </Row>
    )
}

export default ItemsList;
