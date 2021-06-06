import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React from 'react';

import Signin from './signin';
import Signup from './signup';


function App() {


  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Signin />
          
          <Link to="/signup">
            <p>sign up</p>
          </Link>

          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
