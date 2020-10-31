import React, { useState } from 'react';
import Aux from './hoc/Auxilliary/Auxilliary'
import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'
import Me from './containers/Me/Me'
import Todo from './containers/Todo/Todo'
import Organization from './containers/Organization/Organization'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  let [user, setUser] = useState({
    name: "Akash Shukla"
  })
  return (
    <Aux>
      <BrowserRouter>
        <Layout userName={user.name}>
          <Switch>
            <Route path="/me" component={Me}>
            </Route>
            <Route path="/Organization" component={Organization}>
            </Route>
            <Route path="/todo" component={Todo}>
            </Route>
            <Route path="/" component={Home}>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Aux>
  );
}

export default App;
