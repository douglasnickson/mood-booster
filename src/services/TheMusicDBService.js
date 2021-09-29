import axios from 'axios';
import { getRandomItems } from '../utils/Utils';

const BASE_URL = 'https://theaudiodb.com/api/v1/json/1/search.php';

class TheMusicDBService {
  basicFetch = async (endpoint) => {
    const response = await axios.get(`${BASE_URL}/?${endpoint}`);
    return response;
  };

  getArtistInfo = async (artists) =>
    Promise.all(
      artists.map(async (artist) => {
        const { name } = artist;
        const artistInfo = await this.basicFetch(`s=${name}`);

        let { genre, biography, image } = '';

        if (artistInfo.data.artists) {
          const response = artistInfo.data.artists[0];
          const { strGenre, strBiographyPT, strArtistThumb } = response;
          genre = strGenre;
          biography = strBiographyPT;
          image = strArtistThumb;
        }

        const data = {
          title: name || '',
          genre: genre || '',
          description: biography || '',
          image: image || '',
        };

        return data;
      })
    ).then((results) => {
      const artistsFilter = results.filter(
        (artist) => artist.genre && artist.description && artist.image
      );
      return getRandomItems(artistsFilter, 3);
    });
}

export default TheMusicDBService;
