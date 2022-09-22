import React from 'react'
import { useState } from 'react'

const TaskOne = () => {

    
        const [count, setCount] = useState(0)
        console.log(count,"count");
        const increment =()=>{
            setCount(count+1)
        }

        const handleDecrement=()=>{
            setCount(count-1)
            if (count === 0) {
                setCount(0)
            }
        }


  return (
    <>
    <h1>Counter App</h1>
    <div className='main'>
      
        <button className='increment' onClick={increment}>+</button>
        <div className='countDiv'><h1>Count : {count}</h1></div>
        <button className='decrement' onClick={handleDecrement}>-</button>
    </div>
    </>
  )
}

export default TaskOne
