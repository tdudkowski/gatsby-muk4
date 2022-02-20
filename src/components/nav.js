import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link activeClassName="menuLinkActive" to="/">Strona główna</Link>
        </li>
        <li>
          <Link activeClassName="menuLinkActive" to="/o">O mnie</Link>
        </li>
        <li>
          <Link activeClassName="menuLinkActive" to="/wroclaw">O Wrocławiu</Link>
        </li>
        <li>
          <Link activeClassName="menuLinkActive" to="/wycieczki">Wycieczki</Link>
        </li>
        <li>
          <Link activeClassName="menuLinkActive" to="/publikacje">Publikacje</Link>
        </li>
        <li>
          <Link activeClassName="menuLinkActive" to="/deutsch">Deutsch</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
