import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hocs/Layout';
import Home from './components/home/Home';
import BookView from './components/book/BookView';
import Login from './containers/admin/Login';
import Auth from './hocs/Auth'; //AuthenticationCheck hoc, is fn
import User from './components/admin/Admin';


function Routes() {
  return (
    <Layout>
      <Switch>
      <Route path='/' component={Auth(Home)} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/user' component={Auth(User)} exact/>
      <Route path='/books/:id' component={BookView} exact/>
      
      </Switch>
    </Layout>
  )
}

export default Routes
