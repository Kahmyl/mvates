import Polls from '../components/Polls';
import Login from '../pages/login';
import { useState } from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components"
import { store } from '../redux';
import { lightTheme, darkTheme } from "../theme"
import Navbar from '../components/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Navbar/>
          <Router>
            <Routes>
              <Route path="/poll" element={<Polls/>} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login/>} />
            </Routes>
          </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
