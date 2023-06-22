import { Button } from '@chakra-ui/react';
import axios from 'axios';

async function verification() {
  try {
    const url = window.location.href.split('/');
    const token = url[url.length - 1];

    // console.log("URL", url)
    // console.log("TOKEN", token);

    const res = await axios.patch(
      'https://minpro-blog.purwadhikabootcamp.com/api/auth/verify',
      {},
      {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      }
    );

    // console.log(res);
    alert(res.data.message)
  } catch (error) {
    // console.log(error)
    alert(error.response?.data);
  }
}

function Verify() {
  return (
    <Button p={2} onClick={verification}>
      Verify
    </Button>
  );
}

export default Verify;
