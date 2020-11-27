import React, { Component } from 'react'
import { Links } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./CSS/AlbumCard.css";
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export class AlbumCard extends Component {
    render() {
        return (
        //   <div className="row no-gutters d-flex">
            <div className="myCard card p-0 trending card p-0 col-12 col-md-3 col-lg-2 " id="sampleCard">
              <Image
                src={this.props.img}
                className="card-img-top"
                alt="album cover"
              />
              <FontAwesomeIcon classNameName="spotify-card-icon fab fa-spotify" icon={faSpotify}/>

              <span className="overlay-icons"
                >
                <FontAwesomeIcon classNameName="heart far fa-heart fa-sm mr-5" icon={faHeart}/>
                <FontAwesomeIcon classNameName="play fas fa-play fa-1x mr-5" icon={faPlay}/>
                <FontAwesomeIcon classNameName="fa fa-ellipsis-h fa-sm" icon={faEllipsisH}/>
              </span>
              <div>
                <h6>{this.props.albumTitle}</h6>
                <h6>{this.props.artist}</h6>
              </div>
            </div>

                //   </div>
        )
    }
}

export default AlbumCard
