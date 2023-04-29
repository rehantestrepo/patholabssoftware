import { Box, Button, FormControlLabel, FormGroup, Input, Switch, Typography } from '@mui/material';


const CreatePathogenStatusSlide = ({user, setUser, handleSubmit, handleChange, cancel}) => {

  
  return (
    <Box>
      <Typography variant='h4' component='h1' sx={{ color: '#A4BC92',textShadow: '0 0 #9aba82', textTransform: 'capitalize'}}>
        Patient Name: <span style={{color: '#3B5249'}}>{user.name}</span> 
      </Typography>
      <Typography variant='h5' component='h2' sx={{ color: '#A4BC92',textShadow: '0 0 #9aba82', textTransform: 'capitalize', mt: '.7rem'}}>
        Selected Pathogen List
      </Typography>
      <FormGroup sx={{marginBlock: '1rem', rowGap: '.7rem', maxHeight: '200px'}}>
        {Object.keys(user.pathogensData).map((oneUser, indx) => {
          return <Box key={indx}>
          <FormControlLabel control={<Switch checked={user.pathogensData[oneUser]} onChange={(e) => {
            const {checked} = e.target

            setUser((prevUser)=> ({
              ...prevUser,
              pathogensData: {
                ...prevUser.pathogensData,
                [oneUser]: checked
              }
            }))

          }} />} label={oneUser} />
          </Box>
        }) }
    </FormGroup>
    <Box sx={{mb: '1rem'}}>
        <Input type='file' name="image"	onChange={handleChange} sx={{width: '100%'}} />
    </Box>
      <Button variant="contained" onClick={cancel}>Cancel</Button>
      <Button variant="contained" sx={{mx: '1rem'}} onClick={()=>{ 
        handleSubmit()
        }}>Submit</Button>
      </Box>
  )
}

export default CreatePathogenStatusSlide