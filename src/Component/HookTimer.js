import React,{useState,useEffect,useRef} from 'react'
import Button from "react-bootstrap/Button";

function Hooktimer() {

    const[timer,setTimer]=useState(0)
    const intervalref=useRef()

    useEffect(()=>{
            intervalref.current=setInterval(()=>{
                setTimer(prevTimer => prevTimer+1)
            },1000)

            return ()=>{
                clearInterval(intervalref.current)
            };


    },[])

  return (
    <div>

        Hook Timer using useEffect and useRef Hooks - {timer}
        <br></br>
        <button type="btn" className="btn btn-danger" onClick={()=>clearInterval(intervalref.current)}>Clear Hook Timer !</button>

    </div>
  )
}

export default Hooktimer