import * as React from "react"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <div className="container">
            <header>Header</header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </div>)
}

export default Layout