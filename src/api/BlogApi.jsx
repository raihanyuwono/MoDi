import axios from 'axios';
import Toast from '../components/Toast';

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
    return res.data;
  } catch (error) {
    console.log('GetPopular', error);
  }
}

async function likeBlog(toast, token, BlogId) {
  try {
    const res = await axios.post(
      `${API_BASE_URL}${API_BLOG}/like`,
      {
        BlogId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res);
    Toast(toast, {
      title: res.data,
      status: res.status,
    });

    return true;
  } catch (error) {
    console.log(error);
    Toast(toast, {
      title: error.response.data.err,
      status: error.response.status,
    });
    return false;
  }
}

async function dislikeBlog(toast, token, BlogId) {
  try {
    console.log(BlogId, token);
    const res = await axios.delete(
      `${API_BASE_URL}${API_BLOG}/unlike/${BlogId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res);
    Toast(toast, {
      title: res.data,
      status: res.status,
    });

    return true;
  } catch (error) {
    console.log(error);
    Toast(toast, {
      title: error.response.data.err,
      status: error.response.status,
    });
    return false;
  }
}

async function getBookmark(token) {
  try {
    const res = await axios.get(
      `${API_BASE_URL}${API_BLOG}/pagLike`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res);

    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function createBlog(toast, data){
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(
      `${API_BASE_URL}${API_BLOG}`,
      data,
      {
        headers : {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    console.log(res);
    Toast(toast, {
      title: res.data.message,
      status: res.status,
    })
  } catch (error) {
    console.log(error);
  }
}

export { getCategory, getLatest, getPopular, likeBlog, dislikeBlog, getBookmark, createBlog };
