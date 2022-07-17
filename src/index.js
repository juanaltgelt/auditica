import React from "react";
import ReactDOM from "react-dom/client";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { TrackProvider } from "./context/Track.Provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthProvider>
  <TrackProvider > 
    <App />
    </TrackProvider>
  </AuthProvider>
  </BrowserRouter>
);
