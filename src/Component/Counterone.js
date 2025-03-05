import React,{useReducer} from 'react'
import Button from "react-bootstrap/Button";


// TO demonstrate the use of useReducer Hook
// MOre than one state transitions - increment,decrement,reset
const initialstate=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1 
        case 'reset':
                return initialstate  
        default:
            return state
    }
}

function Counterone() {

    const [count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
        <div>Count - {count}</div>
        <button type='button' className='btn btn-success' onClick={()=>dispatch('increment')}>Increment Counter</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-danger' onClick={()=>dispatch('decrement')}>Decrement Counter</button>
        {/* <br></br> */}
        <button type='button' className='btn btn-secondary' onClick={()=>dispatch('reset')}>Reset</button>

    </div>
  )
}

export default Counterone