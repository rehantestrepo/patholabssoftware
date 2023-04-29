import { Box, Stack, Typography } from '@mui/material';

const DetailCard = ({_id, name, image, pathogensData}) => {

    if (pathogensData.length === 0) {
        return <h2 style={{color: '#27496D'}}>please wait...</h2>
    }

  return (
    <Stack flexDirection='row' flexGrow={1} sx={{p: '.5rem', minHeight: '250px', backgroundColor: '#fff', borderRadius: '5px'}}>
        <Box sx={{height: '100%', width: '45%', borderRadius: '10px', overflow: 'hidden' }}><img style={{width:'100%', height:'100%'}} src={image} alt="pathogen" /></Box>
        <Stack flexDirection='column' sx={{py: '0.5rem', px:'1rem', width: '65%'}}>
            <Stack direction='row' justifyContent='space-between' sx={{pb: '0.6rem'}}>
            <Typography variant='body1' sx={{color: '#27496D'}}>ID: <span style={{color: '#3B5249', fontWeight: 'bold'}}>{String(_id).slice(0,3)}</span></Typography>
            <Typography variant='body1' sx={{textTransform: 'capitalize', color: '#27496D'}}>Name: <span style={{color: '#3B5249', fontWeight: 'bold'}}>{name}</span> </Typography>
            </Stack>
            <Stack flexDirection='column' rowGap='.8rem' sx={{height: '86%'}}>
            {pathogensData.map((pathogen, indx) => (
                <Box key={indx}>
                <Typography variant='body1'sx={{color: '#27496D'}}>{pathogen.pathogensName} : {pathogen.infected? <span style={{color: 'red', marginLeft: '.3rem'}}>Infected</span> : <span style={{color: 'green', marginLeft: '.3rem'}}>Not Infected</span>} </Typography>
                </Box>
            ))}
            </Stack>
        </Stack>
    </Stack>
  )
}

export default DetailCard