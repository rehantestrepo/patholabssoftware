import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup,  Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'

const pathogenList = [
  "Paramuricea clavata",
"Bactrocera latifrons",
"Drosophila obscura",
"Nippostrongylus brasiliensis",
"Aceria tosichella",
"Aphis craccivora",
"Bactrocera dorsalis",
"Brugia malayi",
]

const CreatePathogenSelectSlide = ({user, setUser, setPageState, cancel}) => {

  const selectedPathogenList = useRef([])
  const newPathogenData = useRef({})

  const handleChange = (e) => {
    if (!selectedPathogenList.current.includes(e.target.value) && e.target.checked === true) {
      selectedPathogenList.current.push(e.target.value)
    }else if (selectedPathogenList.current.includes(e.target.value) && e.target.checked === false) {
      const indx = selectedPathogenList.current.indexOf(e.target.value)
      selectedPathogenList.current.splice(indx,1)
    }
  }

  const handleNext = () => {

    if (selectedPathogenList.current.length === 0) {
      alert('At least select one pathogen.')
      return
    }

    selectedPathogenList.current.forEach(element => {
      newPathogenData.current[`${element}`] = false
    });

    setUser((prevUser)=> ({
      ...prevUser,
      pathogensData: {...newPathogenData.current}
    }))

    setPageState("pathogenState")

  }

  return (
    <Stack sx={{padding: {xs: '1rem' ,md: '4rem'},
    borderRadius: '15px',
    boxShadow: '0px 2px 9px 1px #004e64',
    textShadow: '0 0 #004e64', backgroundColor: '#fefefe'}}>
      <Typography variant='h4' component='h1'>
        {user.patient}
      </Typography>
      <FormControl>
        <Typography variant='h4' component='h2' color='primary' sx={{ mb: '1rem', fontSize: '1.5rem'}}>Pathogen Type</Typography>
        <FormGroup sx={{maxHeight: {xs: 'auto', md:'200px'}}}>
          {pathogenList.map((oneUser, indx) => {
             return <FormControlLabel sx={{color: '#27187e'}} key={indx} label={oneUser} control={<Checkbox color='secondary' value={oneUser} onChange={handleChange} />} />
          })}
        </FormGroup>
      </FormControl>
      <Box sx={{mt: '1.4rem'}}>
      <Button variant="contained" onClick={cancel}>Cancel</Button>
      <Button variant="contained" sx={{mx: '1rem'}} onClick={handleNext}>Next</Button>
      </Box>
    </Stack>
  )
}

export default CreatePathogenSelectSlide