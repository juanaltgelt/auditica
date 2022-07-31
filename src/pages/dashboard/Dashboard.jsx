import { useEffect, useState, useContext} from "react";
import Authcontext from "../../context/AuthProvider";
import { Audio } from "react-loader-spinner";
import { Table } from "react-bootstrap";
import "./dashboard.css";
import axios from "../../api/axios";
import TrackFilter from "../../components/TrackFilter";
import TrackRow from "../../components/TrackRow";
import FirstColumn from "../../components/FirstColumn";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import { useRef } from "react";
const TRACKS_URL = "/api/tracks";

function Dashboard() {
  const { auth } = useContext(Authcontext);
  const [filter, setFilter] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);
  const [songsUrls, setSongsUrls] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

const audioSrc = songsUrls[trackIndex]

console.log(audioSrc?.audio?.url);
console.log(songsUrls);

const audioRef= useRef()
const intervalRef = useRef();
const isReady = useRef(false);

console.log(audioRef);

console.log(intervalRef);

 // const audioRef = useRef(new Audio(audioSrc?.audio?.url));
 


  useEffect(() => {
    async function getTracks() {
      try {
        const response = await axios.get(TRACKS_URL, {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setSongsUrls(
          response.data.map((song, index) => {
            return { ...song, index };
          })
        );
        
      } catch (error) {
        console.log(error);
      }
    }
    getTracks();
  }, [auth]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
 


 
  
  return (
    <div className="container-fluid text-light dashboard-bg">
      <div className="row dashboard-container">
        <FirstColumn />
        <div className="col-10 second-column d-flex flex-column align-items-center">
          <TrackFilter setFilter={setFilter} />
          <Table className="p-1 table-songs table-borderless table-column">
            <thead>
              <tr>
                <th>#</th>
                <th>title</th>
                <th>artist</th>
                <th>album</th>
                <th>duration</th>
                {auth.user.role[0] === "admin" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {songsUrls.length ? (
                songsUrls
                  .filter(({ name }) =>
                    name.toLowerCase().startsWith(filter.toLowerCase())
                  )
                  .map((track, index) => (
                    <TrackRow
                      key={index}
                      track={track}
                      index={index}
                      setIsPlaying={setIsPlaying}
                      isPlaying={isPlaying}
                      trackIndex={trackIndex}
                      setTrackIndex={setTrackIndex}
                      song={audioSrc}
                      songsUrls={songsUrls}
                      audioRef={audioRef}
                    />
                  ))
              ) : (
                <tr>
                  <td colSpan="4">
                    <Audio
                      height="100"
                      width="100"
                      color="grey"
                      ariaLabel="loading"
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <audio src={audioSrc?.audio?.url} ref={audioRef} />
      <AudioPlayer
        songsUrls={songsUrls}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        song={audioSrc}
      audioRef={audioRef}
      trackProgress={trackProgress}
      setTrackProgress={trackProgress}    
      intervalRef={intervalRef}  
      isReady={isReady}
   
      />
    </div>
  );
}

export default Dashboard;
