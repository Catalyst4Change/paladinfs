import React from "react"
import "./Header.scss"

export const Header = () => {
  return (
    <main className="header">
      <section className="header-item">
        <div className="icon-container">
          <img src="" alt="hamburger menu" />
        </div>
      </section>
      <section className="header-item">
        <h1>Paladin Fiduciary Services LLC</h1>
      </section>
      <section className="header-item">
        <div className="icon-container">
          <img src="" alt="list icon" />
        </div>
        <span>Get Quote</span>
      </section>
      <section className="header-item">
        <div className="icon-container">
          <img src="" alt="phone icon" />
        </div>
        <span>Call Now</span>
      </section>
      <section className="header-item">
        <div className="icon-container">
          <img src="" alt="arrow sign icon" />
        </div>
        <span>Get Directions</span>
      </section>
    </main>
  )
}
