import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialUserValue = {
  username:'',
  password: ''
}

const initialErrorsValue = {
  usernameError: false,
  passwordError: false
}

const Login = ({setIsLoggedIn, loggedIn}) => {

  const [user, setUser] = useState(initialUserValue)
  const [userErrors, setUserErrors] = useState(initialErrorsValue)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))

  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserErrors(initialErrorsValue)

    if (!user.username) {
      setUserErrors((prevError) => ({
        ...prevError,
        usernameError: true
      }))
    }

    if (!user.password) {
      setUserErrors((prevError) => ({
        ...prevError,
        passwordError: true
      }))
    }

    if (user.username && user.password) {
      axios
			.post("/login", user)
			.then(res => {
        setIsLoggedIn(true)
        localStorage.setItem('LOGGED_IN', 'true')
        navigate("/details")
      })
			.catch(err => alert(err.response.data));
      
    }

  }

  return (
    <Stack justifyContent='center' alignItems='center' sx={{height: 'calc(100vh - 64px)', backgroundImage: 'url(images/lab-bg.jpg)', backgroundSize: 'cover'}}>
      <Stack sx={{width: {xs: '80%', sm: '50%'}, padding: {xs: '1rem' ,md: '4rem'},
    borderRadius: '15px',
    boxShadow: '0px 2px 9px 1px #004e64',
    textShadow: '0 0 #004e64', backgroundColor: '#fefefe'}}>
        <Typography variant="h4" component="h1" textAlign='center' color="primary">
            Login
        </Typography>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
        sx={{
          my: '1.3rem',
          display: 'block',
          input: {color: '#27187e'}
      }}
        label="Username"
        name='username'
        value={user.username}
        onChange={handleChange}
        variant='outlined'
        fullWidth
        required
        error={userErrors.usernameError}
        helperText={userErrors.usernameError && 'Username is required'}
        />
        <TextField
        sx={{
          my: '1.3rem',
          display: 'block',
          input: {color: '#27187e'}
      }}
        label="Password"
        name='password'
        value={user.password}
        onChange={handleChange}
        type='password'
        variant='outlined'
        fullWidth
        required
        error={userErrors.passwordError}
        helperText={userErrors.passwordError && 'Password is required'}
        />
        <Button type='submit' variant='contained' fullWidth sx={{'&:hover':{backgroundColor: '#a200ff'}}}>Login</Button>
        </form>
      </Stack>
    </Stack>
  )
}

export default Login