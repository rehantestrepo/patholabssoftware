import { Box, Button, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';


const CreatePathogenStatusSlide = ({user, setUser, handleSubmit, handleChange, cancel}) => {

  
  return (
    <Box sx={{px: {xs: '1rem' ,md: '1.5rem'}, pb: '1rem', pt:'.5rem',
    borderRadius: '5px',
    boxShadow: '0px 2px 9px 1px #004e64',
    textShadow: '0 0 #004e64', backgroundColor: '#fefefe'}}>
      <Typography variant='h4' component='h1' color='primary' sx={{ textTransform: 'capitalize', fontSize: {xs: '1.3rem', md: '2rem'}}}>
        Patient Name: <span style={{color: '#004e64'}}>{user.name}</span> 
      </Typography>
      <Typography variant='h5' component='h2' color='primary' sx={{ textTransform: 'capitalize', mt: '.7rem', fontSize: {xs: '1rem', md: '1.5rem'}}}>
        Selected Pathogen List
      </Typography>
      <FormGroup sx={{marginBlock: '1rem', rowGap: '.7rem', maxHeight: {xs: 'auto', md:'200px'}}}>
        {Object.keys(user.pathogensData).map((oneUser, indx) => {
          return <Box key={indx}>
          <FormControlLabel color="secondary" control={<Switch color='primary' checked={user.pathogensData[oneUser]} onChange={(e) => {
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
        <TextField color='secondary' type='file' name="image"	onChange={handleChange} sx={{width: '100%'}} />
    </Box>
      <Button variant="contained" onClick={cancel}>Cancel</Button>
      <Button variant="contained" sx={{mx: '1rem'}} onClick={()=>{ 
        handleSubmit()
        }}>Submit</Button>
      </Box>
  )
}

export default CreatePathogenStatusSlide