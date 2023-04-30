import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const CreateNameSlide = ({user, handleChange, userErrors, setUserErrors, setPageState, backToDetails}) => {

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
    <Box sx={{px: {xs: '1rem' ,md: '1.5rem'}, pb: '1rem', pt:'.5rem',
    borderRadius: '5px',
    boxShadow: '0px 2px 9px 1px #004e64',
    textShadow: '0 0 #004e64', backgroundColor: '#fefefe'}}>
        <TextField
        sx={{
          mt: '1rem',
          mb: '.7rem',
          display: 'block',
          input: {color: '#27187e'}
      }}
        label="Patient's Name"
        name='name'
        value={user.name}
        onChange={handleChange}
        variant='standard'
        fullWidth
        required
        autoComplete='off'
        error={userErrors.patientError}
        helperText={userErrors.patientError ? "Patent's name is required" : " "}
        />
        <Button variant="contained" onClick={backToDetails}>Cancel</Button>
        <Button variant="contained" sx={{mx: '1rem'}} onClick={clickHandler}>Next</Button>
    </Box>
  )
}

export default CreateNameSlide