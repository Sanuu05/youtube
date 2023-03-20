import { Stack,Box } from '@mui/system'
import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

function Videos({videos,direction}) {
    console.log('nm',videos)
  return (
    <Stack flexDirection={direction||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {
            videos?.map((video)=>(
                video.id.videoId || video.id.channelId?
<Box>
    {video.id.videoId && <VideoCard  video={video}/> } 
    {video.id.channelId && <ChannelCard  channeldetail={video}/> } 

</Box>:null
            ))
        }
        
    </Stack>
  )
}

export default Videos