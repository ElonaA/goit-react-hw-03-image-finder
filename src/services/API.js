const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '19196130-53b5eb5481c178bbcfa09d2c1';

export function fetchGallery(searchQuery, page) {
  return fetch(`${BASE_URL}&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Картинка по такому запросу -  ${searchQuery} не найдена. `));
  });
}
