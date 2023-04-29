import { useEffect, useState } from 'react';
import Create from './pages/Create';
import Details from './pages/Details';
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material';

// 5f0f40

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#7400b8',
    },
    secondary: {
      main: '#004e64',
    },
  },
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('LOGGED_IN') !== null){
      setIsLoggedIn(Boolean(localStorage.getItem('LOGGED_IN')))
    }
  },[])


  return (
    <ThemeProvider theme={outerTheme}>
    <BrowserRouter>
    <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={!isLoggedIn? <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />: <Navigate to='/details' />}/>
          <Route path="/details" element={ isLoggedIn? <Details />: <Navigate to='/' />} />
          <Route path="/create" element={isLoggedIn? <Create />: <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
