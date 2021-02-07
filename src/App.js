import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import BottomPlayer from "./Components/BottomPlayer";
import Home from "./Components/Home";
import ArtistPage from "./Components/ArtistPage";
import Login from "./Components/Login";
import AlbumPage from "./Components/AlbumPage";
import SideNavBar from "./Components/SideNavBar";
import ModalPlaylist from "./Components/Modal/ModalPlaylist";
import { getMusicResults } from "./api/index";
import SongList from "./Components/SongList";

class App extends React.Component {
  state = {
    searchedAlbums: [],
    searchedLoading: null,
    searchString: "",
    showModal: false,
  };

  showSearchResult = async searchString => {
    this.setState({ searchedLoading: true });
    const musicAlbums = await getMusicResults(searchString);
    this.setState({ searchedAlbums: musicAlbums });
    this.setState({ searchedLoading: false });
  };

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <Router className="App">
        <ModalPlaylist show={this.state.showModal} toggle={this.showModal} />
        <Route
          render={props => (
            <SideNavBar
              {...props}
              searchedAlbums={this.state.searchedAlbums}
              searchedLoading={this.state.searchedLoading}
              showSearchResult={this.showSearchResult}
              toggle={this.showModal}
            />
          )}
        />
        <Route
          path="/album/:id"
          render={props => (
            <AlbumPage
              {...props}
              searchedAlbums={this.state.searchedAlbums}
              searchedLoading={this.state.searchedLoading}
            />
          )}
        />
        <Route render={props => <BottomPlayer {...props} />} />
        <Route
          path="/home"
          exact
          render={props => (
            <Home
              {...props}
              searchedAlbums={this.state.searchedAlbums}
              searchedLoading={this.state.searchedLoading}
            />
          )}
        />
        <Route
          path="/artist/:id/:name"
          render={props => (
            <ArtistPage
              {...props}
              searchedAlbums={this.state.searchedAlbums}
              searchedLoading={this.state.searchedLoading}
            />
          )}
        />
        <Route
          path="/liked-songs/:userId"
          render={props => (
            <SongList
              {...props}
              searchedAlbums={this.state.searchedAlbums}
              searchedLoading={this.state.searchedLoading}
            />
          )}
        />
        <Route path="/login" exact render={props => <Login {...props} />} />
      </Router>
    );
  }
}

export default App;
