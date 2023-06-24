import { Grid } from '@chakra-ui/react';
import CardArticles from './details/CardArticles';

function ContainerPosts({postList}) {
  return (
    <Grid p={3} gap={3} templateColumns={'repeat(2, 1fr)'}>
      <CardArticles articles={postList} />
    </Grid>
  );
}

export default ContainerPosts;
