import React from 'react'
import YouTube from 'react-youtube'
import '../assets/scss/main.scss'

class Header extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo()
  }
  render() {
    const videoOptions = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      },
    }

    return (
      <section id="header">
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="-kLOn9unUAw"
              opts={videoOptions}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
          </div>
        </div>
        <div className="inner">
          <span className="icon major fa-home" />
          <h1>
            <strong>Rinehart Real Estate</strong>
            <br />
          </h1>
          <h3>Central Florida Family Homes</h3>

          <p>
            For over 25 years, our family business
            <br />
            has provided Florida families with quality homes.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                See Listings
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
