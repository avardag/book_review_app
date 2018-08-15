import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';


function Routes() {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      
    </Switch>
  )
}

export default Routes
