import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import { SelectItem, Form, FormOrientation, Divider } from './styles';

import TmdbService from '../../services/TmdbService';

export default function FormRecommendations() {
  const [mood, setMood] = useState('');
  const [category, setCategory] = useState('');

  const handleMood = (event) => {
    setMood(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleRecommendations = async () => {
    const tmdbService = new TmdbService();
    // eslint-disable-next-line no-console
    console.log(await tmdbService.getMovies(mood));
    // eslint-disable-next-line no-console
    console.log(await tmdbService.getTvShows(mood));
  };

  return (
    <FormOrientation>
      <h2>Buscar Recomendações</h2>
      <Divider />
      <Form>
        <InputLabel shrink id="mood-label">
          <b>Como você está se sentindo?</b>
        </InputLabel>
        <SelectItem
          labelId="mood-label"
          id="mood-select"
          value={mood}
          onChange={handleMood}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Selecione uma opção
          </MenuItem>
          <MenuItem value="Euforico">Euforico</MenuItem>
          <MenuItem value="Feliz">Feliz</MenuItem>
          <MenuItem value="Tranquilo">Tranquilo</MenuItem>
          <MenuItem value="Ansioso">Ansioso</MenuItem>
          <MenuItem value="Triste">Triste</MenuItem>
          <MenuItem value="Irritado">Irritado</MenuItem>
          <MenuItem value="Depressivo">Depressivo</MenuItem>
        </SelectItem>
      </Form>
      <Form>
        <InputLabel shrink id="category-label">
          <b>Tipos de recomendações?</b>
        </InputLabel>
        <SelectItem
          labelId="category-label"
          id="category-select"
          value={category}
          onChange={handleCategory}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Selecione uma opção
          </MenuItem>
          <MenuItem value="movies">Filmes</MenuItem>
          <MenuItem value="tvshow">Séries</MenuItem>
          <MenuItem value="books">Livros</MenuItem>
          <MenuItem value="music">Músicas</MenuItem>
          <MenuItem value="all">Todas as opções</MenuItem>
        </SelectItem>
      </Form>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleRecommendations}
      >
        Buscar
      </Button>
    </FormOrientation>
  );
}
