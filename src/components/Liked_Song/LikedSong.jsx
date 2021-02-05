import React, { PureComponent } from "react";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faUserCircle,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

//PERSONAL COMPONENTS
import SongList from "./SongList/SongList";
//STYLE
import "./LikedSong.scss";

export default class LikedSong extends PureComponent {
  render() {
    return (
      <div className="liked-song">
        <header>
          <div className="search">
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronRight} />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user">
            <FontAwesomeIcon icon={faUserCircle} />
            <p></p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </header>
        <h1>Liked Song</h1>
        <button>Play</button>
        <SongList />
      </div>
    );
  }
}
