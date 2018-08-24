import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-home" />
          <h1>
            <strong>Rinehart Real Estate</strong>
            <br />
          </h1>
          <h2>Central Florida Family Homes</h2>

          <p>
            Accumsan feugiat mi commodo erat lorem ipsum, sed magna
            <br />
            lobortis feugiat sapien sed etiam volutpat accumsan.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
