import React from 'react';
import LandingPage from './pages/LandingPage';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box bgColor={"lightPrimary"} minH={"100vh"}>
      <LandingPage />
    </Box>
  );
}

export default App;
