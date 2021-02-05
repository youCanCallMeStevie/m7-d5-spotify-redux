import Logo from "../assets/logo.png";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { InputGroup, FormControl, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  faSearch,
  faHome,
  faBook,
  faHeart,
  faPlusCircle,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { isLoggedIn } from "../store/user/action";
import "./CSS/SideNavBar.css";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  isLoggedIn: () => dispatch(isLoggedIn()),
  handleLogout: () => dispatch(isLoggedIn()),
});

export class SideNavBar extends Component {
  state = { searchString: "" };

  searchStringHandler = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      this.props.showSearchResult(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  render() {
    return (
      <>
        <div className="aside">
          <div>
            <Link to="/home">
              <Image src={Logo} alt="logo" className="logo" />
            </Link>
          </div>

          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="input-group-prepend">
              <InputGroup className="mb-3">
                <FormControl
                  value={this.props.query}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onKeyDown={this.searchStringHandler}
                  onChange={this.searchStringHandler}
                  value={this.state.searchString}
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    id="searchBtn"
                    className="btn btn-outline-success btn-sm"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  className="fas fa-home fa-lg mr-3"
                  icon={faHome}
                />
                Home
              </a>
            </div>
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  className="fas fa-book fa-lg mr-3"
                  icon={faBook}
                />
                Your library
              </a>
            </div>
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <a href="#">
                <FontAwesomeIcon
                  className="fas fa-plus-circle fa-lg mr-3"
                  icon={faPlusCircle}
                />
                Create playlist
              </a>
            </div>
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <Link to="/liked-song/1">
                <FontAwesomeIcon
                  className="fas fa-heart fa-lg mr-3"
                  icon={faHeart}
                />
                Liked Songs
              </Link>
            </div>
          </div>

          <br />
          <div className="playlists"></div>

          <div className="stick-to-bottom-index-page">
            <div className="login-button-index">
              <a href="">
                <span>SIGN UP</span>
              </a>
            </div>
            {!this.props.user.login ? (
              <Link to="/login">
                <Button className="login-button-index">
                  <span>LOGIN</span>
                </Button>
              </Link>
            ) : (
              <Link to="/home">
                <Button
                  className="login-button-index"
                  onClick={() => this.props.handleLogout()}
                >
                  <span>LOGOUT</span>
                </Button>
              </Link>
            )}
            <div className="install-btn">
              <a href="#">
                <FontAwesomeIcon icon={faArrowCircleDown} />
                Install
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideNavBar)
);
