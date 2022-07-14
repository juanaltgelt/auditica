import { ReactComponent as PauseBtn } from "../../assets/dashboard/pauseBtn.svg";
import { ReactComponent as ShuffleBtn } from "../../assets/dashboard/shuffleBtn.svg";
import { ReactComponent as SkipPrevBtn } from "../../assets/dashboard/skipPrevBtn.svg";
import { ReactComponent as SkipNextBtn } from "../../assets/dashboard/skipNextBtn.svg";
import { ReactComponent as RepeatBtn } from "../../assets/dashboard/repeatBtn.svg";
import { ReactComponent as SoundBtn } from "../../assets/dashboard/soundBtn.svg";
import { ReactComponent as PlayBtn } from "../../assets/dashboard/playBtn.svg";
import "./audioPlayer.css"

import { ProgressBar } from "react-bootstrap";

function AudioPlayer({ isPlaying, setIsPlaying, audioRef }) {
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

  return (
    <div className="row play-container ">
      <div className="col-2 music-play-tab d-flex justify-content-center align-items-center">
        <ShuffleBtn />
        <SkipPrevBtn />
        {isPlaying ? <PauseBtn onClick={play} /> : <PlayBtn onClick={play} />}
        <SkipNextBtn />
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
