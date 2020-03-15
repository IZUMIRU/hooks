import React, { useState } from 'react';

const UseState: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h2>
        <a href="https://github.com/IZUMIRU/hooks/blob/master/src/UseState/index.tsx">
        UseState
        </a>
      </h2>
      <p>{count}</p>
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

export default UseState;
