import React, {createContext,useState} from 'react'

//1- Create Context
const ColorContext = createContext();  //ContextApi

//2- Create Provider
const ContextProvider = ({children}) => {
    //6- Update data in Context
    const [data,setData] = useState('red');
    const [info,setInfo] = useState({id:'1',name:'Bella'});

    const changeData=(color)=>{
        setData(color)
    }
    const changeInfo=(id,name)=>{
        setInfo({id, name})    // = setInfo({id:id, name=name})
    }

    return (
        <ColorContext.Provider value={{data , changeData , info , changeInfo}}>
            {children}
        </ColorContext.Provider>
    )
}

//3- Export context to use , Provider to wrap all component
export { ContextProvider , ColorContext};
