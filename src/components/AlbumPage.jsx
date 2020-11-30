import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faEllipsisH,
  faHeart,
  faPauseCircle,
  faPlay,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./CSS/AlbumPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Alert, Table } from "react-bootstrap";

export class AlbumPage extends Component {
  state = {
    album: {},
    tracks: [],
    loading: true,
    error: false,
  };

  fetchAlbum = async () => {
    let albumID = this.props.match.params.id;
    console.log(albumID);
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/album/" + albumID,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let album = await response.json();
      console.log("album", album);

      if (response.ok) {
        let tracks = album.tracks.data;
        console.log("tracks", album.tracks);

        this.setState({
          album: album,
          tracks: tracks,
        });
      } else {
        this.setState({ loading: false, error: true });
        <Alert variant="danger">Something went wrong!</Alert>;
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error: true });
    }
  };

  componentDidMount = () => {
    this.fetchAlbum();
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="albums-holder col-9" style={{ padding: "0px" }}>
            <section id="albums-section">
              <div className="album row">
                <div className="col-12 col-md-6 col-lg-4">
                  <Image
                    className="album-cover img-fluid"
                    src={this.state.album.cover_big}
                    alt="album cover"
                  />
                </div>

                <div className="album-details col-12 col-md-6 col-lg-8">
                  <h4 className="mt-2">album</h4>
                  <h2 id="albumName">{this.state.album.title}</h2>
                  <div className="last-line">
                    {/* <img
                      src={this.state.album.artist.picture_small}
                      alt="artist's photo"
                      className="group-img"
                    /> */}
                    <h6>
                      <a href="" className="group-name">
                        {/* {this.state.album.artist.name} */}
                      </a>
                    </h6>
                    <p className="album-length">
                      {this.state.album.release_date} •{" "}
                      {this.state.album.nb_tracks} tracks,{" "}
                      {this.state.album.duration} seconds
                    </p>
                  </div>
                </div>
                <div className="playlist">
                  <div className="playlist-btns mt-3 mb-3">
                    <FontAwesomeIcon
                      icon={faPauseCircle}
                      className="fas fa-pause-circle fa-3x"
                    />
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="far fa-heart fa-2x mr-3 ml-3"
                    />
                    <FontAwesomeIcon
                      icon={faEllipsisH}
                      className="fa fa-ellipsis-h fa-2x"
                    />
                  </div>
                </div>

                <Table className=" ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">
                      <FontAwesomeIcon
                      icon={faClock} />
                      </th>
                      <th scope="col">
                      
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.tracks.map((tracks, index) => (
                      <tr key={tracks.id}>
                        <td>{index}</td>
                        <td>
                          <>
                            <strong>{tracks.title}</strong>
                            <br />
                            <p>
                             <Link to={`/artist/${this.props.artistId}/${this.props.artist}`}>
                             {tracks.artist.name}
                           </Link>
                              
                            </p>
                          </>
                        </td>
                        <td>
                          {(tracks.duration / 60)
                            .toFixed(2)
                            .toString()
                            .replace(".", ":")}
                        </td>
                        <td>
                        <FontAwesomeIcon
                      icon={faPlay}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default AlbumPage;
