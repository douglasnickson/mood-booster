import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
};

PrivateRoute.defaultProps = {
  component: PropTypes.elementType,
};
