import React, { useEffect, useState } from 'react'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { Link ,useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import { demoProfilePicture } from '../utils/constants'
import { fetchFromAPI } from '../utils/fetchApi'
function ChannelCard({channeldetail,width,margin}) {
  
  return (
    <Box sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{
            xs:'100%',md:width?width:'300px'
        },
        marginTop:margin?'-93px':0
        
    }}
 
    >
        <Link to={`/channel/${channeldetail?.id?.channelId}`}
        style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',alignItems:'center'
        }}>
            <CardContent sx={{
                display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#fff'

            }}>
                <CardMedia image={channeldetail?.snippet?.thumbnails?.high?.url||demoProfilePicture} sx={{
                    height:180,width:180,borderRadius:'50%'
                }} />
            </CardContent>
            <Typography variant='h6' fontWeight='bold' color='grey'>
                {channeldetail?.snippet?.title}
                <CheckCircle sx={{fontSize:15,color:'gray',ml:'5px'}}/>
            </Typography>
        </Link>


    </Box>
  )
}

export default ChannelCard