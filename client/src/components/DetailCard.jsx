import { Box, Stack, Typography } from '@mui/material';

const DetailCard = ({_id, name, image, pathogensData}) => {

    if (pathogensData.length === 0) {
        return <h2 style={{color: '#27496D'}}>please wait...</h2>
    }

  return (
    <Stack flexDirection='row' flexGrow={1} sx={{minHeight: '250px', padding: '.5rem',
    borderRadius: '15px',
    boxShadow: '0px 2px 9px 1px #004e64',
    textShadow: '0 0 #004e64', backgroundColor: '#fefefe'}}>
        <Box sx={{height: '100%', width: '45%', borderRadius: '10px', overflow: 'hidden' }}><img style={{width:'100%', height:'100%'}} src={image} alt="pathogen" /></Box>
        <Stack flexDirection='column' sx={{py: '0.5rem', px:'1rem', width: '65%'}}>
            <Stack gap={1} direction={{xs:'column' ,md: 'row'}} justifyContent='space-between' sx={{pb: '0.6rem'}}>
            <Typography variant='body1' sx={{color: '#7400b8'}}>ID: <span style={{color: '#004e64', fontWeight: 'bold'}}>{String(_id).slice(-3)}</span></Typography>
            <Typography variant='body1' sx={{textTransform: 'capitalize', color: '#7400b8'}}>Name: <span style={{color: '#004e64', fontWeight: 'bold'}}>{name}</span> </Typography>
            </Stack>
            <Stack flexDirection='column' rowGap='.8rem' sx={{height: '86%'}}>
            {pathogensData.map((pathogen, indx) => (
                <Box key={indx}>
                <Typography variant='body1'sx={{color: '#7400b8', fontSize: '.8rem'}}>{pathogen.pathogensName} : {pathogen.infected? <span style={{color: 'darkred', marginLeft: '.3rem'}}>Infected</span> : <span style={{color: 'darkgreen', marginLeft: '.3rem'}}>Not Infected</span>} </Typography>
                </Box>
            ))}
            </Stack>
        </Stack>
    </Stack>
  )
}

export default DetailCard