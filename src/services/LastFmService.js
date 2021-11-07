import axios from 'axios';
import { getMusicGenresByMood } from '../utils/Utils';
import TheMusicDBService from './TheMusicDBService';

const BASE_URL = 'https://ws.audioscrobbler.com/2.0';
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
      const theMusicDbService = new TheMusicDBService();
      results.forEach((result) => {
        artists.push(...result);
      });
      const artistsWithInfo = theMusicDbService.getArtistInfo(artists);
      return artistsWithInfo;
    });
  };
}

export default LastFmService;
