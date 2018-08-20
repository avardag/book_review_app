import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hocs/Layout';
import Home from './components/home/Home';
import BookView from './components/book/BookView';
import Login from './containers/admin/Login';
import Auth from './hocs/Auth'; //AuthenticationCheck hoc, is fn
//2nd arg to Auth hoc/fn is restriction lvl
// null = no authn needed, false= partial authn needed, true=full authn needed
import User from './components/admin/Admin';
import AddBook from './containers/admin/AddBook';
import UserReviews from './components/admin/UserReviews';
import EditBook from './containers/admin/EditBook';


function Routes() {
  return (
    <Layout>
      <Switch>
      <Route path='/' component={Auth(Home, null)} exact/>
      <Route path='/login' component={Auth(Login, false)} exact/>
      <Route path='/user' component={Auth(User, true)} exact/>
      <Route path='/user/add' component={Auth(AddBook, true)} exact/>
      <Route path='/user/edit-post/:id' component={Auth(EditBook, true)} exact/>
      <Route path='/user/user-reviews' component={Auth(UserReviews, true)} exact/>
      <Route path='/books/:id' component={Auth(BookView, null)} exact/>
      
      </Switch>
    </Layout>
  )
}

export default Routes
