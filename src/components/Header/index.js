import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, Content } from './styles';

import { useAuth } from '~/contexts/AuthContext';

export default function Header() {
  const history = useHistory();

  const { currentUser, logOut } = useAuth();
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');

    try {
      await logOut();
      history.push('/');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <Container>
        <Content>
          <h1>
            Mood <span>Booster</span>
          </h1>
          <nav>
            <Link to="/">HOME</Link>
            {currentUser && <Link to="/dashboard">RECOMENDAÇÕES</Link>}
            <Link to="/faq">FAQ</Link>
            {!currentUser && <Link to="/cadastro">CADASTRO</Link>}
            {currentUser && (
              <button type="button" onClick={handleLogout}>
                SAIR
              </button>
            )}
          </nav>
        </Content>
      </Container>
    </>
  );
}
