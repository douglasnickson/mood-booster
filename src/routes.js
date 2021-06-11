import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" exact component={SignUp} />
    </Switch>
  );
}
