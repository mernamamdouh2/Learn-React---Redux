import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap';

const Effect = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("hello from useEffect for the first time (when component gets mounted) without make rerender for component")
    }, [])
    useEffect(()=>{
        console.log("hello from useEffect for everytime count is changed")
    }, [count])
    useEffect(()=>{
        console.log("hello from useEffect for everytime component rerender")
    })
    
    const handleIncrese=()=> {
        setCount(count + 1)
    }
   
   
  return (
    <div>
        <Button onClick={handleIncrese} variant="success">+</Button>
        <label> Count is : {count}</label>
    </div>
  )
}

export default Effect;
