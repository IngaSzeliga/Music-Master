import React, { Component } from "react";
import playLogo from "./assets/play.png";

class TopHit extends Component {

  playTrack = event => {

  }
  render() {
    const { hit } = this.props;
    const { images } = hit.album;
    const { href, name } = hit;

    return (
      <div className="top-hit-container">
        <a href={ href } className="top-hit-link">
          <img src={ images[0].url } alt="profile" className="top-hit-image"/>
          <img src={playLogo} alt="play" className="play-button" onClick={this.playTrack} />
        </a>
        <h5 className="top-hit-title">{ name }</h5>
      </div>
    );
  }
}

export default TopHit;
