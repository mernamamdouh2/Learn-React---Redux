import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

const State = () => {
    const [count,setCount] = useState(0);
    const [text,setText] = useState('Count');
    const handleIncrese=()=> {
        setCount(count + 1)
    }
    const handledecrese=()=> {
        setCount(count - 1)
    }

    const handleInput=(e)=> {
      setText(e.target.value)
      // console.log(text)
    }
  return (
    <div>
        <Button onClick={handleIncrese} variant="success">+</Button>
        <Button onClick={handledecrese} variant="danger">-</Button>
        <label> {text} is : {count}</label>
        <br/>
        <br/>
        <input type="text" value={text} onChange={handleInput}/>
        <br/>
        <br/>
    </div>
  )
}

export default State;
