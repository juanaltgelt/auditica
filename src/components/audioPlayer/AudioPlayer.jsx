import { ReactComponent as PauseBtn } from "../../assets/dashboard/pauseBtn.svg";
import { ReactComponent as ShuffleBtn } from "../../assets/dashboard/shuffleBtn.svg";
import { ReactComponent as SkipPrevBtn } from "../../assets/dashboard/skipPrevBtn.svg";
import { ReactComponent as SkipNextBtn } from "../../assets/dashboard/skipNextBtn.svg";
import { ReactComponent as RepeatBtn } from "../../assets/dashboard/repeatBtn.svg";
import { ReactComponent as SoundBtn } from "../../assets/dashboard/soundBtn.svg";
import { ReactComponent as PlayBtn } from "../../assets/dashboard/playBtn.svg";
import { useEffect } from "react";
import "./audioPlayer.css"
function AudioPlayer({ isPlaying, setIsPlaying, songsUrls, setTrackIndex, trackIndex, song, audioRef, trackProgress, intervalRef, isReady}) {
  
  const currentPercentage = audioRef.duration
    ? `${(trackProgress / audioRef.current.duration) * 100}%`
    : "0%";

   

    

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

  const changeVolume = (e) => {
    audioRef.current.volume = e.target.value
  }

  return (
    <div className="row play-container ">
      
      <div className="col-2 music-play-tab d-flex justify-content-center align-items-center">
        <ShuffleBtn />
        <SkipPrevBtn onClick={toPrevTrack} />

        {isPlaying ? <PauseBtn onClick={() => setIsPlaying(false)} /> : <PlayBtn  onClick={() => setIsPlaying(true)} />}
      
      
        <SkipNextBtn onClick={toNextTrack} />
        <RepeatBtn />
      </div>
      <div className="col-8 song-play-info d-flex justify-content-around align-items-center">
        <div className="d-flex flex-column align-items-center">
          <p className="mb-1"> {song?.name} - {song?.artist} </p>
          <input 
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={audioRef.duration ? audioRef.duration : `${audioRef.duration}`}
            />
          <p className="text-light">{audioRef.duration}</p>
        </div>
      </div>
      <div className="col-2 music-control-tab d-flex  justify-content-center align-items-center">
        <SoundBtn />
        <input type="range" step="0.01" onChange={changeVolume} min={0} max={1} />
      </div>
    </div>
  );
}

export default AudioPlayer;
