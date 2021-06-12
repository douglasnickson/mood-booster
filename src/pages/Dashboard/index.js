import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Content, GridContainer } from './styles';

import { useAuth } from '~/contexts/AuthContext';

export default function Dashboard() {
  const { logOut, currentUser } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

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
    <Container maxWidth="lg">
      <Content display="flex" p={1} justifyContent="center" alignItems="center">
        <GridContainer
          container
          spacing={3}
          justify="center"
          direction="column"
        >
          <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
              <div>Página Inicial</div>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
              >
                Sair
              </Button>
            </Grid>
          </Grid>
        </GridContainer>
      </Content>
    </Container>
  );
}
