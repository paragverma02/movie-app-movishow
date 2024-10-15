import React, { useEffect } from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/styles';
// import zIndex from '@mui/material/styles/zIndex';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon  from '@mui/icons-material/Search';
import TVIcon from '@mui/icons-material/Tv';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles ({
    root: {
        width: "100%",
        position: 'fixed',
        botton: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
    },
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.pushState("/");
    else if(value === 1) history.push("/movies");
    else if(value === 2) history.push("/series");
    else if(value === 3) history.push("/search");
  }, [value, history]);

  return (
    
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />} 
        />
        <BottomNavigationAction
        style={{color: "white"}}
        label="Movies" 
        icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
        style={{color: "white"}}
        label="TV Series" 
        icon={<TVIcon />} 
        />
        <BottomNavigationAction 
        style={{color: "white"}}
        label="Search" 
        icon={<SearchIcon />} 
        />
      </BottomNavigation>
    
  );
}
