import React from "react";
import { useState, useContext } from "react";
import EditSong from "../pages/editSong/EditSong";
import { ReactComponent as Delete } from "../assets/deletebtn.svg";
import { ReactComponent as Edit } from "../assets/editbtn.svg";
import DeleteSong from "../pages/deleteSong/DeleteSong";
import Authcontext from "../context/AuthProvider";

function TrackRow({ track, index, setTrackIndex, setIsPlaying, songsUrls, trackIndex, audioRef}) {
  const { auth } = useContext(Authcontext);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
 
 
  const audio = audioRef.current;


  return (
    <tr
      key={track._id}
     
      className="table-row"
    >
      <td>{index + 1}</td>
      <td  onClick={() => {
        setTrackIndex(track.index)
        setIsPlaying(true);
        audio.play();
      }} >{track.name}</td>
      <td>{track.artist}</td>
      <td>{track.album}</td>
      <td>{track.duration}</td>

      {auth.user.role[0] === "admin" && (
        <td>
          <button onClick={() => setShowEdit(true)} className="me-2">
            <Edit />
          </button>

          <button onClick={() => setShowDelete(true)} className="delete-btn">
            <Delete />
          </button>
        </td>
      )}

      {showDelete && (
        <DeleteSong
          showDelete={showDelete}
          setShowDelete={setShowDelete}
          track={track}
        />
      )}
      {showEdit && (
        <EditSong showEdit={showEdit} setShowEdit={setShowEdit} track={track} />
      )}
    </tr>
  );
}

export default TrackRow;
