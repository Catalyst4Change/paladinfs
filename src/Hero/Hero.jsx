import React, { useState } from "react"
import hero from "../assets/hero.jpg"
import logo from "../assets/logo-master.jpg"
import "./Hero.scss"

export const Hero = () => {
  const [businessHours] = useState({
    Mon: {
      open: "9:00AM",
      close: "5:00PM",
    },
    Tue: {
      open: "9:00AM",
      close: "5:00PM",
    },
    Wed: {
      open: "9:00AM",
      close: "5:00PM",
    },
    Thu: {
      open: "9:00AM",
      close: "5:00PM",
    },
    Fri: {
      close: "Closed",
    },
    Sat: {
      close: "Closed",
    },
    Sun: {
      close: "Closed",
    },
  })

  const displayClosingTime = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const today = new Date()
    const dayName = days[today.getDay()]

    const todayHours = businessHours[dayName]
    if (!todayHours || todayHours.close === "Closed") {
      return "Closed"
    }
    const closingTime = new Date(today.toDateString() + " " + todayHours.close)
    if (today > closingTime) {
      return "Closed"
    } else {
      return `Open today until ${todayHours.close}`
    }
  }

  return (
    <main className="hero">
      <section className="hero-image-container">
        <img
          className="hero-image"
          src={logo}
          alt="Paladin Fiduciary Services Lion Logo"
        />
      </section>
      <section className="hero-text">
        {/* <h2 className="hero-title">Paladin Fiduciary Services LLC</h2> */}
        <span>Serving Northern California</span>
        <span>{displayClosingTime()}</span>
        {/* <button>Get Quote</button> */}
      </section>
    </main>
  )
}
