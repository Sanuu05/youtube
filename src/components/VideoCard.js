import React from 'react'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'
function VideoCard({video:{id:{videoId},snippet}}) {
  return (
   <Card sx={{width:{xs:'100%',sm:'358px',md:'250px',xl:'300px',border:'none',borderRadius:0}}}>
    <Link to={videoId?`/video/${videoId}`:null}>
    <CardMedia image={snippet?.thumbnails?.high?.url}
    sx={{width:{
        xs:'100%',
        sm:'358px',
        md:'300px'
    },height:180}}
     />
     <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight='bold' color='grey'>
                {snippet?.channelTitle||demoChannelTitle.slice(0,60)}
                <CheckCircle sx={{fontSize:12,color:'gray',ml:'5'}}/>
            </Typography>
        </Link>
     </CardContent>
     </Link>
   </Card>
  )
}

export default VideoCard