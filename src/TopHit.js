import React, { Component } from "react";
import playLogo from "./assets/play.png";
import pauseLogo from "./assets/pause.png";

class TopHit extends Component {
  state = { isMusicOn: false, audio: null };

  playTrack = () => {
    const { hit } = this.props;
    const { preview_url } = hit;
    let audio = this.state.audio;
    const { isMusicOn } = this.state;

    if (audio === null) {
      audio = new Audio(preview_url);
    }

    if (isMusicOn) {
      audio.pause();
    } else {
      audio.play();
    }

    this.setState({ isMusicOn: !isMusicOn, audio: audio });
  };

  render() {
    const { hit } = this.props;
    const { images } = hit.album;
    const { name } = hit;
    const { isMusicOn } = this.state;

    return (
      <div className="top-hit-container">
        <a className="top-hit-link">
          <img src={images[0].url} alt="profile" className="top-hit-image" />
          <img
            src={isMusicOn ? pauseLogo : playLogo}
            alt="play"
            className="play-button"
            onClick={this.playTrack}
          />
        </a>
        <h5 className="top-hit-title">{name}</h5>
      </div>
    );
  }
}

export default TopHit;
