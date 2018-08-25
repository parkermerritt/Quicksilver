import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import IanJump from '../assets/images/IanJump.jpg'
import Pawleys from '../assets/images/homes/PawleysHome.jpg'
import ForkRanch from '../assets/images/homes/ForkRanchHome2.jpg'
import DeerRun from '../assets/images/homes/DeerRunHome2.jpg'
import GantsCir from '../assets/images/homes/GantsCirHome.jpg'
import ZionDr from '../assets/images/homes/ZionDrHome.jpg'
import MistyGlen from '../assets/images/homes/MistyGlenHome.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-6 align-left">
              <header className="major">
                <h2>
                  <b>Active Listings</b>
                </h2>
              </header>
              <p>Here are just a few of the latest homes we have for sale! </p>
            </div>
            <div className="col-6" />

            <div className="col-4">
              <span className="image fit">
                <img src={Pawleys} alt="" />
              </span>
              <h3>3381 Pawleys Loop, St. Cloud </h3>
              <p>
                This magnificent 5 bedroom 3 bath pool home, located in the
                heart of the beautiful and highly desirable Stevens Plantation
                subdivision is absolutely AMAZING!
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.zillow.com/homedetails/3381-Pawleys-Loop-N-Saint-Cloud-FL-34769/69318833_zpid/"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={ForkRanch} alt="" />
              </span>
              <h3>S Fork Ranch Dr, Clermont </h3>
              <p>
                This is a georgeous piece of property. This property has
                frontage on the Seminole Lake Glider Airport. There are numerous
                opportunities to explore with this land.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.zillow.com/homedetails/S-Fork-Ranch-Dr-Clermont-FL-34714/247134866_zpid/"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={DeerRun} alt="" />
              </span>
              <h3>0 Deer Run Rd, St. Cloud </h3>
              <p>
                This property is directly across the street from a fire
                department, on the corner of Deer Run &amp; Hickory Tree Rd, one
                of the hottest and most quickly developing markets in St. Cloud.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.zillow.com/homedetails/0-Deer-Run-Rd-Saint-Cloud-FL-34772/2093336810_zpid/"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-wrapper">
            <div className="col-6 align-left">
              <br />
              <header className="major">
                <h2>
                  <b>Recently Sold</b>
                </h2>
              </header>
              <p>
                Check out the beautiful homes sold in some of our most recent
                success stories!
              </p>
            </div>
            <div className="col-6" />
            <div className="col-4">
              <span className="image fit">
                <img src={GantsCir} alt="" />
              </span>
              <h3>1545 Gants Cir, Kissimmee</h3>
              <p>
                We represented the sellers of this 4 bed, 3 bath suburban
                beauty, capturing a sale price of just over $260,000 for the
                homeowners.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.zillow.com/homedetails/1545-Gants-Cir-Kissimmee-FL-34744/60198894_zpid/"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={ZionDr} alt="" />
              </span>
              <h3>4906 Zion Dr, St. Cloud</h3>
              <p>
                This fantastic, move-in ready 3 bedroom home was purchased for
                only $239,000 thanks to the help of our team.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.zillow.com/homedetails/4906-Zion-Dr-Saint-Cloud-FL-34772/55793176_zpid/"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>{' '}
            <div className="col-4">
              <span className="image fit">
                <img src={MistyGlen} alt="" />
              </span>
              <h3>1460 Misty Glen Ln, Clermont</h3>
              <p>
                Our buyers scored this highly maintained and pristine 3 bedroom,
                2 bath Ashbourne model for just $273,000.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.zillow.com/homedetails/1460-Misty-Glen-Ln-Clermont-FL-34711/68074574_zpid/"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6" />
            <div className="col-6">
              <header className="major">
                <h2>
                  Entrust your family's home
                  <br />
                  &nbsp;with our family's expertise.
                </h2>
              </header>
              <p>
                Why use one agent when you can get a team of passionate
                dedicated realtors at your service? My father / business partner
                and I are dedicated to the people of central Florida and have
                been doing so for more than 25 years.
              </p>

              <p>
                WE genuinely love helping people so YOUR BEST INTERESTS ARE OUR
                FIRST PRIORITY. My father has been a captain of police here in
                central Florida for 27 years, and I have lived here my whole
                life. Needless to say, we know the people and the area like the
                back of our hands. When you choose a realtor, choose a local
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
                  Whether it's a quick flip
                  <br />
                  &nbsp;or a long term investment, we're happy to help.
                </h2>
              </header>
              <p>
                There's nothing we love more than connecting people with the
                perfect property for them. Send us a message today, and let's
                get started on discovering your dream home.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={IanJump} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="four" className="main style3 special">
          <div className="container">
            <header className="major">
              <h2>Have any questions?</h2>
            </header>
            <p>Feel free to send us an email or schedule an appointment.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Book Now
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
