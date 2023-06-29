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
import Read from './pages/Read';
import Footer from './components/Footer';
import Favourite from './pages/Favourite';

function App() {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState({ current: 1, last: 2 });
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
    setPostList(data.result);
    return data;
  }

  function resetPage(lastPage) {
    setPage({
      current: 1,
      last: lastPage,
    });
  }

  async function search(keySearch) {
    setCurrentSearch(keySearch);
    const data = await fetchPopular({ searchkey: keySearch });
    resetPage(data.page);
  }

  useEffect(() => {
    const data = fetchPopular({});
    const temp = { current: 1, last: data.page } 
    setPage(temp);
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
                page={page}
                setPage={setPage}
                resetPage={resetPage}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
          <Route path="/bookmark" element={<Favourite />} />
          <Route path="/verification/:token" element={<Verify />} />
          <Route
            path="/verification-change-email/:token"
            element={<Verify />}
          />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
        <Footer/>
      </Box>
    </>
  );
}

export default App;
