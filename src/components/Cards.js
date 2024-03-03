import React from 'react';
import {Button, Card} from 'react-bootstrap';

const Cards = ({title,description,img,click,children}) => {
    const handleClick = ()=>{
        click(title)
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button onClick={handleClick}
            variant="primary">Go somewhere</Button>
            {children}
      </Card.Body>
    </Card>
  )
}

export default Cards;
