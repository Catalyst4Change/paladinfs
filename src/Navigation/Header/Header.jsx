import React, { useEffect, useRef, useState, useCallback } from "react"
import lionIcon from "../../assets/lion-icon.svg"
import { Link } from "react-router-dom"
import "./Header.scss"
import { DropDownMenu } from "./DropDownMenu/DropDownMenu"

export const Header = () => {
  const [navItems] = useState([
    {
      name: "Services",
      link: "/services",
      subLinks: [
        { name: "Estate Services", link: "/services/estateservices" },
        { name: "Financial Services", link: "/services/financialservices" },
        { name: "Medical Coordination", link: "/services/medicalcoordination" },
        { name: "Benefits", link: "/services/benefits" },
      ],
    },
    {
      name: "Resources",
      link: "/resources",
      subLinks: [
        { name: "Blog", link: "/resources/blog" },
        { name: "Videos", link: "/resources/videos" },
        { name: "Downloads", link: "/resources/downloads" },
        { name: "Document Preparation", link: "/resources/documentprep" },
      ],
    },
    { name: "About Us", link: "/aboutus" },
  ])
  const [menuOpen, setMenuOpen] = useState(false)
  const [hamburgerVisible, setHamburgerVisible] = useState(false)
  const breakpoint = 768 // pixels
  const windowWidth = () => {
    return window.innerWidth
  }

  const checkBreakpoint = () => {
    if (windowWidth() >= breakpoint) {
      setHamburgerVisible(false)
    } else {
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
  }, [])

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
      const menu = document.querySelector(".dropdown-menu")
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
        {!hamburgerVisible
          ? navItems.map((item, index) => (
              <DropDownMenu key={index} menuItem={item} />
            ))
          : null}
      </nav>
      <nav className={`dropdown-menu ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => {
          return (
            <div className="dropdown-links" key={item.name}>
              <Link to={item.link}>
                <span className="link">{item.name}</span>
              </Link>
              {item.subLinks
                ? item.subLinks.map((subLink) => (
                    <div key={subLink.name} className="sub-link indented">
                      <Link to={subLink.link}>
                        <span>{subLink.name}</span>
                      </Link>
                    </div>
                  ))
                : null}
            </div>
          )
        })}
      </nav>
    </header>
  )
}
