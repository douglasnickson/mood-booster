import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Container } from './styles';

import logo from '~/assets/logo.png';

import FormSignUp from '~/components/SignUp';

export default function SignUp() {
  return (
    <Container maxWidth="lg">
      <FormSignUp />
    </Container>
  );
}
