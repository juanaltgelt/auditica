import { ReactComponent as PauseBtn } from "../../assets/dashboard/pauseBtn.svg";
import { ReactComponent as ShuffleBtn } from "../../assets/dashboard/shuffleBtn.svg";
import { ReactComponent as SkipPrevBtn } from "../../assets/dashboard/skipPrevBtn.svg";
import { ReactComponent as SkipNextBtn } from "../../assets/dashboard/skipNextBtn.svg";
import { ReactComponent as RepeatBtn } from "../../assets/dashboard/repeatBtn.svg";
import { ReactComponent as SoundBtn } from "../../assets/dashboard/soundBtn.svg";
import { ReactComponent as PlayBtn } from "../../assets/dashboard/playBtn.svg";
import {useRef, useState} from "react"
import "./audioPlayer.css"

import { ProgressBar } from "react-bootstrap";

function AudioPlayer({ isPlaying, setIsPlaying, songsUrls }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  
  const audioSrc = songsUrls[trackIndex];
  console.log(songsUrls);
  console.log(audioSrc);
  console.log(trackIndex);
  const audioRef = useRef(new Audio(audioSrc));

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(songsUrls.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < songsUrls.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  return (
    <div className="row play-container ">
       <audio
        src={audioSrc}
        ref={audioRef}
      />
      <div className="col-2 music-play-tab d-flex justify-content-center align-items-center">
        <ShuffleBtn />
        <SkipPrevBtn onClick={toPrevTrack}/>
        {isPlaying ? <PauseBtn onClick={play} /> : <PlayBtn onClick={play} />}
        <SkipNextBtn onClick={toNextTrack}/>
        <RepeatBtn />
      </div>
      <div className="col-8 song-play-info d-flex justify-content-around align-items-center">
        <div className=" d-flex align-items-center">
          <div
            className="progress-bar-cover"
            
          ></div>
          <div
            className="thumb"
          
          ></div>

          <input type="range" step="0.01" />
        </div>
      </div>
      <div className="col-2 music-control-tab d-flex  justify-content-center align-items-center">
        <SoundBtn />
        <ProgressBar now={50} className="proBar w-25 mx-2" />
      </div>
    </div>
  );
}

export default AudioPlayer;
