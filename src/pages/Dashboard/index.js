import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { FaSearch } from 'react-icons/fa';

import { Content, GridContainer } from './styles';

import { useAuth } from '~/contexts/AuthContext';
import FormRecommendations from '../../components/Search';

export default function Dashboard() {
  const { logOut, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [expanded, setExpanded] = React.useState('panel-search');

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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
          <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
              <Accordion
                expanded={expanded === 'panel-search'}
                onChange={handleChange('panel-search')}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>
                    <span>
                      <FaSearch />
                    </span>
                    <span>Buscar Recomendações</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormRecommendations />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel-recommendations'}
                onChange={handleChange('panel-recommendations')}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>
                    <span>
                      <FaSearch />
                    </span>
                    <span>Minhas Recomendações</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
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
