import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Recommendations from '~/pages/Recommendations';

import PrivateRoute from './components/Auth/PrivateRoute';
import GlobalStyle from './styles/global';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" exact component={SignUp} />
      <Route path="/recomendacoes" exact component={Recommendations} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <GlobalStyle />
    </Switch>
  );
}
