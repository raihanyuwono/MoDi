import { Grid } from '@chakra-ui/react';
import CardArticles from './details/CardArticles';
import axios from 'axios';
import { useEffect, useState } from 'react'; 

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
