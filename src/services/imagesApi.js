import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '19196130-53b5eb5481c178bbcfa09d2c1';

const fetchGallery = async (query, currentPage) => {
  const { data } = await axios.get(
    `${BASE_URL}&q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data;
};

export default fetchGallery;
