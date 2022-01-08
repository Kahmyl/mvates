import Home from '../pages';
import Login from '../pages/login';
import Register from '../pages/register';
import Result from '../pages/Result';
import Details from '../pages/Details';
import Vote from '../pages/vote';
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

// const { isAuth } = useSelector((store: RootState) => ({isAuth: store.auth.isAuth}))
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />

              <Route path="/result" element={<Result/>} />

              <Route path="/charts/:id" element={<Details/>} />
            
              <Route path="/register" element={<Register />} />
            
              <Route path="/login" element={<Login />} />

              <Route path="/vote/:id" element={<Vote />} />
            </Routes>
          </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
