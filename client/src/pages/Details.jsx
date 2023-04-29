import { Box } from '@mui/material';
import DetailCard from '../components/DetailCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    return <h1 style={{color: '#27496D', backgroundColor: '#A4D0A4'}}>Loading....</h1>
  }



  return (
    <>
    <Box sx={{minHeight: 'calc(100vh - 64px)', backgroundColor: '#A4D0A4'}}>
    <Box sx={{ height: '100%', p: '1rem', display: 'grid', gridTemplateColumns: {xs:'1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr'}, gridAutoRows: 'max-content', gap: {xs: '.5rem', md: '1rem'}}}>
        {fetchedData.length === 0? <h1 style={{color: '#27496D'}}>No Data Available</h1> : fetchedData.map((item, indx) => <DetailCard key={indx} {...item} />)}
    </Box>
    </Box>
    </>
  )
}

export default Details