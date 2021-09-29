/* eslint-disable no-plusplus */
export function getGenresByMood(mood) {
  const genres = [];
  if (mood === 'Euforico' || mood === 'Feliz') {
    genres.push({ name: 'Ação', id: 28 });
    genres.push({ name: 'Aventura', id: 12 });
    genres.push({ name: 'Fantasia', id: 14 });
    genres.push({ name: 'Guerra', id: 10752 });
    genres.push({ name: 'Faroeste', id: 37 });
    genres.push({ name: 'Action & Adventure', id: 10759 });
  } else if (mood === 'Tranquilo') {
    genres.push({ name: 'Drama', id: 18 });
    genres.push({ name: 'Mistério', id: 9648 });
    genres.push({ name: 'Thriller', id: 53 });
    genres.push({ name: 'Terror', id: 27 });
    genres.push({ name: 'Ficção científica', id: 878 });
    genres.push({ name: 'Sci-Fi & Fantasy', id: 10765 });
  } else if (mood === 'Ansioso') {
    genres.push({ name: 'Documentário', id: 99 });
    genres.push({ name: 'História', id: 36 });
    genres.push({ name: 'Cinema TV', id: 10770 });
    genres.push({ name: 'Comédia', id: 35 });
    genres.push({ name: 'Música', id: 10402 });
    genres.push({ name: 'Animação', id: 16 });
  } else {
    genres.push({ name: 'Animação', id: 16 });
    genres.push({ name: 'Comédia', id: 35 });
    genres.push({ name: 'Família', id: 10751 });
    genres.push({ name: 'Música', id: 10402 });
    genres.push({ name: 'Romance', id: 10749 });
    genres.push({ name: 'Kids', id: 10762 });
  }

  return genres;
}

export function getMusicGenresByMood(mood) {
  const genres = [];
  if (mood === 'Euforico' || mood === 'Feliz') {
    genres.push({ name: 'rock' });
    genres.push({ name: 'electronic' });
    genres.push({ name: 'heavy metal' });
    genres.push({ name: 'pop' });
    genres.push({ name: 'hard rock' });
    genres.push({ name: '80s' });
    genres.push({ name: 'dance' });
  } else if (mood === 'Tranquilo') {
    genres.push({ name: 'alternative' });
    genres.push({ name: 'folk' });
    genres.push({ name: 'Progressive rock' });
    genres.push({ name: 'acoustic' });
    genres.push({ name: 'indie' });
    genres.push({ name: '90s' });
  } else {
    genres.push({ name: 'jazz' });
    genres.push({ name: 'folk' });
    genres.push({ name: 'instrumental' });
    genres.push({ name: 'Classical' });
    genres.push({ name: 'blues' });
    genres.push({ name: 'acoustic' });
  }

  return genres;
}

export function getBookCategoryByMood(mood) {
  const genres = [];
  if (mood === 'Euforico' || mood === 'Feliz') {
    genres.push({ name: 'fiction' });
    genres.push({ name: 'true+crime' });
    genres.push({ name: 'young+adult+fiction' });
    genres.push({ name: 'action' });
    genres.push({ name: 'war' });
  } else if (mood === 'Tranquilo') {
    genres.push({ name: 'history' });
    genres.push({ name: 'drama' });
    genres.push({ name: 'biography+autobiography' });
    genres.push({ name: 'literary+criticism' });
    genres.push({ name: 'philosophy' });
    genres.push({ name: 'social+science' });
  } else {
    genres.push({ name: 'self+help' });
    genres.push({ name: 'religion' });
    genres.push({ name: 'poetry' });
    genres.push({ name: 'humor' });
    genres.push({ name: 'comedy' });
    genres.push({ name: 'health+fitness' });
    genres.push({ name: 'body+mind+spirit' });
    genres.push({ name: 'family+relationships' });
  }

  return genres;
}

export function getRandomItems(arr, n) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function parseMoviesAndShows(items, session) {
  const data = [];

  if (!items) return { session, data };

  items.forEach((item) => {
    const { overview, title, poster_path } = item;
    data.push({
      description: overview || '',
      title: title || '',
      image: `https://image.tmdb.org/t/p/w300${poster_path}`,
    });
  });
  return { session, data };
}

function parseBooks(items, session) {
  const data = [];
  if (!items) return { session, data };

  items.forEach((item) => {
    const { description, title, imageLinks } = item;
    data.push({
      description: description || '',
      title: title || '',
      image: imageLinks.thumbnail || '',
    });
  });
  return { session, data };
}

export function parseData(movies, tvshows, musics, books) {
  const result = [];

  result.push(parseMoviesAndShows(movies, 'Filmes'));
  result.push(parseMoviesAndShows(tvshows, 'Tv Shows'));
  result.push({ session: 'Músicas', data: musics });
  result.push(parseBooks(books, 'Livros'));
  return result;
}
