import { INCREMENT } from "../Type/type"

//2- Create reducer to set state and change it
export const reducerCounter = (state= { counter:0 }, action) =>{
    if(action.type === INCREMENT){
        return {counter : state.counter + 1} //{counter : state.counter + 1}
    }if(action.type === "DECREMENT"){
        return {counter : state.counter - 1}
    }if(action.type === "RESET"){
        return {counter : 0}
    }
    return state;
}