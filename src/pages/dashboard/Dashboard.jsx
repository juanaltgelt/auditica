import { useEffect, useState, useContext } from "react";
import Authcontext from "../../context/AuthProvider";
import { Audio } from "react-loader-spinner";
import { Table } from "react-bootstrap";
import "./dashboard.css";
import axios from "../../api/axios";
import TrackFilter from "../../components/TrackFilter";
import TrackRow from "../../components/TrackRow";
import AudioPlayer from "../../components/AudioPlayer";
import FirstColumn from "../../components/FirstColumn";
import { useParams } from "react-router-dom";
import authService from "../../services/auth.service";

const TRACKS_URL = "/api/tracks";

function Dashboard() {

  const mediaId = useParams()

  const { auth } = useContext(Authcontext);
  const [tracks, setTracks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function getTracks() {
      try {
        const response = await axios.get(TRACKS_URL, {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setTracks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTracks();
  }, [auth.token]);

  console.log(tracks);

  const handleAudio = async () => {

    try {
      const response = await authService.getAudio(mediaId, {
        headers: { Authorization: `Bearer ${auth.token}`},
      });
      console.log(response)
    } catch (e) {
      console.log(e);
      }
    }



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
              {tracks.length ? (
                tracks
                  .filter(({ name }) =>
                    name.toLowerCase().startsWith(filter.toLowerCase())
                  )
                  .slice(0, 15)
                  .map((track, index) => (
                    <TrackRow key={index} track={track} index={index} onClick={() => handleAudio()} />
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
      <AudioPlayer />
    </div>
  );
}

export default Dashboard;
