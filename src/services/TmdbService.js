import axios from 'axios';
import { getGenresByMood, getRandomItems } from '../utils/Utils';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '51ddd78e00ac8b6d72fd5f516d1c5e45';

class TmdbService {
  basicFetch = async (endpoint) => {
    const response = await axios.get(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR`
    );
    return response.data;
  };

  getItemsByGenre = (genres, data) => {
    const result = [];
    genres.map((genre) => {
      const { id } = genre;
      const results = data.filter((item) => item.genre_ids.includes(id));
      return result.push(...results);
    });
    return result;
  };

  getMovies = async (mood) => {
    const topRated = await this.basicFetch(`/movie/top_rated`);
    const popular = await this.basicFetch(`/movie/popular`);

    const genres = getGenresByMood(mood);
    const allMovies = [...topRated.results, ...popular.results];
    const data = this.getItemsByGenre(genres, allMovies);

    return getRandomItems(data, 3);
  };

  getTvShows = async (mood) => {
    const topRated = await this.basicFetch(`/tv/top_rated`);
    const popular = await this.basicFetch(`/tv/popular`);

    const genres = getGenresByMood(mood);
    const allTvshows = [...topRated.results, ...popular.results];
    const data = this.getItemsByGenre(genres, allTvshows);

    return getRandomItems(data, 3);
  };
}

export default TmdbService;
