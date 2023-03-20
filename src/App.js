import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {ChannelDetails,Feed,Navbar,SearchFeed,VideoDetails} from './components'
import {Box} from '@mui/material'
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/video/:id" element={<VideoDetails/>} />
        <Route path="/channel/:id" element={<ChannelDetails/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />

      </Routes>
    </Box>
    
    </BrowserRouter>
  );
}

export default App;
