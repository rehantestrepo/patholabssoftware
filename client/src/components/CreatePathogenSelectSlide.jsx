import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup,  Stack, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

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

const ErrorMsg = ({msg}) => {
  return <Box color='red' mt={1}>
    <Typography>{msg}</Typography>
  </Box>
}

const CreatePathogenSelectSlide = ({user, setUser, setPageState, cancel}) => {

  const selectedPathogenList = useRef([])
  const newPathogenData = useRef({})
  const [isPathogenListEmpty, setIsPathogenListEmpty] = useState(false)

  const handleChange = (e) => {
    if (!selectedPathogenList.current.includes(e.target.value) && e.target.checked === true) {
      selectedPathogenList.current.push(e.target.value)
    }else if (selectedPathogenList.current.includes(e.target.value) && e.target.checked === false) {
      const indx = selectedPathogenList.current.indexOf(e.target.value)
      selectedPathogenList.current.splice(indx,1)
    }
  }

  const handleNext = () => {

    setIsPathogenListEmpty(false)

    if (selectedPathogenList.current.length === 0) {
      setIsPathogenListEmpty(true)
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
    <Stack sx={{px: {xs: '1rem' ,md: '1.5rem'}, pb: '1rem', pt:'.5rem',
    borderRadius: '5px',
    boxShadow: '0px 2px 9px 1px #004e64',
    textShadow: '0 0 #004e64', backgroundColor: '#fefefe'}}>
      <Typography variant='h4' component='h1'>
        {user.patient}
      </Typography>
      <FormControl>
        <Typography variant='h4' component='h2' color='primary' sx={{ mb: '1rem', mt: '0.5rem', fontSize: '1.5rem'}}>Pathogen Type</Typography>
        <FormGroup sx={{maxHeight: {xs: 'auto', md:'200px'}}}>
          {pathogenList.map((oneUser, indx) => {
             return <FormControlLabel color='secondary' key={indx} label={oneUser} control={<Checkbox color='primary' value={oneUser} onChange={handleChange} />} />
          })}
        </FormGroup>
      </FormControl>
      <Box sx={{mt: '1rem'}}>
      <Button variant="contained" onClick={cancel}>Cancel</Button>
      <Button variant="contained" sx={{mx: '1rem'}} onClick={handleNext}>Next</Button>
      </Box>
      {isPathogenListEmpty? <ErrorMsg msg="Select at least one pathogen." />: <ErrorMsg msg=" " />}
    </Stack>
  )
}

export default CreatePathogenSelectSlide