import React from "react"
import Nav from "./nav"

const Footer = () => (
  <footer>
    <Nav />
    <hr />
    <p className="signature">
      © {new Date().getFullYear()}, strona zbudowana w <a href="https://www.gatsbyjs.org">Gatsby</a> - projekt i realizacja <a href="http://dygresje.info">dygresje.info</a>
    </p>
  </footer>
)

export default Footer
