import React, { Component } from "react";
import Artist from "./Artist";
import "./App.css";

class App extends Component {
  state = { artistQuery: "", artist: null };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.searchArtist();
    }
  };

  searchArtist = () => {
    const { artistQuery } = this.state;
    fetch("https://spotify-api-wrapper.appspot.com/artist/" + artistQuery)
      .then(response => response.json())
      .then(json => this.setState({ artist: json }));
  };

  render() {
    const { artist } = this.state;
    return (
      <div>
        <h1>Music Master</h1>
        <form action="">
          <input
            onChange={this.updateArtistQuery}
            onKeyPress={this.handleKeyPress}
            placeholder="Search artist"
          />
          <i onClick={this.searchArtist} className="fa fa-search"></i>
        </form>
        {artist ? <Artist artistProps={artist}/> : null}
      </div>
    );
  }
}

export default App;
