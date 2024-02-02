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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const menu = document.querySelector(".sliding-menu")
      const hamburger = document.querySelector(".hamburger")
      // Check if the click is outside the menu and hamburger icon
      if (
        menuOpen &&
        menu &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    // Only add the event listener when the menu is open
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick)
    }

    // Clean up the event listener when the component unmounts or the menu closes
    return () => document.removeEventListener("click", handleOutsideClick)
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
