import React from 'react';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box bgColor={"lightPrimary"} minH={"100vh"}>
      <NavBar />
      <LandingPage />
    </Box>
  );
}

export default App;
