import { Stack } from '@mui/system'
import React from 'react'
import {categories} from '../utils/constants'
function Sidebar({selectc,setselectc}) {
    
  return (
    <Stack 
    direction='row'
    sx={{
        overflowY:'auto',
        height:{
            sx:'auto',md:'95%'
        },
        flexDirection:{md:'column'}
    }}
    >
        {
categories.map((v,i)=>(
    <button onClick={()=>{
        setselectc(v.name)
    }} className='category-btn' style={{
        background:v.name===selectc && '#272727',
        color:'#fff'
    }}>
        <span style={{
        color:v.name===selectc?"#fff" :'#fff',marginRight:'5px'
    }}>{v.icon}</span>
        <span style={{
        opacity:v.name===selectc?'1' :'0.6'
    }}>{v.name}</span>
    </button>
))
        }

    </Stack>
  )
}

export default Sidebar