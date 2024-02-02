import React from "react"
import { Hero } from "../Hero/Hero"
import { Link } from "react-router-dom"
import "./Home.scss"

export const Home = () => {
  return (
    <main className="home">
      <Hero />
      {/* <Link to="/services">
        <h2>Fiduciary Services</h2>
      </Link>
      <Link to="resources">
        <h2>Resources</h2>
      </Link>
      <Link to="aboutus">
        <h2>About Us</h2>
      </Link> */}
    </main>
  )
}
