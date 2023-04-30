import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
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
    <Stack justifyContent='center' alignItems='center' sx={{height: 'calc(100vh - 64px)', backgroundImage: 'url(images/lab-bg.png)', backgroundSize: 'cover'}}>
      <Stack rowGap={1} sx={{width: {xs: '80%', sm: '300px'}, px: {xs: '1rem' ,md: '2rem'}, py: {xs: '.5rem' ,md: '1rem'},
    borderRadius: '5px',
    boxShadow: '0px 2px 9px 1px #004e64',
    textShadow: '0 0 #004e64', backgroundColor: '#fefefe'}}>
        <Typography variant="h4" component="h1" textAlign='center' color="primary">
            Let's Login !
        </Typography>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
        sx={{
          my: '1rem',
          display: 'block',
          input: {color: '#27187e'}
      }}
        label="Username"
        name='username'
        value={user.username}
        onChange={handleChange}
        variant='standard'
        fullWidth
        required
        error={userErrors.usernameError}
        helperText={userErrors.usernameError ? 'Username is required' : ' '}
        />
        <TextField
        sx={{
          my: '1rem',
          display: 'block',
          input: {color: '#27187e'}
      }}
        label="Password"
        name='password'
        value={user.password}
        onChange={handleChange}
        type='password'
        variant='standard'
        fullWidth
        required
        error={userErrors.passwordError}
        helperText={userErrors.passwordError ? 'Password is required': ' '}
        />
        <Button type='submit' startIcon={<LockOpenIcon />} fullWidth>Login</Button>
        </form>
      </Stack>
    </Stack>
  )
}

export default Login