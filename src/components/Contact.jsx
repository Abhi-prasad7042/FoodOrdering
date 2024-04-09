import React from 'react'
import { useState } from 'react'

const Contact = () => {

    const [count, setCount] = useState(0)
    const click = ()=>{
        console.log(count)
        setCount(count+1)
        console.log(count)
    }

  return (
    <div>
       <button onClick={click}>{count}</button>
    </div>
    
  )
}

export default Contact