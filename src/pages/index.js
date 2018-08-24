import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Recent Listings</h2>
              </header>
              <p>
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12">
            <br />

            <header className="major">
              <h2>Recently Sold</h2>
            </header>

            <p>
              Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
            </p>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={pic02} alt="" />
            </span>
            <h3>Magna feugiat lorem</h3>
            <p>
              Adipiscing a commodo ante nunc magna lorem et interdum mi ante
              nunc lobortis non amet vis sed volutpat et nascetur.
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  More
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6" />
            <div className="col-6">
              <header className="major">
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Why use one agent when you can get a team of passionate
                dedicated realtors at your service? My father / business partner
                and I are dedicated to the people of central Florida and have
                been doing so for more than 25 years.
              </p>

              <p>
                WE genuinely love helping people so YOUR BEST INTEREST ARE OUR
                FIRST PRIORITY. My father has been a captain of police here in
                central Florida for 27 years and I have lived here my whole
                life. Needless to say we know the people and the area like the
                back of our hands. When you choose a realtor choose a local
                expert.
              </p>
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>

        <section id="three" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <br />
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan et interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis sed volutpat
                aclacus nascetur ac non. Lorem curae et ante amet sapien sed
                tempus adipiscing id accumsan.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Ipsum feugiat consequat?</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
