import React from "react"
import Header from "./header"
import Aside from "./aside"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, page }) => {
  return (
    <div className="container">
      <Header />
      <main>
        <Aside page={page} />
        <article>{children}</article>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
