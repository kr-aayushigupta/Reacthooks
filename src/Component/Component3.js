import React,{usercontext,useContext} from 'react'

function Component3() {

    const user = useContext(usercontext);
  return (
    <div>
            <h4>Component 5</h4>
            <h4>{`Hello ${user} again!`}</h4>


    </div>
  )
}

export default Component3