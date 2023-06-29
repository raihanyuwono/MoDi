import React from 'react';
import LandingPage from './pages/LandingPage';
import { Box } from '@chakra-ui/react';
import Profile from './pages/Profile';
import Write from './pages/Write';
import Verify from './pages/Verify';
import { Route, Routes } from 'react-router-dom';
import ResetPassword from './pages/ResetPassword';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import { getPopular } from './api/BlogApi';

function App() {
  const [postList, setPostList] = useState([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const [currentCategory, setCurrentCategory] = useState({
    id: 0,
    name: 'Home',
  });

  async function fetchPopular(prop) {
    const newProp = {
      ...prop,
      categoryId: currentCategory.id > 0 ? currentCategory.id : '',
      searchKey: currentSearch,
    };
    const data = await getPopular(newProp);
    setPostList(data);
  }

  function search(keySearch) {
    setCurrentSearch(keySearch);
    fetchPopular({searchkey: keySearch});
  }

  useEffect(() => {
    fetchPopular({});
  }, []);

  return (
    <>
      <NavBar funcSearch={search} />
      <Box
        bgColor={'lightPrimary'}
        minH={'calc(100vh - 4rem)'}
        w={'full'}
        h={'auto'}
      >
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                postList={postList}
                fetchPopular={fetchPopular}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/write" element={<Write />} />
          <Route path="/verification/:token" element={<Verify />} />
          <Route
            path="/verification-change-email/:token"
            element={<Verify />}
          />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
