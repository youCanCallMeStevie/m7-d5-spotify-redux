import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlbumLists from "./AlbumLists";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Home.css";

export class Home extends Component {
  render() {
    return (
      <section className="mainframe">
        <div className="main-content d-flex flex-column">
          <div className="justify-content-center">
            <div>
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
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
                    TRENDING
                  </a>
                </li>
                <li className="nav-item" role="presentation">
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
                    PODCAST
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
                    MOODS AND GENRES
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex " role="presentation">
                  <a
                    className="nav-link"
                    id="new-releases-tab"
                    data-toggle="tab"
                    href="#new-releases"
                    role="tab"
                    aria-controls="new-releases"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="2"
                  >
                    NEW RELEASES
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="discover-tab"
                    data-toggle="tab"
                    href="#discover"
                    role="tab"
                    aria-controls="discover"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="2"
                  >
                    DISCOVER
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <AlbumLists />
        </div>
      </section>
    );
  }
}

export default Home;
