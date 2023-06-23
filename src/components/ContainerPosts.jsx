import { Grid } from '@chakra-ui/react';
import CardArticles from './details/CardArticles';
import axios from 'axios';
import { useEffect, useState } from 'react';

const dummy = [
  {
    title: 'Harry Potter',
    img: 'https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.',
    likes: 40,
  },
  {
    title: 'Harry Potter',
    img: 'https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.',
    likes: 40,
  },
  {
    title: 'Harry Potter',
    img: 'https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.',
    likes: 40,
  },
  {
    title: 'Harry Potter',
    img: 'https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.',
    likes: 40,
  },
  {
    title: 'Harry Potter',
    img: 'https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.',
    likes: 40,
  },
  {
    title: 'Harry Potter',
    img: 'https://c4.wallpaperflare.com/wallpaper/114/1008/41/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla vel alias soluta! At voluptatibus molestias cumque ex distinctio commodi necessitatibus possimus minus et optio, facilis debitis quidem repellat adipisci.',
    likes: 40,
  },
];

function ContainerPosts() {
  const [postList, setPostList] = useState([]);

  async function fetchPost(categoryId = 1, sortType = "DESC", page = 1) {
    try {
      const res = await axios.get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${categoryId}&sort=${sortType}&page=${page}`
      );
      const dataList = res.data.result;
      console.log(dataList)
      setPostList(dataList);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, postList)

  return (
    <Grid
      p={3}
      gap={3}
      w={'calc(100% - 16rem)'}
      templateColumns={'repeat(2, 1fr)'}
    >
      <CardArticles articles={postList} />
    </Grid>
  );
}

export default ContainerPosts;
