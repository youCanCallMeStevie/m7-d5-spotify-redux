import React, { PureComponent } from "react";
import { connect } from "react-redux";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarTimes } from "@fortawesome/free-solid-svg-icons";

//STYLE
import "./SongList.scss";

//MAP TO STATE TO PROPS
const maptoStateToProps = (state) => state.user;

class SongList extends PureComponent {
  render() {
    console.log(this.props.liked);
    let list = this.props.liked;
    return (
      <div className="liked-song-list">
        <header>
          <div className="filter">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Filter" />
          </div>
          <div className="download">
            <span>Download</span>
            <div className="toggle-button">
              <div className="toggle"></div>
            </div>
          </div>
        </header>
        <table className="list">
          <tr>
            <th> </th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <FontAwesomeIcon icon={faCalendarTimes} />
            </th>
          </tr>
          {list.map((track) => {
            return (
              <tr>
                <td>like</td>
                <td>{track.title}</td>
                <td>{track.artist.name}</td>
                <td>{track.album.title}</td>
                <td>{}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default connect(maptoStateToProps)(SongList);
