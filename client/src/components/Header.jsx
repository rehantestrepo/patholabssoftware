import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';

export default function Header({setIsLoggedIn, isLoggedIn}) {

  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('LOGGED_IN')
    navigate("/")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PathoLab
          </Typography>
           {isLoggedIn && <>
          <Button color="inherit" onClick={logout}>Logout</Button>
          {location.pathname !== '/create' && (
          <Button color="inherit">
           <Link to='/create' style={{textDecoration: 'none', color: 'inherit'}}>
            Create
            </Link>  
            </Button>
          )}
           </>
            }
        </Toolbar>
      </AppBar>
    </Box>
  );
}