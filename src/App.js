import React from 'react';
import Aux from './hoc/Auxilliary/Auxilliary'
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'

function App() {
  return (
    <Aux>
      <Layout>
        <Home />
      </Layout>
    </Aux>
  );
}

export default App;
