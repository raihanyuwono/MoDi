import { Flex, Grid, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { dislikeBlog, getBookmark } from '../api/BlogApi';
import CardBookmark from './details/CardBookmark';

function ContainerBookmark() {
  const [bookmarks, setBookmarks] = useState([]);
  async function fetchBookmark() {
    const token = localStorage.getItem('token');
    const data = await getBookmark(token);
    setBookmarks(data.result);
  }

  const toast = useToast();

  function dislike(BlogId) {
    // console.log(BlogId);
    const token = localStorage.getItem('token');
    dislikeBlog(toast, token, BlogId);
    fetchBookmark();
  }

  useEffect(() => {
    fetchBookmark();
  }, []);

  return (
    <Grid w={'full'} templateColumns={'repeat(3, 1fr)'} gap={4}>
      <CardBookmark items={bookmarks} dislike={dislike}/>
    </Grid>
  );
}

export default ContainerBookmark;
