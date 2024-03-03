import React, {useReducer} from 'react'
import {Button} from 'react-bootstrap';
import ReducerTest from '../Reducer/ReducerTest';

const initialValue={count:0}

const Reducer = () => {
    const [state,dispatch] = useReducer(ReducerTest, initialValue);

    return (
        <div>
            Value is: {state.count} 
            <Button onClick={()=> dispatch({type:'increment'})} variant="success">+</Button>
            <Button onClick={()=> dispatch({type:'decrement'})} variant="danger">-</Button>
            <Button onClick={()=> dispatch({type:'reset'})} variant="info">Reset</Button>
        </div>
    )
}

export default Reducer;
