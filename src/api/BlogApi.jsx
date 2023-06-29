import axios from 'axios';

const API_BASE_URL = 'https://minpro-blog.purwadhikabootcamp.com';
const API_BLOG = '/api/blog';

async function getCategory() {
  try {
    const res = await axios.get(`${API_BASE_URL}${API_BLOG}/allCategory`);
    return res.data;
  } catch (error) {
    console.log('GetCategory', error);
    return null;
  }
}

async function getLatest({
  categoryId = '',
  sortType = 'DESC',
  page = 1,
  limit = 10,
}) {
  try {
    const res = await axios.get(
      `${API_BASE_URL}${API_BLOG}?id_cat=${categoryId}&sort=${sortType}&page=${page}&size=${limit}`
    );
    return res.data.result;
  } catch (error) {
    console.log('GetLeatest', error);
    return null;
  }
}

async function getPopular({
  page = 1,
  orderBy = 'total_fav',
  sortType = 'DESC',
  categoryId = '',
  searchKey = '',
  size = 10,
}) {
  try {
    const res = await axios.get(
      `${API_BASE_URL}${API_BLOG}/pagFav?page=${page}&orderBy=${orderBy}&sort=${sortType}&id_cat=${categoryId}&search=${searchKey}&size=${size}`
    );
    return res.data.result;
  } catch (error) {
    console.log('GetPopular', error);
  }
}

export { getCategory, getLatest, getPopular };
