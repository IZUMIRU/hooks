import React from 'react';
import UseState from 'UseState';
import UseEffect from 'UseEffect';
import UseMemo from 'UseMemo';
import UseCallback from 'UseCallback';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <h1><a href="https://ja.reactjs.org/docs/hooks-intro.html">React Hooks</a></h1>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
    </React.Fragment>
  );
}

export default App;
