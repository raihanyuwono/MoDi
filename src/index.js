import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import NewStory from './pages/NewStory';
import { theme } from './themes/Themes';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newstory" element={<NewStory />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
