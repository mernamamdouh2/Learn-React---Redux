import React, {useRef,useContext} from 'react'
import {Button} from 'react-bootstrap';
import {ColorContext} from './Context';

const Ref = () => {
    const valueInput = useRef('')

    const {data, changeData} = useContext(ColorContext)

    const handleFocus=()=>{
      valueInput.current.focus()
      // console.log(valueInput.current.value);
      changeData(valueInput.current.value)
    }
    
  return (
    <div>
        <h3>useRef</h3>
        <input type="text" ref={valueInput} value={data}/>
        <Button onClick={handleFocus} variant="info">Focus</Button>
    </div>
  )
}

export default Ref;
