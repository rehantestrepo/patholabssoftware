import { Box, CircularProgress, Stack } from '@mui/material';
import DetailCard from '../components/DetailCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NoDataAvailable = () => {
  return (
    <Stack justifyContent='center' alignItems='center' sx={{width: '100%', gridColumn: '1/-1',  height: 'calc(100vh - 98px)'}}>
      <Box>
      <img src="images/NoDataAvailable.png" alt="No Data Available" />
    </Box>
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
    <Box sx={{minHeight: 'calc(100vh - 64px)', backgroundColor: '#f1faee'}}>
    <Box sx={{ height: '100%', p: '1rem', display: 'grid', gridTemplateColumns: {xs:'1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr'}, gridAutoRows: 'max-content', gap: {xs: '.5rem', md: '1rem'}}}>
        {fetchedData.length === 0? <NoDataAvailable /> : fetchedData.map((item, indx) => <DetailCard key={indx} {...item} />)}
    </Box>
    </Box>
    </>
  )
}

export default Details