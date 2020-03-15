import React, { useState, useCallback } from 'react';

const functionsCounter = new Set()

const UseCallback: React.FC = () => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)
  
  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const incrementCounter2 = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  }, [otherCounter])

  functionsCounter.add(increment)
  functionsCounter.add(incrementCounter2)
  
  return (
    <React.Fragment>
      <h2>
        <a href="https://github.com/IZUMIRU/hooks/blob/master/src/UseCallback/index.tsx">
          useCallback
        </a>
      </h2>
      <p>Counter1: {count}</p>
      {/* Initial value is 2 */}
      <p>Counter2: {functionsCounter.size}</p>
      <button onClick={increment}>
        Add
      </button>
      <button onClick={incrementCounter2}>
        Add Counter2
      </button>
    </React.Fragment>
  )
}

export default UseCallback;
