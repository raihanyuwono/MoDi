import React from 'react';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import { Box } from '@chakra-ui/react';
import { color } from './themes/Themes';

function App() {
  return (
    <Box bgColor={color.lightPrimary} minH={"100vh"}>
      <NavBar />
      <LandingPage />
    </Box>
  );
}

export default App;
