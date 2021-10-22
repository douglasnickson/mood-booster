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
            <Link to="/">HOME</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/cadastro">CADASTRO</Link>
          </nav>
        </Content>
      </Container>
    </>
  );
}
