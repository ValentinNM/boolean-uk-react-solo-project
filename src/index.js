import * as React from 'react';
import React, { Component }  from 'react';
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ChannelContent, Dashboard, VideoUpload } from "./components";


import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
