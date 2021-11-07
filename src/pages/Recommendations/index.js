/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { Container, MainCard } from './styles';
import { limitString } from '~/utils/Utils';

import Icons from '../../components/Icons';

export default function Recommendations() {
  const location = useLocation();

  const { data } = location.state;

  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(data);
  }, [data]);

  return (
    <>
      <Container>
        <MainCard>
          <h2>Recomendações</h2>

          {content.length > 0 &&
            content.map((item) => (
              <Accordion key={item.session} style={{ width: '100%' }}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.session}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    {item.data &&
                      item.data.map((session, i) => (
                        <Grid
                          item
                          xs={4}
                          key={`${item.session}-${Math.floor(
                            Math.random() * 99999
                          )}`}
                        >
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
                                  {limitString(session.description, 350)}
                                </Typography>
                              </CardContent>
                              <Icons session={item.session} />
                            </CardActionArea>
                          </Card>
                        </Grid>
                      ))}
                    {item.data.length < 1 && (
                      <small style={{ padding: '5px' }}>
                        Não foi obtido nenhuma recomendação nesta categoria.
                      </small>
                    )}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
        </MainCard>
      </Container>
    </>
  );
}
