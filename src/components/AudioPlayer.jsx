import React from 'react'
import { ReactComponent as PauseBtn } from "../assets/dashboard/pauseBtn.svg";
import { ReactComponent as ShuffleBtn } from "../assets/dashboard/shuffleBtn.svg";
import { ReactComponent as SkipPrevBtn } from "../assets/dashboard/skipPrevBtn.svg";
import { ReactComponent as SkipNextBtn } from "../assets/dashboard/skipNextBtn.svg";
import { ReactComponent as RepeatBtn } from "../assets/dashboard/repeatBtn.svg";
import { ReactComponent as SongImage } from "../assets/dashboard/songImage.svg";
import { ReactComponent as SoundBtn } from "../assets/dashboard/soundBtn.svg";
import { ProgressBar } from "react-bootstrap";

function AudioPlayer() {
  return (
    <div className="row play-container ">
        <div className="col-2 music-play-tab d-flex justify-content-center align-items-center">
          <ShuffleBtn />
          <SkipPrevBtn />
          <PauseBtn />
          <SkipNextBtn />
          <RepeatBtn />
        </div>
        <div className="col-8 song-play-info d-flex justify-content-around align-items-center">
          <SongImage />
          <div className="w-75 d-flex align-items-center">
            <p className="mb-0">2:45</p>

            <ProgressBar now={60} className="w-75 mx-3 proBar" />
            <p className="mb-0">3:27</p>
          </div>
        </div>
        <div className="col-2 music-control-tab d-flex  justify-content-center align-items-center">
          <SoundBtn />
          <ProgressBar now={50} className="proBar w-25 mx-2" />
        </div>
      </div>
  )
}

export default AudioPlayer