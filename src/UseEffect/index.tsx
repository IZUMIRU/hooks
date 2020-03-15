import React, { useState, useEffect } from 'react';

const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`UseEffect: ${count}`);
  });

  return (
    <React.Fragment>
      <h2>
        <a href="https://github.com/IZUMIRU/hooks/blob/master/src/UseEffect/index.tsx">
        UseEffect
        </a>
      </h2>
      <p>console.log(UseEffect: {count})</p>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button onClick={() => setCount(count - 1)}>
        Sub
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </React.Fragment>
  );
}

export default UseEffect;
