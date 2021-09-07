import { React } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AuthContext } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes />
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
