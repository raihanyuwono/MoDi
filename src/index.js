import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import Write from './pages/Write';
import { theme } from './themes/Themes';
import Verify from './pages/Verify';
import NavBar from './components/NavBar';
import { Storage } from './storage/Storage';
import Profile from './pages/Profile';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={Storage}>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/write" element={<Write />} />
          <Route path="/verification/:token" element={<Verify />} />
        </Routes>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
