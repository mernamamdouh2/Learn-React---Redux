import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesCount = ({person}) => {
  return (
    <Row className='justify-content-center'>
        <Col sm="8" className=''>You have {person.length} Meetings, Today</Col>
    </Row>
  )
}

export default DatesCount
