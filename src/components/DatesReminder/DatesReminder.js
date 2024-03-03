import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import '../../CSS/DatesReminder.css';
import { person } from '../../DataBase/datesReminder';
import DatesCount from './DatesCount'
import DatesList from './DatesList'
import DatesAction from './DatesAction'

const DatesReminder = () => {
  const [personData, setPersonData]= useState(person)

  const onDeleteData= ()=>{
    setPersonData([])
  }

  const onViewData= ()=>{
    setPersonData(person)
  }

  useEffect(()=>{
    setPersonData([])
  },[])
  
  return (
    <div className='font color-body'>
      <Container className='py-5'>
        <DatesCount person={personData}/>
        <DatesList person={personData}/>
        <DatesAction deleteData={onDeleteData} showData={onViewData}/>
      </Container>
    </div>
  )
}

export default DatesReminder;
