import React,{useState,useEffect} from 'react'
import Button from "react-bootstrap/Button";
function Counterthree() {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        document.title="You clicked the button ${count} times"

    });
  
  
    return (
    <div>
        <button type='button' className='btn btn-success' onClick={()=>setcount(count+1)}>Clicked me {count} times</button>


    </div>
  )
}

export default Counterthree