import axios from 'axios';
import { getMusicGenresByMood, getRandomItems } from '../utils/Utils';

const BASE_URL = 'http://ws.audioscrobbler.com/2.0';
const API_KEY = '43baeba4ee73c2e487388ebcb48abc1a';

class LastFmService {
  basicFetch = async (endpoint) => {
    const response = await axios.get(
      `${BASE_URL}${endpoint}&api_key=${API_KEY}&format=json`
    );
    const { artist } = response.data.topartists;

    return artist;
  };

  getTopArtists = async (mood) => {
    const genres = getMusicGenresByMood(mood);
    return Promise.all(
      genres.map(async (genre) => {
        const { name } = genre;
        const response = await this.basicFetch(
          `/?method=tag.gettopartists&tag=${name}`
        );
        return response;
      })
    ).then((results) => {
      const artists = [];
      results.forEach((result) => {
        artists.push(...result);
      });
      return getRandomItems(artists, 3);
    });
  };
}

export default LastFmService;
