import { Grid, useToast } from '@chakra-ui/react';
import CardWritten from './details/CardWritten';
import { useEffect, useState } from 'react';
import { delBlog, getWritten } from '../api/BlogApi';

function ContainerWritten() {
  const [items, setItems] = useState([]);
  const toast = useToast();

  async function fetchWritten() {
    const data = await getWritten({});
    setItems(data.result);
  }

  async function delblog(id, event) {
    if(event && event.stopPropagation) event.stopPropagation();

    await delBlog(toast, id);
    fetchWritten();
  }

  useEffect(() => {
    fetchWritten();
  }, []);

  return (
    <Grid w={'full'} templateColumns={'repeat(3, 1fr)'} gap={4}>
      <CardWritten items={items} delBlog={delblog} />
    </Grid>
  );
}

export default ContainerWritten;
