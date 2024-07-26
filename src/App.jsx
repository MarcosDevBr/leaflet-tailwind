import { light } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoutes from './routes/Routes';
import paths from './routes/paths';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path={paths.root} element={<MainRoutes />} />
        </Routes>
      </BrowserRouter>

    </ThemeProvider>

   
  )
}

export default App
