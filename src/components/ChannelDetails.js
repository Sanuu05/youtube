import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

function ChannelDetails() {
      const[channelDetail,setchannelDetails] =useState()
      const [videos,setvideos] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((v)=>{
            setchannelDetails(v?.items[0])
        })
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((v)=>{
            setvideos(v?.items)
            // console.log('ccv',v)
            
        })
    },[id])
    console.log(videos)
  return (
    <Box minHeight='95vh'>
        <Box >
            <div style={{
                background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
                height:'200px'
            }} />
            <ChannelCard width="100%" margin={true} channeldetail={channelDetail}/>
          

        
        </Box>
        <Box display='flex' p='2'>
            <Box sx={{
                mr:{
                    sm:'100px'
                }
            }}
            />
  <Videos videos={videos} />
            
        </Box>
    </Box>
  )
}

export default ChannelDetails