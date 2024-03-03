import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const DatesAction = ({deleteData,showData}) => {
  return (
    <Row className='justify-content-center'>
        <Col sm="4" className='my-1'>
            <Button onClick={deleteData} className='btn-style'>Delate All</Button>
        </Col>
        <Col sm="4" className='my-1'>
            <Button onClick={showData} className='btn-style'>Show All Data</Button>
        </Col>
    </Row>
  )
}

export default DatesAction
