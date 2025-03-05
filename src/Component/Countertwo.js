import React,{useReducer} from 'react'
import Button from "react-bootstrap/Button";
// import 'src/Styles/Mystyle.css'


// TO demonstrate the use of useReducer Hook
// MOre than one state transitions - increment,decrement,reset
const initialstate={
    firstcounter : 0,
    secondcounter : 10
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstcounter : state.firstcounter+action.value}
        case 'decrement':
            return {...state,firstcounter : state.firstcounter-action.value}
        case 'increment2':
                return {...state,secondcounter : state.secondcounter+action.value}
        case 'decrement2':
                return {...state,secondcounter : state.secondcounter-action.value}
        case 'reset':
                return initialstate  
        default:
            return state
    }
}

function Countertwo() {

    const [count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
        <div>Counter 1 - {count.firstcounter}</div>
        <div>Counter 2 - {count.secondcounter}</div>

        
        <button type='button' className='btn btn-success' onClick={()=>dispatch({type :'increment' ,value :1})}>Increment Counter1 by 1</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-danger' onClick={()=>dispatch({type :'decrement' ,value :1})}>Decrement Counter1 by 1</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-success' onClick={()=>dispatch({type :'increment' ,value :5})}>Increment Counter1 by 5</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-danger' onClick={()=>dispatch({type :'decrement' ,value :5})}>Decrement Counter1 by 5</button>
        {/* <br></br> */}

        <button type='button' className='btn btn-success' onClick={()=>dispatch({type :'increment2' ,value :1})}>Increment Counter2 by 1</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-danger' onClick={()=>dispatch({type :'decrement2' ,value :1})}>Decrement Counter2 by 1</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-success' onClick={()=>dispatch({type :'increment2' ,value :5})}>Increment Counter2 by 5</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-danger' onClick={()=>dispatch({type :'decrement2' ,value :5})}>Decrement Counter2 by 5</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-secondary' onClick={()=>dispatch({type :'reset'})}>Reset</button>
        </div>
   
  )
}

export default Countertwo