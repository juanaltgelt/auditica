import { useEffect, useState, useContext } from "react";
import Authcontext from "../../context/AuthProvider";
import { Audio } from "react-loader-spinner";
import { Table } from "react-bootstrap";
import "./dashboard.css";
import axios from "../../api/axios";
import TrackFilter from "../../components/TrackFilter";
import TrackRow from "../../components/TrackRow";
import FirstColumn from "../../components/FirstColumn";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
const TRACKS_URL = "/api/tracks";

function Dashboard() {
  const { auth } = useContext(Authcontext);
  const [songsData, setSongsData] = useState([]);
  const [filter, setFilter] = useState("");
  console.log(songsData)
 

  const [isPlaying, setIsPlaying] = useState(false);
  const [songsUrls, setSongsUrls] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    async function getTracks() {
      try {
        const response = await axios.get(TRACKS_URL, {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setSongsUrls(
          response.data.map(({ audio }) => {
            return audio.url;
          })
        );
        setSongsData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTracks();
  }, [auth]);


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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {songsData.length ? (
                songsData
                  .filter(({ name }) =>
                    name.toLowerCase().startsWith(filter.toLowerCase())
                  )
                  .slice(0, 20)
                  .map((track, index) => (
                    <TrackRow
                      key={index}
                      track={track}
                      index={index}
                      setIsPlaying={setIsPlaying}
                      isPlaying={isPlaying}
                      trackIndex={trackIndex}
                      setTrackIndex={setTrackIndex}
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
     
      <AudioPlayer
        songsUrls={songsUrls}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
      />
    </div>
  );
}

export default Dashboard;
