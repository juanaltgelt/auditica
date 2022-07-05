import React from "react";

function TrackFilter({setFilter}) {
  return (
    <form action="" className="d-flex flex-column align-items-start my-4">
      <label htmlFor="search"></label>
      <input
        type="search"
        placeholder="Search artists, songs, albums..."
        className="shadow-none"
        onChange={(e) => setFilter(e.target.value)}
      />
    </form>
  );
}

export default TrackFilter;
