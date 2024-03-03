import React , {useContext} from 'react'

import {ColorContext} from './Context';
import CustomHook from './CustomHook';
import Effect from './Effect';
import FetchAxios from './FetchAxios';
import Memo from './Memo';
import Reducer from './Reducer';
import Ref from './Ref';
import State from './State';

const Header = () => {
  const name = "Merna"

  //5- Use Context
  // const {data, changeData} = useContext(ColorContext)
  const {data} = useContext(ColorContext)
  // changeData('yellow')
  
  // const {info,setInfo} = useContext(ColorContext)
  const {info} = useContext(ColorContext)

  return (
    <div>
      <h1>Header</h1>
      <h3 style={{color:'yellow' , backgroundColor:'black'}}>Hello {name}</h3>
      <hr/>

      <h2>Hooks</h2>
      <hr/>
      <h3>useState</h3>
      <State/>
      <hr/>
      <h3>useEffect</h3>
      <Effect/>
      <hr/>
      <Ref/>
      <hr/>
      <h3>useContext</h3>
      {data}
      <br/>
      {info.id} - {info.name}
      <hr/>
      <h3>useMemo</h3>
      <Memo/>
      <hr/>
      <h3>useReducer</h3>
      <Reducer/>
      <hr/>
      <br/>
      <h3>CustomHook</h3>
      <CustomHook/>
      <hr/>
      <br/>
      <h3>Fetch & Axios</h3>
      <FetchAxios/>
      <hr/>
    </div>
  )
}

export default Header;
