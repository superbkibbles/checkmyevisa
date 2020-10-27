import React from 'react';
// import { Route, Switch } from 'react-router-dom'

import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
      <>
          <WelcomePage />
      </>
      // <Switch>
      //   <Route exact path='/' component={() => <div>hello</div>} />
      //   <Route exact path='/some' component={() => <div>Well</div>} />
      // </Switch>
  );
}

export default App;
