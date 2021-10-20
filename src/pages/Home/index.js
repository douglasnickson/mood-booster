import React, { useState } from 'react';

import { Container } from './styles';

import FormRecommendations from '../../components/Search';
import FormSignIn from '../../components/SignIn';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (event) => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Container maxWidth="lg">
        {showLogin ? (
          <FormSignIn handleLogin={handleLogin} />
        ) : (
          <FormRecommendations handleLogin={handleLogin} />
        )}
      </Container>
    </>
  );
}
