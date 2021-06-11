import { React } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AuthContext } from './contexts/AuthContext';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes />
        <GlobalStyle />
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
