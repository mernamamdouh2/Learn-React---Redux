import React from 'react'
import useFetchData from '../customHooks/FetchData'

const CustomHook = () => {
  const [state] = useFetchData('https://jsonplaceholder.typicode.com/todos')

  return (
    <div>
      {state.map((item)=>{
        return (<p>{item.title}</p>)
      })}
    </div>
  )
}

export default CustomHook;
