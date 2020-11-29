import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Image, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./CSS/AlbumCard.css";
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export class AlbumCard extends Component {
    render() {
        return (
        //   <div className="row no-gutters d-flex">       <Col className="mb-2">

            <Col className="myCard card trending mb-2" id="sampleCard">
              
              <div>
                <h6>{this.props.albumTitle.length > 20 ? this.props.albumTitle.slice(0, 20) + "..." :this.props.albumTitle}</h6>
                <h6>
                <Link
							
							to={`/artist/${this.props.id}/${this.props.artist}`}>
							{this.props.artist}
						</Link></h6>
              </div>
              <Image
                src={this.props.img}
                className="card-img-top"
                alt="album cover"
              />
              
              <FontAwesomeIcon className="spotify-card-icon fab fa-spotify" icon={faSpotify}/>
              <span className="overlay-icons"
                >
                <FontAwesomeIcon className="heart far fa-heart fa-sm mr-3" icon={faHeart}/>
                <FontAwesomeIcon className="play fas fa-play fa-1x mr-3" icon={faPlay}/>
                <FontAwesomeIcon className="fa fa-ellipsis-h fa-sm" icon={faEllipsisH}/>
              </span>
             
            </Col>

                //   </div>
        )
    }
}

export default AlbumCard
