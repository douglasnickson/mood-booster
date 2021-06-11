import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Field, Form, FormOrientation, Divider } from './styles';

export default function FormSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    alert(email + password);
  };
  return (
    <FormOrientation>
      <h2>Fazer Login</h2>
      <Divider />
      <Form>
        <Field
          id="input-email"
          label="E-mail"
          variant="outlined"
          size="small"
          type="email"
          value={email}
          onChange={handleEmail}
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
          onChange={handlePassword}
        />
      </Form>
      <Button variant="contained" color="secondary" onClick={handleSignIn}>
        Login
      </Button>
      <br />
      <p>
        Ainda não tem conta? <a href="/cadastro">Faça o cadastro.</a>
      </p>
    </FormOrientation>
  );
}
