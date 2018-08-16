import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Layout from './hocs/Layout';


function Routes() {
  return (
    <Layout>
      <Switch>
      <Route path='/' component={Home} exact/>
      
      </Switch>
    </Layout>
  )
}

export default Routes
