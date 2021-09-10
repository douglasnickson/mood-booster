import axios from 'axios';

import { getBookCategoryByMood, getRandomItems } from '../utils/Utils';

const BASE_URL = 'https://www.googleapis.com/books/v1';

class GoogleBooksService {
  basicFetch = async (endpoint) => {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data.items;
  };

  getBooks = async (mood) => {
    const categories = getBookCategoryByMood(mood);
    return Promise.all(
      categories.map(async (category) => {
        const { name } = category;
        const response = await this.basicFetch(`/volumes?q=${name}`);
        return response;
      })
    ).then((results) => {
      const data = [];
      const books = [];
      results.forEach((result) => data.push(...result));
      data.forEach((item) => books.push(item.volumeInfo));
      return getRandomItems(books, 3);
    });
  };
}

export default GoogleBooksService;
