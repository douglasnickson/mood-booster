import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Content, GridContainer, Logo } from './styles';

import logo from '~/assets/logo.png';

import FormSignUp from '~/components/SignUp';

export default function SignUp() {
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
              <FormSignUp />
            </Grid>
          </Grid>
        </GridContainer>
      </Content>
    </Container>
  );
}
