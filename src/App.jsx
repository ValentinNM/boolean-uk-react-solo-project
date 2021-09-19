import React, { Component, useEffect, useState }  from 'react';
import axios from 'axios';
import { Riderct, Route, Switch} from "react-router-dom";
// import { ChannelContent, Dashnoard, VideoUpload } from "./components"
import Header from "./Pages/Header";
import AsideMenu from "./Pages/AsideMenu";
import ChannelContent from "./components/ChannelContent";
import Dashboard from "./components/Dashboard";
import VideoUpload from "./components/VideoUpload";
import EditVideoForm from './components/EditVideoForm';
import Button from '@mui/material/Button';
import "./styles.css";
import { backdropUnstyledClasses } from '@mui/core';


export default function App() {
const [videos, setVideos] = useState([])
const [youtubeVideos, setYouTubevideos] = useState([])

useEffect(() => { 
  fetch("http://localhost:3030/videos")
  .then((res) => res.json())
  .then((data) => {
    setVideos(data)
  })
}, [])

// useEffect(() => { 
//   fetch("http://localhost:3030/videos")
//   .then((res) => res.json())
//   .then((youtubeData) => {
//     console.log("fetched data:", youtubeData) 
//     setYouTubevideos(youtubeData)
//   })
// }, [])

console.log("main State - videos :", videos);

// fetch

  return (
    <div className="App">
    <Header />
    {/* <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button> */}
    <div className="app_main_container">
    <AsideMenu />
    <Switch>
      <Route exact path="/">
      < Dashboard /> 
      </Route>
      <Route exact path="/channel-content">
        <ChannelContent/>
      </Route>
      <Route exact path="/create-form">
        <VideoUpload/>
      </Route>
      <Route exact path="/edit-form">
        <EditVideoForm/>
        {/* <h2>Edit form</h2> */}
      </Route>
      </Switch>
      
    </div>
    </div>
  );
}


