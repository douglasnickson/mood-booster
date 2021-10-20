import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <Content>
          <h1>
            Mood <span>Booster</span>
          </h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        </Content>
      </Container>
    </>
  );
}
