import React from 'react'
import { Alert } from 'react-bootstrap';

const NotFound = (props) => {
  return (
    <Alert variant={props.color}>
        {props.message}
    </Alert>
  )
}

export default NotFound;
