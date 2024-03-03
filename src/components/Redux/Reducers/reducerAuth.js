
//2- Create reducer to set state and change it
export const reducerAuth = (state= { isLog: false }, action) =>{
    if(action.type === 'IsLogin'){
        return {isLog : true} //{isLog : true}
    }if(action.type === 'NotLogin'){
        return {isLog : false} //{isLog : false}
    }
    return state;
}