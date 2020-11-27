import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CSS/ArtistPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Col, Spinner } from "react-bootstrap";
import Background from "../assets/rock-concert.jpg";
import AlbumCard from "./AlbumCard"

export class ArtistPage extends Component {
  state = {
    Artists: [],
    selectedAlbum: null,
    loading: true,
  };

  fetchArtist = async () => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=queen`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        // console.log(response)
        let artists = await response.json();
        console.log(artists);
        setTimeout(() => {
          this.setState({ Artists: artists.data, loading: false }); //after the fetch is completed, and we have the info the info we are asking for, we are reverting the loading state
        }, 1000);
      } else {
        console.log("An error has happened!");
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log("There has been an error", error);
      this.setState({ loading: false });
    }
  };

  componentDidMount = () => {
    console.log("Artist has finished mounting");
    this.fetchArtist();
  };

  componentDidUpdate = previousProps => {
    if (previousProps.query !== this.props.query) {
      //it means we selected a new movie from the dropdown,also changing the props & not in the state
      console.log("Previous Artist is different than Current album");
      console.log("Performing the fetch");
      this.fetchArtist();
    }
  };

  render() {
    return (
      <>
        <div className="mainframe">
          <div className="main-content">
            <Image src={Background} />
            <div className=" mt-3 justify-center">
              <div className="jumbotron d-flex justify-content-center flex-column">
                <h6>33,000,575 MONTHLY LISTENERS</h6>
                <h1 className="display-4">QUEEN</h1>
                <div className="d-flex d-md-none  row">
                  <a className="artist-pg-play-btn btn" href="#" role="button">
                    PLAY
                  </a>
                  <a
                    className="artist-pg-follow-btn btn btn-outline-light btn-lg"
                    href="#"
                    role="button"
                  >
                    FOLLOW
                  </a>
                </div>
                <div className="d-none d-md-flex column">
                  <a className="artist-pg-play-btn btn" href="#" role="button">
                    PLAY
                  </a>
                  <a
                    className="artist-pg-follow-btn btn btn-outline-light btn-lg"
                    href="#"
                    role="button"
                  >
                    FOLLOW
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="trending-tab"
                    data-toggle="tab"
                    href="#trending"
                    role="tab"
                    aria-controls="trending"
                    aria-selected="true"
                    data-target="#homepage-headings"
                    data-slide-to="0"
                  >
                    OVERVIEW
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="podcast-tab"
                    data-toggle="tab"
                    href="#podcast"
                    role="tab"
                    aria-controls="podcast"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="1"
                  >
                    RELATED ARTISTS
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="moods-and-genres-tab"
                    data-toggle="tab"
                    href="#moods-and-genres"
                    role="tab"
                    aria-controls="moods-and-genres"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="2"
                  >
                    ABOUT
                  </a>
                </li>

                {/* <button className="dropdown-toggle d-md-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style ="background: transparent;
      font-size: 10px;
      border: none;
      color: whitesmoke;
      font-weight: 500;
      letter-spacing: 0.1em;
      margin-bottom: 22px;
      margin-left: 5px;">
        MORE
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">OVERVIEW</a>
        <a className="dropdown-item" href="#">RELATED ARTIST</a>
        <a className="dropdown-item" href="#">ABOUT</a>
      </div> */}
              </ul>
            </div>
          
       
       
        <h1 class="index-headings d-none d-md-block">
          Queen
        </h1>
        <div className="album-container">

          {!this.state.loading ? (
            this.state.Artists.map(artist => (
              <Col
                xs={2}
                //  md={3}
                //  lg={2}
                key={`${artist.id}`}
                className="mb-3"
              >
                <AlbumCard albumTitle={artist.title_short} img={artist.album.cover} artist={artist.artist.name} trackName={artist.title_short} />

              </Col>
            ))
          ) : (
            <div className="d-block w-100 mb-5 mt-5">
              <h5
                className="d-inline-block mb-0 mr-2"
                style={{ color: "white" }}
              >
                Loading...
              </h5>
              <Spinner animation="border" variant="danger" disabled />
            </div>
          )}
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default ArtistPage;
