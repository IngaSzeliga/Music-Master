import React, { Component } from "react";
import playLogo from "./assets/play.png";

class TopHit extends Component {

  playTrack = () => {
    const { hit } = this.props;
    const { preview_url } = hit;

    const audio = new Audio(preview_url);
    audio.play();
  }
  render() {
    const { hit } = this.props;
    const { images } = hit.album;
    const { name } = hit;

    return (
      <div className="top-hit-container">
        <a className="top-hit-link">
          <img src={ images[0].url } alt="profile" className="top-hit-image"/>
          <img src={playLogo} alt="play" className="play-button" onClick={this.playTrack} />
        </a>
        <h5 className="top-hit-title">{ name }</h5>
      </div>
    );
  }
}

export default TopHit;
