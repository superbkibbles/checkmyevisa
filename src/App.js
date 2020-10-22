import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
      <>
        <Route exact path='/' component={() => <div>hello</div>} />
        <Route exact path='/some' component={() => <div>Well</div>} />
      </>
  );
}

export default App;
