import React, { useEffect, useRef, useState, useCallback } from "react"
import lionIcon from "../../assets/lion-icon.svg"
import "./Header.scss"
import { Link } from "react-router-dom"

export const Header = () => {
  const [initialNavItems] = useState([
    { name: "Services", link: "/services" },
    { name: "Resources", link: "/resources" },
    { name: "About Us", link: "/aboutus" },
  ])
  const [menuOpen, setMenuOpen] = useState(false)
  const [navItems, setNavItems] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [hamburgerVisible, setHamburgerVisible] = useState(false)
  const windowWidth = () => {
    return window.innerWidth
  }

  // Define your breakpoint
  const breakpoint = 768 // pixels

  const checkBreakpoint = () => {
    if (windowWidth() >= breakpoint) {
      setNavItems(initialNavItems)
      setMenuItems([])
      setHamburgerVisible(false)
    } else {
      setNavItems([])
      setMenuItems(initialNavItems)
      setHamburgerVisible(true)
    }
  }

  useEffect(() => {
    // Add event listener on window resize
    window.addEventListener("resize", checkBreakpoint)
    checkBreakpoint()
    return () => {
      // Add event listener on window resize
      window.removeEventListener("resize", checkBreakpoint)
    }
  }, [navItems])

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
    <header className="header">
      <nav className="header-menu">
        {hamburgerVisible && (
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
        <Link className="title-logo" to="/">
          <img className="lion-icon" src={lionIcon} alt="lion icon" />
          <span className="header-title"> Paladin Fiduciary</span>
        </Link>
        {navItems.map((item, index) => (
          <Link key={index} to={item.link}>
            <span className="nav-item"> {item.name}</span>
          </Link>
        ))}
      </nav>
      {/* sliding menu contains hidden items */}
      <div className={`sliding-menu ${menuOpen ? "active" : ""}`}>
        <nav>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <h2 onClick={toggleMenu}>{item.name}</h2>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
