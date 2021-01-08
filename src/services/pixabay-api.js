const KEY = '18756722-3cc55c22d219ddfaf06a08727';
const BASE_URL = `https://pixabay.com/api/`;

async function fetchImages(searchQuery, page) {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${KEY}`;

  return getData(url).then(response => {
    return response;
  });
}

async function getData(url) {
  const images = await fetch(url);
  const response = await images.json();
  return response;
}

const api = {
  fetchImages,
};

export default api;
