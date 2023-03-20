import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import {SearchBar, Sidebar} from '../components'
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchApi'
import Videos from './Videos'

function Feed() {
    const [selectc,setselectc] = useState('New')
    const [videos,setvideos] = useState([])
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectc}`).then((data)=>{
            setvideos(data.items)
            // console.log(data)
        }).catch((e)=>{
            console.log(e)
        })
    },[selectc])
    console.log(videos)
  return (
    <Stack sx={{
        flexDirection:{
            sx:'column',md:'row'
        }
    }}>
        <Box sx={{
            overflow:'hidden',
            height:{
                sx:'auto',md:'89vh'
            },
            width:{
sx:'auto',md:'200px'
            },
            borderRight:'1px solid #3d3d3d',
            px:{
                sx:0,md:2
            }
        }}>
            <Sidebar selectc={selectc} setselectc={setselectc}/>
            
            <Typography className='copyright' variant='body2' sx={{
                mt:1.5,color:'#fff'
            }}>
                Copyright 2022 JSM Media
            </Typography>

        </Box>
        <Box flex={1} p={2} sx={{
            overflowY:'auto',height:'88vh'
        }}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{
                color:'white'
            }}>
                {selectc} <span style={{
                    color:'#F31503'
                }} >Videos</span>
            </Typography>
            <Videos videos={videos}/>
        </Box>

    </Stack>
  )
}

export default Feed