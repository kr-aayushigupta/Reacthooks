import React,{useState,createContext} from 'react'
import Component2 from './Component2'

const usercontext=createContext()
function Component1() {
    const [user,setuser]=useState("Aayushi Gupta")
  return (
    <div>
        <usercontext.Provider value={user}>
            <h3>{`Hello ${user}!`}</h3>
            <Component2></Component2>

        </usercontext.Provider>

    </div>
  )
}

export default Component1