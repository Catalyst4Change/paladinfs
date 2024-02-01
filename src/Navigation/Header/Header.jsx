import React, { useEffect, useState } from "react"
import quote from "../../assets/quote.png"
import phone from "../../assets/phone.png"
import directions from "../../assets/directions.png"
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
    <header>
      <nav className="header">
        <section className="header-menu">
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
          <h1 className="header-title">Paladin Fiduciary Services LLC</h1>
        </section>

        <section tabIndex={2} className="header-item">
          <div className="icon-container">
            <img src={quote} alt="list icon" />
          </div>
          <span className="header-item-text">Get Quote</span>
        </section>
        <section tabIndex={3} className="header-item">
          <div className="icon-container">
            <img src={phone} alt="phone icon" />
          </div>
          <span className="header-item-text">Call Now</span>
        </section>
        <section tabIndex={4} className="header-item">
          <div className="icon-container">
            <img src={directions} alt="arrow sign icon" />
          </div>
          <span className="header-item-text">Get Directions</span>
        </section>
      </nav>
      <div className={`sliding-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a
              className="first-option"
              tabIndex={menuOpen ? 1 : -1}
              onKeyDown={handleKeyDown}
              href="http://www.test.com"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              tabIndex={menuOpen ? 1 : -1}
              onKeyDown={handleKeyDown}
              href="http://www.test.com"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              tabIndex={menuOpen ? 1 : -1}
              onKeyDown={handleKeyDown}
              href="http://www.test.com"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className="last-option"
              tabIndex={menuOpen ? 1 : -1}
              onKeyDown={handleKeyDown}
              href="http://www.test.com"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
// refactor with nav >  ul > li
