import React, { useEffect,useRef} from 'react'

function Inputfocus() {
    const inputref= useRef(null)

    useEffect(()=>{
        inputref.current.focus()
    },[])

  return (
    <div>
        <label>Name: </label>
        <input ref={inputref} type='text' placeholder='Enter your Name'></input>
    </div>
  )
}

export default Inputfocus