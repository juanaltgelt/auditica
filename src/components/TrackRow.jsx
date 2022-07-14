import React from "react";

function TrackRow({track, index, setIsPlaying, isPlaying}) {
  return (
    <tr key={index} onClick={()=> setIsPlaying(!isPlaying)}>
      <td>{index + 1}</td>
      <td>{track.name}</td>
      <td>{track.artist}</td>
      <td>{track.album}</td>
      <td>{track.duration}</td>
    </tr>
  );
}

export default TrackRow;
