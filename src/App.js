import "./styles.css";
import { useEffect, useState } from "react";
import { Riderct, Route, Switch} from "react-router-dom";
// import { ChannelContent, Dashnoard, VideoUpload } from "./components"
import Header from "./Pages/Header";
import AsideMenu from "./Pages/AsideMenu";
import ChannelContent from "./components/ChannelContent";
import Dashboard from "./components/Dashboard";
import VideoUpload from "./components/VideoUpload";
import Button from '@mui/material/Button';

export default function App() {
const [videos, setVideos] = useState([])
const [youtubeVideos, setYouTubevideos] = useState([])

useEffect(() => { 
  fetch("http://localhost:3030/videos")
  .then((res) => res.json())
  .then((data) => {
    console.log("fetched data:", data) 
    setVideos(data)
  })
}, [])

useEffect(() => { 
  fetch("http://localhost:3030/videos")
  .then((res) => res.json())
  .then((youtubeData) => {
    console.log("fetched data:", youtubeData) 
    setYouTubevideos(youtubeData)
  })
}, [])

console.log("main State - videos :", videos);

// fetch

  return (
    <div className="App">
    <Header />
    <div className="app_main_container">
    <AsideMenu />
    {/* <Switch>
      <Dashboard /> 
      </ Switch> */}
      <Switch>
      <ChannelContent /> 
      </ Switch>
      {/* <Switch>
      <VideoUpload /> 
      </ Switch> */}
    </div>
    </div>
  );
}