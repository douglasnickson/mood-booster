import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Content, GridContainer, Logo } from './styles';

import FormRecommendations from '../../components/FormRecommendations';
import FormSignIn from '../../components/FormSignIn';

import logo from '~/assets/logo.png';

export default function Home() {
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
            <Grid item xs={6}>
              <FormRecommendations />
            </Grid>
            <Grid item xs={6}>
              <FormSignIn />
            </Grid>
          </Grid>
        </GridContainer>
      </Content>
    </Container>
  );
}
