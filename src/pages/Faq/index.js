import React from 'react';
import { Container, Card } from './styles';

export default function Faq() {
  return (
    <Container maxWidth="lg">
      <Card>
        <h2>FAQ</h2>
        <h4>Seja bem vindo ao Mood Booster!</h4>
        <p>
          O Mood Booster é uma aplicação gratuita de busca para mídias de
          entretenimento.
        </p>
        <p>
          <strong>Sendo possível obter recomendações de:</strong>
        </p>
        <ul>
          <li>Filmes</li>
          <li>Séries</li>
          <li>Livros</li>
          <li>Música</li>
        </ul>
        <p>
          <strong>
            Existe basicamente duas formas de interagir com a aplicação:
          </strong>
          <p>1. Buscar recomendações sem cadastro.</p>
          <p>2. Criar uma conta e obter recomendações na área privada.</p>
        </p>
        <p>
          A principal diferença entre os dois modos, é que estando autenticado
          suas recomendações serão salvas em nossa base dados. Dessa forma é
          possível consulta-las novamente no futuro.
        </p>
        <p>
          Caso você não queira guardar as recomendações basta realizar uma busca
          através da tela inicial sem criar uma conta. Mas lembre-se, ao sair da
          página as recomendações serão perdidas.
        </p>
      </Card>
    </Container>
  );
}
