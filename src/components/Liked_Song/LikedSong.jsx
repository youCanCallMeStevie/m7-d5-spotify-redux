import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {Link } from "react-router-dom";


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

const maptoStateToProps = (state) => state;

class LikedSong extends PureComponent {
  render() {
    return (
      <div className="liked-song">
        <header>
          <div className="search">
            {/* <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronRight} />
            <input type="text" placeholder="Search..." /> */}
          </div>
          <div className="user">
          <FontAwesomeIcon icon={faUserCircle} />
          {this.props.user.login ? (<><p className="mt-3" style={{color:"whitesmoke"}}>Hi, {this.props.user?.details.username}!</p> <FontAwesomeIcon icon={faChevronDown} /></>) :(<Link to="/login"><p className="mt-3" style={{color:"whitesmoke"}}>Login to see your account</p></Link>) }
          
        </div>
        </header>
        <h1>Liked Song</h1>
        <button>Play</button>
        <SongList />
      </div>
    );
  }
}

export default connect(maptoStateToProps)(LikedSong);
