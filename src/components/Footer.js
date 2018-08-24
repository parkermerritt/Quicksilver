import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/IanRinehart"
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/r_e_a_l_t_o_r/"
              className="icon alt fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>

          <li>
            <a href="#" className="icon alt fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Rinehart Realtors</li>
          <li>
            Design: <a href="https://parkermerritt.io">Parker Merritt</a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Footer
