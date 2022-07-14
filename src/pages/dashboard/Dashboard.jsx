import { useEffect, useState, useContext, useRef } from "react";
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

  const [isPlaying, setIsPlaying] = useState(false);
  const [songsUrls, setSongsUrls] = useState([]);


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
  }, [auth.token]);

  console.log(songsUrls);

  return (
    <div className="container-fluid text-light dashboard-bg">
      <div className="row dashboard-container">
        <FirstColumn />
        <div className="col-8 second-column d-flex flex-column align-items-center">
          <TrackFilter setFilter={setFilter} />
          <Table className="p-1 table-songs table-borderless">
            <thead>
              <tr>
                <th>#</th>
                <th>title</th>
                <th>artist</th>
                <th>album</th>
                <th>duration</th>
              </tr>
            </thead>
            <tbody>
              {songsData.length ? (
                songsData
                  .filter(({ name }) =>
                    name.toLowerCase().startsWith(filter.toLowerCase())
                  )
                  .slice(0, 15)
                  .map((track, index) => (
                    <TrackRow
                      key={index}
                      track={track}
                      index={index}
                      setIsPlaying={setIsPlaying}
                      isPlaying={isPlaying}
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
        <div className="col-2 third-column"></div>
      </div>
     
      <AudioPlayer
        songsUrls={songsUrls}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default Dashboard;
