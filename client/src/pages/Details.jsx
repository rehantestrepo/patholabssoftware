import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import DetailCard from '../components/DetailCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

// #063c80

const NoDataAvailable = () => {
  return (
    <Stack justifyContent='center' alignItems='center' sx={{width: '100%', gridColumn: '1/-1',  height: 'calc(100vh - 98px)', backgroundColor: '#063c80'}}>
      <Stack flexDirection='column' justifyContent='center' alignItems='center'>
      <img style={{width: '50%'}} src="images/NoDataAvailable.gif" alt="No Data Available" />
      <Typography color='#fff' sx={{fontSize: {xs:'1.5rem', sm:'3rem'} }} component='p'>No Data Found</Typography>
    </Stack>
    </Stack>
  )
}

const Details = () => {

  const [fetchedData, setFetchedData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    axios
			.get("/details")
			.then(res => {
        setFetchedData([...res.data])
        setIsLoading(false)
      }
        )
			.catch(err => console.log(err));
  },[])


    if (isLoading) {
    return <Box sx={{minHeight: 'calc(100vh - 64px)'}}>
      <Stack justifyContent='center' alignItems='center' sx={{minHeight: 'calc(100vh - 64px)'}}>
      <CircularProgress size={200}/>
      </Stack>
    </Box>
    }




  return (
    <>
    <Box sx={{minHeight: 'calc(100vh - 64px)', backgroundColor: '#b4d5ff'}}>
    <Box sx={{ height: '100%', p: '1rem', display: 'grid', gridTemplateColumns: {xs:'1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr'}, gridAutoRows: 'max-content', gap: {xs: '.5rem', md: '1rem'}}}>
        {fetchedData.length === 0? <NoDataAvailable /> : fetchedData.map((item, indx) => <DetailCard key={indx} {...item} />)}
    </Box>
    </Box>
    </>
  )
}

export default Details