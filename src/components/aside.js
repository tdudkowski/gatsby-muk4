import React from "react"
import { Link } from "gatsby"

const Aside = ({ page }) => (

  <aside>
    <ul>
      <li>
        <Link activeClassName="menuLinkActive" to="/news">Aktualności</Link>
      </li>
      <li>
        <a href="http://przewodnicy.org/">TUiTAM</a>
      </li>
    </ul>
    <hr />
    { page === "contact" ? null : <ul className="contact">
      <li>
        <Link to="/kontakt">Kontakt</Link>
      </li>
    </ul>}
  </aside>
)

export default Aside
