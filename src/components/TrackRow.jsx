import React from "react";
import { useState } from "react";
import EditSong from "../pages/editSong/EditSong";
import { ReactComponent as Delete } from "../assets/deletebtn.svg";
import { ReactComponent as Edit } from "../assets/editbtn.svg";
import DeleteSong from "../pages/deleteSong/DeleteSong";

function TrackRow({ track, index, setTrackIndex }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <tr
      key={track._id}
      onClick={() => {
        setTrackIndex(index);
      }}
      className="table-row"

    >
      <td>{index + 1}</td>
      <td>{track.name}</td>
      <td>{track.artist}</td>
      <td>{track.album}</td>
      <td>{track.duration}</td>
      <td>
        <button onClick={() => setShowEdit(true)} className="me-2">
          <Edit />
        </button>

        <button onClick={() => setShowDelete(true)} className="delete-btn" >
          <Delete />
        </button>
      </td>
      {showDelete && <DeleteSong showDelete={showDelete} setShowDelete={setShowDelete} track={track} />}
      {showEdit && <EditSong showEdit={showEdit} setShowEdit={setShowEdit} track={track} />}
    </tr>
  );
}

export default TrackRow;
