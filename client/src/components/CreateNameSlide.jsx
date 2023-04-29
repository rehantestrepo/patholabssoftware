import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const CreateNameSlide = ({user, handleChange, userErrors, setUserErrors, setPageState, cancel}) => {

const clickHandler = () =>  {

    setUserErrors((prevError) => ({
    ...prevError,
    patientError: false
    }))

    if(!user.name){
        setUserErrors((prevError) => ({
        ...prevError,
        patientError: true
        }))
    }else{
      setPageState("selectPathogen")
    }


}

  return (
    <Box sx={{padding: '4rem',
    borderRadius: '15px',
    boxShadow: '0px 2px 9px 1px #C7E9B0',
    textShadow: '0 0 #A4BC92'}}>
        <TextField
        sx={{
          my: '1.3rem',
          display: 'block',
          input: {color: '#27496D'}
      }}
        label="Patient's Name"
        name='name'
        value={user.name}
        onChange={handleChange}
        variant='outlined'
        fullWidth
        required
        error={userErrors.patientError}
        helperText={userErrors.patientError && "Patent's name is required"}
        />
        <Button variant="contained" onClick={cancel}>Cancel</Button>
        <Button variant="contained" sx={{mx: '1rem'}} onClick={clickHandler}>Next</Button>
    </Box>
  )
}

export default CreateNameSlide