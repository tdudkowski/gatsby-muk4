import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import styled from 'styled-components'

const Navigation = styled.nav`
position:relative;
@media (max-width: 699px) {
  position: sticky;
    top: 0;
  left: 0;
  right: 0;
  left: 0;
}
`

const Toggle = styled.div`
display: none;
cursor: pointer;
padding:2rem;

@media (max-width: 699px) {
  display: flex;
}
`

const Navbox = styled.div`

@media (max-width: 699px) {
  flex-direction: column;
  position:  ${props => (props.open ? "fixed" : "absolute")};
    width: 100%;
  background-color: var(--section-bgc-color);
  /* background-color: #696961; */
  color: #ffd;
  
  transition:${props => (props.open ? "null" : " all 0.3s ease-in")};
    top: 3rem;
  left: ${props => (props.open ? "-100%" : "0")};
}
`

const Hamburger = styled.div`
background-color: #111;
width: 30px;
height: 3px;
transition: all .3s linear;
align-self: center;
position: relative;
transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

::before,
::after {
  width: 30px;
  height: 3px;
  background-color: #111;
  content: "";
  position: absolute;
  transition: all 0.3s linear;
}

::before {
  transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
  top: -10px;
}

::after {
  opacity: ${props => (props.open ? "0" : "1")};
  transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
  top: 10px;
}
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)} >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
    </Navigation>
  )
}

export default Navbar