import React from "react";

function TrackRow({track, index, setTrackIndex}) {
 
  
  return (
    <tr key={track._id} onClick={()=>  { 
      setTrackIndex(index)

    }}>
      <td>{index + 1}</td>
      <td>{track.name}</td>
      <td>{track.artist}</td>
      <td>{track.album}</td>
      <td>{track.duration}</td>
      <button className="text-light">Edit</button>
    </tr>
  );
}

export default TrackRow;
