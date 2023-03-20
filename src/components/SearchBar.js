import { Paper,IconButton } from '@mui/material'
import React, { useState } from 'react'
import {Search} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
    const onhandleSubmit = (e) => {
        e.preventDefault();
    
        if (searchTerm) {
          navigate(`/search/${searchTerm}`);
    
          setSearchTerm('');
        }
      };
  return (
    <Paper
    component='form'
    onSubmit={onhandleSubmit}
    sx={{
        borderRadius:20,
        pl:2,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'
        

    }}

>
    <input 
    className='search-bar' 
    placeholder='Search...'
    value={searchTerm}
    
    onChange={(e)=>setSearchTerm(e.target.value)}
    style={{
        border:'none',
        outline:'none'
    }}
    />
    <IconButton>
    <Search/>
    </IconButton>

    

     </Paper>
  )
}

export default SearchBar