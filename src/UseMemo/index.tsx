import React, { useState, useMemo } from 'react';

const UseMemo: React.FC = () => {
  const [fastCount, setFastCount] = useState(0);
  const [slowCount, setSlowCount] = useState(0);

  const computeSlowCount = (slowCount: number) => {
    let i = 0;
    while (i < 1000000000) i++;
    return slowCount;
  };

  const newSlowCount = useMemo(() => computeSlowCount(slowCount), [slowCount]);
  // const newSlowCount = computeSlowCount(slowCount);

  return (
    <React.Fragment>
      <h2>
        <a href="https://github.com/IZUMIRU/hooks/blob/master/src/UseMemo/index.tsx">
        UseMemo
        </a>
      </h2>
      <p>slow</p>
      <p>{newSlowCount}</p>
      <button onClick={() => setSlowCount(slowCount + 1)}>
        Add
      </button>
      <button onClick={() => setSlowCount(slowCount - 1)}>
        Sub
      </button>
      <button onClick={() => setSlowCount(0)}>
        Reset
      </button>

      <p>fast（useMemo）</p>
      <p>{fastCount}</p>
      <button onClick={() => setFastCount(fastCount + 1)}>
        Add
      </button>
      <button onClick={() => setFastCount(fastCount - 1)}>
        Sub
      </button>
      <button onClick={() => setFastCount(0)}>
        Reset
      </button>
    </React.Fragment>
  );
};

export default UseMemo;
