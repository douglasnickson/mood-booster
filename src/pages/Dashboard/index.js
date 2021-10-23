import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { FaSearch } from 'react-icons/fa';

import { Container, MainCard } from './styles';

import { useCollection } from '../../hooks/useFirestore';
import { limitString } from '~/utils/Utils';

export default function Dashboard() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = React.useState('panel-search');
  const [expandedRecommendation, setExpandedRecommendation] =
    React.useState('');

  const recommendations = useCollection('recommendations', setLoading);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleRecommendationChange = (panel) => (event, newExpanded) => {
    setExpandedRecommendation(newExpanded ? panel : false);
  };

  return (
    <Container>
      <MainCard>
        <h2>Dashboard</h2>
        <Accordion
          expanded={expanded === 'panel-recommendations'}
          onChange={handleChange('panel-recommendations')}
          style={{ width: '100%', padding: '5px', flexDirection: 'column' }}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <span>
                <FaSearch />
              </span>
              <span>
                {' '}
                <strong>Minhas Recomendações</strong>
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ flexDirection: 'column' }}>
            {recommendations &&
              recommendations.map((recommendation, i) => (
                <Accordion
                  expanded={expandedRecommendation === `panel-1-${i}`}
                  onChange={handleRecommendationChange(`panel-1-${i}`)}
                  style={{ flexDirection: 'column', padding: '5px' }}
                >
                  <AccordionSummary
                    aria-controls={`panel-content-${i}`}
                    id={`panel-header-${i}`}
                  >
                    <Typography>
                      <span>{`Buscado em: ${new Date(
                        recommendation.createdAt
                      ).toLocaleString('pt-BR')}`}</span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ flexDirection: 'column' }}>
                    {recommendation.data &&
                      recommendation.data.map((item) => (
                        <Accordion key={item.session}>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{item.session}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container spacing={2}>
                              {item.data &&
                                item.data.map((session) => (
                                  <Grid item xs={4}>
                                    <Card xs={6} sm={6}>
                                      <CardActionArea>
                                        <CardMedia
                                          component="img"
                                          height="350"
                                          image={session.image}
                                          title={session.title}
                                        />
                                        <CardContent>
                                          <Typography
                                            gutterBottom
                                            variant="h5"
                                            componet="h2"
                                          >
                                            {session.title}
                                          </Typography>
                                          <Typography
                                            gutterBottom
                                            variant="body2"
                                            componet="p"
                                            color="textSeconday"
                                          >
                                            {limitString(
                                              session.description,
                                              350
                                            )}
                                          </Typography>
                                        </CardContent>
                                      </CardActionArea>
                                    </Card>
                                  </Grid>
                                ))}
                              {item.data.length < 1 && (
                                <small style={{ padding: '5px' }}>
                                  Não foi obtido nenhuma recomendação nesta
                                  categoria.
                                </small>
                              )}
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            {recommendations.length < 1 && <p>Nenhuma recomendação obtida.</p>}
          </AccordionDetails>
        </Accordion>
      </MainCard>
    </Container>
  );
}
