import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import { useAuth } from '~/contexts/AuthContext';
import { createUser } from '~/services/UserService';

import {
  Content,
  GridContainer,
  Logo,
  Field,
  Form,
  FormOrientation,
  Divider,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false);
      return setError('As senhas precisam ser iguais.');
    }

    const user = { name, email, password };
    return createUser(user, setError, setSuccess, setLoading, signUp);
  };

  return (
    <Container maxWidth="lg">
      <Content display="flex" p={1} justifyContent="center" alignItems="center">
        <GridContainer
          container
          spacing={3}
          justify="center"
          direction="column"
        >
          <Grid item xs={12}>
            <Logo src={logo} />
          </Grid>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
              <FormOrientation>
                <h2>Fazer Cadastro</h2>
                <Divider />
                <Form>
                  <Field
                    id="input-name"
                    label="Nome"
                    variant="outlined"
                    size="small"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form>
                <Form>
                  <Field
                    id="input-email"
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form>
                <Form>
                  <Field
                    id="input-password"
                    label="Senha"
                    variant="outlined"
                    size="small"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form>
                <Form>
                  <Field
                    id="input-confirm-password"
                    label="Confirmar Senha"
                    variant="outlined"
                    size="small"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSignUp}
                >
                  Cadastrar
                </Button>

                <br />
                {loading && <CircularProgress color="secondary" />}

                {error && (
                  <Alert severity="error">
                    Ocorreu um erro no cadastro. Por favor, tente novamente
                  </Alert>
                )}
                {success && (
                  <Alert severity="success">
                    Cadastro realizado com sucesso!
                  </Alert>
                )}
                <br />
                <p>
                  Já tem conta? <a href="/">Faça o login.</a>
                </p>
                <br />
              </FormOrientation>
            </Grid>
          </Grid>
        </GridContainer>
      </Content>
    </Container>
  );
}
