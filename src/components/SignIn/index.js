import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

import { Field, Form, FormOrientation } from './styles';

import { useAuth } from '~/contexts/AuthContext';

export default function FormSignIn({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { logIn } = useAuth();
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await logIn(email, password);
      history.push('/dashboard');
    } catch {
      setLoading(false);
      return setError('Usuário ou senha inválidos.');
    }
    setLoading(false);
    return false;
  };

  return (
    <FormOrientation>
      <h2>Fazer Login</h2>
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
      <Button variant="contained" color="secondary" onClick={handleSignIn}>
        Login
      </Button>
      <br />
      {loading && <CircularProgress color="secondary" />}

      {error && <Alert severity="error">{error}</Alert>}
      <br />
      <p>
        Ainda não tem conta? <Link to="/cadastro">Faça o cadastro.</Link>
      </p>
      <p>
        <span onClick={() => handleLogin()} aria-hidden="true">
          Voltar
        </span>
      </p>
    </FormOrientation>
  );
}

FormSignIn.propTypes = {
  handleLogin: PropTypes.func,
};

FormSignIn.defaultProps = {
  handleLogin: null,
};
