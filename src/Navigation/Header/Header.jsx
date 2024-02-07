import React, { useEffect, useRef, useState, useCallback } from "react"
import "./Header.scss"
import { Link } from "react-router-dom"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navItems, setNavItems] = useState([
    { name: "Services", link: "/services" },
    { name: "Resources", link: "/resources" },
    { name: "About Us", link: "/aboutus" },
  ])
  const [menuItems, setMenuItems] = useState([])
  const navRef = useRef()
  const navContainerRef = useRef()

  // Open n close menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Handle keyboard/screen-reader menu navigation
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
    // Close sliding menu by clicking outside it
    const handleOutsideClick = (event) => {
      const menu = document.querySelector(".sliding-menu")
      const hamburger = document.querySelector(".hamburger")
      // Check if the click is outside the menu and hamburger
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
    <header className="header" ref={navContainerRef}>
      {/* header bar */}
      <nav className="header-menu">
        {menuItems.length > 0 && (
          <div
            tabIndex={1}
            className="hamburger"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
          >
            {/* hamburger slices */}
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
        )}

        <Link to="/">
          <span className="header-title">Paladin Fiduciary</span>
        </Link>
        <div className="nav-items" ref={navRef}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <span> {item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
      {/* sliding menu contains hidden items */}
      <div className={`sliding-menu ${menuOpen ? "active" : ""}`}>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>
                  <h3 onClick={toggleMenu}>{item.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
