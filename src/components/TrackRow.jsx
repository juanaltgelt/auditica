import React from "react";

function TrackRow({track, index}) {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <th>{track.name}</th>
      <th>{track.artist}</th>
      <th>{track.album}</th>
      <th>{track.duration}</th>
    </tr>
  );
}

export default TrackRow;
