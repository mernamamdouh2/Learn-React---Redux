import React, {useEffect, useState} from 'react'

const useFetchData = (url) => {
    const [state, setState] = useState([])

    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => setState(data))
    },[])
  
    return (
        [state]
    )
}

export default useFetchData;
