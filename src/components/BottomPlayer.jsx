import React, { Component } from 'react'
import { Links } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboard, faHeart, faLaptopHouse, faListOl, faPlay, faRandom, faRedoAlt, faStepBackward, faStepForward, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import "./CSS/BottomPlayer.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from 'react-bootstrap';


export class BottomPlayer extends Component {
    render() {
        return (
            <Row
      className="player d-flex justify-content-between"
   style={{width: "100%", position: "fixed"}}>
      <div
        className="player-albumart d-flex align-items-center justify-content-start"
      >
        <div className="nowplaying-albumart mx-3">
          <img src="http://placehold.it/64x64" />
        </div>
        <div className=" d-sm-flex flex-column text-left mr-4">
          <div className="nowplaying-title">Now playing title</div>
          <div className="nowplaying-artist">Now playing artist</div>
        </div>
        <div className=" d-lg-flex loved-track mr-3">
          <FontAwesomeIcon className="far fa-heart" icon={faHeart}/>
          <FontAwesomeIcon className="fas fa-heart" icon={faHeart}/>
        </div>
        <FontAwesomeIcon className="d-lg-block fas fa-chalkboard" icon={faChalkboard} />
      </div>

      <div className="d-flex flex-column py-2 my-1 flex-grow-1">
     <div className="player-btn d-flex align-items-center justify-content-center player-controller my-1 py-1">
       <FontAwesomeIcon className="d-md-flex fas fa-random fa-md mx-3" icon={faRandom} />
       <FontAwesomeIcon className="fas fa-step-backward fa-md mx-3" icon={faStepBackward} />
       <div className="fa-lg">
         <FontAwesomeIcon className="fas fa-play fa-md mx-3" icon={faPlay} />
       </div>
       <FontAwesomeIcon class="fas fa-step-backward fa-md mx-3"  icon={faStepForward}/>
       <FontAwesomeIcon class="d-md-flex fas fa-redo-alt fg-md mx-3"  icon={faRedoAlt}/>
     </div>
     <div className="d-none d-sm-flex flex-row justify-content-between player-nowplaying position-relative">
       <div className="player-nowplaying-time">18:32</div>
       <div className="player-progress">
         <div id="nowplayingProgress"></div>
       </div>
       <div className="player-totaltime">24:42</div>
     </div>
    </div>
      <div
        className="player-setting  d-sm-flex align-items-center justify-content-end"
      >
        <FontAwesomeIcon className=" d-md-flex fas fa-list-ol fa-md mx-2" icon={faListOl}/>
        <FontAwesomeIcon className=" d-md-flex fas fa-laptop-house fa-md mx-2" icon={faLaptopHouse}/>
        <div className="player-volume">
        <FontAwesomeIcon className="fas fa-volume-up fa-md mx-2" icon={faVolumeUp}/>
        <FontAwesomeIcon className="fas fa-volume-mute fa-md mx-2" icon={faVolumeMute}/>
          <div id="nowplayingVolume"></div>
        </div>
      </div>
      </Row>        
      
      )
    }
}

export default BottomPlayer
