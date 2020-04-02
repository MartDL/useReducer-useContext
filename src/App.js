import React from 'react';
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'


import './App.css';

function App() {
  return (
    <div className="App">
      <h2>useReducer examples</h2>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
