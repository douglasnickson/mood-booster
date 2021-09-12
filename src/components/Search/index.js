import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import { SelectItem, Form, FormOrientation, Divider } from './styles';

import TmdbService from '../../services/TmdbService';
import LastFmService from '../../services/LastFmService';
import GoogleBooksService from '../../services/GoogleBooksService';

import { parseData } from '../../utils/Utils';

export default function FormRecommendations() {
  const history = useHistory();

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
    const lastfmService = new LastFmService();
    const googleBooksService = new GoogleBooksService();

    if (!mood && !category) {
      alert('Você deve informar seu humor e selecionar uma categoria');
      return;
    }

    const moviesItems = [];
    const showsItems = [];
    const musicsItems = [];
    const booksItems = [];

    if (category === 'movies') {
      moviesItems.push(...(await tmdbService.getMovies(mood)));
    } else if (category === 'tvshows') {
      showsItems.push(...(await tmdbService.getTvShows(mood)));
    } else if (category === 'musics') {
      musicsItems.push(...(await lastfmService.getTopArtists(mood)));
    } else if (category === 'books') {
      booksItems.push(...(await googleBooksService.getBooks(mood)));
    } else {
      moviesItems.push(...(await tmdbService.getMovies(mood)));
      showsItems.push(...(await tmdbService.getTvShows(mood)));
      musicsItems.push(...(await lastfmService.getTopArtists(mood)));
      booksItems.push(...(await googleBooksService.getBooks(mood)));
    }

    const data = parseData(moviesItems, showsItems, musicsItems, booksItems);
    history.push('/recomendacoes', { data });
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
          <MenuItem value="tvshows">Séries</MenuItem>
          <MenuItem value="books">Livros</MenuItem>
          <MenuItem value="musics">Músicas</MenuItem>
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
