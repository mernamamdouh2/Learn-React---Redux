import React, {useState, useMemo} from 'react'
import {Button} from 'react-bootstrap';

const Memo = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    const [counter,setCounter] = useState(0);
    const [test,setTest] = useState(0);

    const result = useMemo(()=>{
        return(
            <div style={{color:randomColor}}>
                Value is {counter} : {counter * 2} 
            </div>
        )
    }, [counter, randomColor])

  return (
    <div>
        {result}
        <Button onClick={()=> setCounter(counter +1)} variant="success">+</Button>
        <Button onClick={()=> setCounter(counter -1)} variant="danger">-</Button>
        <Button onClick={()=> setTest(test +1)} variant="info">test</Button>
    </div>
  )
}

export default Memo;
