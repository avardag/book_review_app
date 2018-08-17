import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hocs/Layout';
import Home from './components/home/Home';
import BookView from './components/book/BookView';


function Routes() {
  return (
    <Layout>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/books/:id' component={BookView} exact/>
      
      </Switch>
    </Layout>
  )
}

export default Routes
