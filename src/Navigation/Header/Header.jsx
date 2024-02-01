import React, { useEffect, useState } from "react"
import "./Header.scss"
import { Link } from "react-router-dom"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleKeyDown = (event) => {
    const focusOnBurger = () => {
      document.querySelector(".hamburger").focus()
    }
    console.log(event.key)
    if (
      (!menuOpen && event.key === "Enter") ||
      (!menuOpen && event.key === " ")
    ) {
      event.preventDefault()
      toggleMenu()
    } else if (menuOpen && event.key === " ") {
      event.preventDefault()
      setMenuOpen(false)
      focusOnBurger()
    } else if (menuOpen && event.key === "Escape") {
      setMenuOpen(false)
      focusOnBurger()
    }
  }

  // add escape anywhere to close menu

  useEffect(() => {
    if (menuOpen) {
      const menu = document.querySelector(".sliding-menu")
      const firstLink = menu.querySelector("a")
      firstLink.focus()
    }
  }, [menuOpen])

  return (
    <header className="header">
      {/* header bar */}
      <nav className="header-menu">
        <div
          tabIndex={1}
          className="hamburger"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
        >
          <div
            className={`hamburger-slice line-1 ${menuOpen ? "active" : ""}`}
          ></div>
          <div
            className={`hamburger-slice line-2 ${menuOpen ? "active" : ""}`}
          ></div>
          <div
            className={`hamburger-slice line-3 ${menuOpen ? "active" : ""}`}
          ></div>
        </div>
        <Link to="/">
          <span className="header-title">Paladin Fiduciary Services</span>
        </Link>
      </nav>
      {/* sliding menu */}
      <div className={`sliding-menu ${menuOpen ? "active" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/Services">
                <h3 onClick={toggleMenu}>Fiduciary Services</h3>
              </Link>
            </li>
            <li>
              <Link to="/Resources">
                <h3 onClick={toggleMenu}>Resources</h3>
              </Link>
            </li>
            <li>
              <Link to="/AboutUs">
                <h3 onClick={toggleMenu}>About Us</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
// each section needs a drop-down inside
