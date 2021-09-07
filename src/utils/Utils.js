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
