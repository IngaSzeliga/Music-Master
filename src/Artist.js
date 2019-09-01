import React, { Component } from "react";
import TopHit from "./TopHit";

class Artist extends Component {
  state = { topHits: [] };

  componentDidMount() {
    const { artistProps } = this.props;
    const artist = artistProps.artists.items[0];
    const { id } = artist;

    fetch(
      "https://spotify-api-wrapper.appspot.com/artist/" + id + "/top-tracks/"
    )
      .then(response => response.json())
      .then(json => this.setState({ topHits: json.tracks.slice(0,8) }));
  }

  render() {
    const { artistProps } = this.props;
    const artist = artistProps.artists.items[0];
    const { name, followers, genres, images } = artist;
    const { topHits } = this.state;

    return (
      <div>
        <h2>{name}</h2>
        <p>{`${followers.total} followers`}</p>
        <p>{genres.join(", ")}</p>
        <img
          className="artistImage"
          src={images[0].url}
          alt="Artist profile"
        ></img>
        <div className="top-hits-all">
          <div className="top-hits-container">
            {topHits.map(hit => (
              <TopHit key={hit.id} hit={hit} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;
