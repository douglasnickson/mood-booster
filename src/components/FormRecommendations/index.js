import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import { SelectItem, Form, FormOrientation, Divider } from './styles';

export default function FormRecommendations() {
  const [mood, setMood] = useState('');
  const [category, setCategory] = useState('');

  const handleMood = (event) => {
    setMood(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleRecommendations = () => {
    alert(mood + category);
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
          <MenuItem value="Feliz">Feliz</MenuItem>
          <MenuItem value="Triste">Triste</MenuItem>
          <MenuItem value="Irritado">Irritado</MenuItem>
          <MenuItem value="Tenso">Tenso</MenuItem>
          <MenuItem value="Tranquilo">Tranquilo</MenuItem>
          <MenuItem value="Preocupado">Preocupado</MenuItem>
          <MenuItem value="Ansioso">Ansioso</MenuItem>
          <MenuItem value="Euforico">Euforico</MenuItem>
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
          <MenuItem value="Filmes">Filmes</MenuItem>
          <MenuItem value="Séries">Séries</MenuItem>
          <MenuItem value="Livros">Livros</MenuItem>
          <MenuItem value="Músicas">Músicas</MenuItem>
          <MenuItem value="Todas">Todas as opções</MenuItem>
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
