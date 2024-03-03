import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FetchAxios = () => {
    const [state1, setState1] = useState([])
    const [state2, setState2] = useState([])

    //Fetch
    const fetchData = async() =>{
        await fetch('https://jsonplaceholder.typicode.com/posts', 
            {method: 'GET'})
        .then(res => res.json())
        .then(data => setState1(data))
    }

    useEffect(()=>{
        fetchData();
    },[])
    ///////////////////////////////////////////////////////
    //Axios
    const fetchAxios = async() =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setState2(response.data)
    }
    useEffect(()=>{
        fetchAxios();
    },[])

        //{state[0].title}
    return (
        <div>
            <h3>Fetch API</h3>
            {state1.map((item)=>{
                return (<p>{item.title}</p>)
            })}
            <hr/>
            <h3>Axios API</h3>
            {state2.map((item)=>{
                return (<p>{item.title}</p>)
            })}
        </div>
    )
}

export default FetchAxios
