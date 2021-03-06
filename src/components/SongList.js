import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
  const renderedList = songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui primary button"
            onClick={() => selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });

  return <div className="ui divided list">{renderedList}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
