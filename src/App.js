import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';

function App() {

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <SnackbarProvider>
          <AppRouter />
        </SnackbarProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
