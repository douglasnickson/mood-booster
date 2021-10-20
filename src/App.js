import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { AuthContext } from './contexts/AuthContext';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <>
          <Header />
          <Routes />
          <Footer />
          <GlobalStyle />
        </>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
