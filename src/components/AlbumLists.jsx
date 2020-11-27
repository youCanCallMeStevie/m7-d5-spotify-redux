import React, { Component } from 'react'
import { Links } from "react-router-dom";
import { Spinner, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/AlbumList.css";
import AlbumCard from './AlbumCard';

export class AlbumLists extends Component {
    state = {
        Albums: [],
        selectedAlbum: null,
        loading: true,
      };
      
      fetchAlbums= async () => {
       
        try {
          let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=nirvana`, {
            method: "GET",
            headers: {
              "x-rapidapi-key": "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            },
          })
          if (response.ok) {
            // console.log(response)
            let albums = await response.json();
            console.log(albums)
            setTimeout(() => {
              this.setState({ Albums: albums.data, loading: false }); //after the fetch is completed, and we have the info the info we are asking for, we are reverting the loading state
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
        console.log("Albums have finished mounting");
        this.fetchAlbums();
      };
    
      componentDidUpdate = previousProps => {
        if (previousProps.query !== this.props.query) {
          //it means we selected a new movie from the dropdown,also changing the props & not in the state
          console.log("Previous album is different than Current album");
          console.log("Performing the fetch");
          this.fetchAlbums();
        }
      };
    

    render() {
        return (
            <>
            <h1 class = "index-headings d-none d-md-block">#THROWBACKTHURSDAY</h1>
            <div className="album-container">
                          

           {/* <h1 className = "index-headings d-none d-md-block">{this.props.query.toUpperCase()}</h1> */}

            {!this.state.loading ? (this.state.Albums.map(album =>
 <Col
 xs={2}
//  md={3}
//  lg={2}
 key={`${album.id}`}
 className="mb-3"
>
<AlbumCard albumTitle={album.title_short} img={album.album.cover} artist={album.artist.name} trackName={album.title_short} />

</Col>
              ))
            


: (
              <div className="d-block w-100 mb-5 mt-5">
              <h5 className="d-inline-block mb-0 mr-2" style={{ color: "white" }}>
                Loading...
              </h5>
              <Spinner animation="border" variant="danger" disabled />
            </div>
            )}
          </div>
          </>
        )
    }
}

export default AlbumLists
