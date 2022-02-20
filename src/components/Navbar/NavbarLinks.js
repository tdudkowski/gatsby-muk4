import React from "react"
// import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <ul>
      {/* <NavItem to="/">Strona główna</NavItem> */}
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
        <Link activeClassName="menuLinkActive" to="/blog">Blog</Link>
      </li>
      <li>
        <Link activeClassName="menuLinkActive" to="/deutsch">Deutsch</Link>
      </li>
    </ul>
  )
}

export default NavbarLinks



