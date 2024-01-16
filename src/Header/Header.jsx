import React, { useState } from "react"
import "./Header.scss"
import quote from "../assets/quote.png"
import phone from "../assets/phone.png"
import directions from "../assets/directions.png"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <main className="header">
      <section className="header-menu">
        <div className="hamburger" onClick={toggleMenu}>
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
      <section className="header-item">
        <div className="icon-container">
          <img src={quote} alt="list icon" />
        </div>
        <span className="header-item-text">Get Quote</span>
      </section>
      <section className="header-item">
        <div className="icon-container">
          <img src={phone} alt="phone icon" />
        </div>
        <span className="header-item-text">Call Now</span>
      </section>
      <section className="header-item">
        <div className="icon-container">
          <img src={directions} alt="arrow sign icon" />
        </div>
        <span className="header-item-text">Get Directions</span>
      </section>
    </main>
  )
}
