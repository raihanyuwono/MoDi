import React from 'react';
import LandingPage from './pages/LandingPage';
import { Box } from '@chakra-ui/react';
import Profile from './pages/Profile';
import Write from './pages/Write';
import Verify from './pages/Verify';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Box bgColor={'lightPrimary'} minH={'calc(100vh - 4rem)'} h={"auto"}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/verification/:token" element={<Verify />} />
      </Routes>
    </Box>
  );
}

export default App;
