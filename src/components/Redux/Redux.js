import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { inc } from './Actions/action'

const Redux = () => {
    //4- Access data from store reducer with useSelector hook. 
    const count = useSelector(state => state.Counter.counter)

    const isLog = useSelector(state => state.Auth.isLog)

    //5- make dispatchCounter to change state of counter in reducer using useDispatch hook.
    const dispatchCounter = useDispatch();

    return (
        <div>
            <h3>Counter: </h3>
            <h2>{count}</h2>
            <button onClick={()=>dispatchCounter(inc())}>Increment</button>
            <button onClick={()=>dispatchCounter({type:'DECREMENT'})}>Decrement</button>
            <button onClick={()=>dispatchCounter({type:'RESET'})}>Reset</button>

            {
                isLog === true ? <h2>You are Logged In as user</h2> : <h2>You not user, Please Register</h2>
            }

            <button onClick={()=>dispatchCounter({type:'IsLogin'})}>Make User</button>
            <button onClick={()=>dispatchCounter({type:'NotLogin'})}>Not User</button>
        </div>
    )
}

export default Redux;
