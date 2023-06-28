import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import { theme } from './themes/Themes';
import NavBar from './components/NavBar';
import { Storage } from './storage/Storage';
import Auth from './components/Auth';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={Storage}>
      <ChakraProvider theme={theme}>
        <Auth>
          <NavBar />
          <App />
        </Auth>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
