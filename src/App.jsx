import React, { Component, useEffect, useState }  from 'react';
import axios from 'axios';
import { Riderct, Route, Switch} from "react-router-dom";
// import { ChannelContent, Dashnoard, VideoUpload } from "./components"
import Header from "./Pages/Header";
import AsideMenu from "./Pages/AsideMenu";
import ChannelContent from "./components/ChannelContent";
import Dashboard from "./components/Dashboard";
import EditVideo from "./components/EditVideo";
import CreateVideo from './components/CreateVideo';
import Button from '@mui/material/Button';
import "./styles.css";
import { backdropUnstyledClasses } from '@mui/core';


export default function App() {
const [videos, setVideos] = useState([])
const [videoToEdit, setVideoToEdit] = useState(null)
const [playlists, setPlaylists] = useState([]);

// console.log("main State - videos :", videos, "\n", "videoToEdit in App.JSX: ", videoToEdit);

useEffect(() => { 
  fetch("http://localhost:3030/videos")
  .then((res) => res.json())
  .then((data) => {
    console.log("Get video fetch req:", data)
    setVideos(data)
  })
}, [])

useEffect(() => {
  fetch("http://localhost:3030/playlists")
  .then((res) =>res.json())
  .then(playlistsData => {
      setPlaylists(playlistsData)         
  })
},[]) 


  return (
    <div className="App">
    <Header />
    <div className="app_main_container">
    <AsideMenu />
    <Switch>
      <Route exact path="/dashboard">
      < Dashboard /> 
      </Route>
      <Route exact path="/channel-content">
        <ChannelContent
        playlists={playlists}
        setVideoToEdit={setVideoToEdit}
        videos={videos}
        setVideos={setVideos}
        />
      </Route>
      <Route exact path="/edit-video">
        <EditVideo playlists={playlists} videos={videos} videoToEdit={videoToEdit}/>
      </Route>
      <Route exact path="/create-video">
        <CreateVideo videos={videos} playlists={playlists} setVideos={setVideos} setVideoToEdit={setVideoToEdit}/>
      </Route>
      </Switch>
      
    </div>
    </div>
  );
}


