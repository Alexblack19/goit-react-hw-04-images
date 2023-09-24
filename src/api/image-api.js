import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38572739-8ecec7d616fae8b4ce60f4b21';
export const NUM_REQUESTED_PHOTOS = 12;

export const getAllPhoto = async (photoTag, page) => {
  console.log(page);
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: `${API_KEY}`,
      q: `${photoTag.toLowerCase()}`,
      safesearch: true,
      // image_type: 'photo',
      // orientation: 'horizontal',
      page: page,
      per_page: `${NUM_REQUESTED_PHOTOS}`,
    },
  });
  return response.data;
};
