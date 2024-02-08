import React from "react"
import { Hero } from "../Hero/Hero"
import { Map } from "../Map/Map"
import "./Home.scss"

export const Home = () => {
  return (
    <main className="home">
      <Hero />
      <section>
        <h4>
          Worried who will carry out your wishes after you are gone? <br />
          Lost at the beginning of your estate planning journey and need a
          guide?
        </h4>
        <p>
          Fiduciaries can help you or a loved one with daily money management,
          monthly budgeting, and long range financial planning. A private
          professional fiduciary can administer special needs trusts as well.
        </p>
        <p>
          California's regulatory licensing board helps identify qualified
          individuals. A fiduciary provides caring and experienced assistance to
          an elder in California, and can avoid or resolve intra-family conflict
          associated with various legal roles.
        </p>
        <p>
          A Fiduciary can act as a trustee,administrator of an estate, or as
          Conservator. A Fiduciary can also serve as Power of Attorney for
          Finance and Health Care decisions.
        </p>
      </section>
      <Map />
      <section className="business-info">
        <div className="contact">
          <h4>Contact:</h4> <p>(707) 582-3181</p>
          <a href="tel:+17075823181">
            <button className="call-now">Call Now</button>
          </a>
        </div>
        <div className="location-info">
          <h4>Our address:</h4>
          <span>6570 Oakmont Drive,</span>
          <span>Suite #100B</span>
          <span>Santa Rosa, CA 95409</span>
        </div>
        <div className="business-hours">
          <h4>Business Hours:</h4>
          <div className="business-hours-grid">
            <span className="date">Mon: </span>
            <span className="time">9:00 AM – 5:00 PM</span>
            <span className="date">Tue: </span>
            <span className="time">9:00 AM – 5:00 PM</span>
            <span className="date">Wed: </span>
            <span className="time">9:00 AM – 5:00 PM</span>
            <span className="date">Thu: </span>
            <span className="time">9:00 AM – 5:00 PM</span>
            <span className="date">Fri: </span>
            <span className="time">Closed</span>
            <span className="date">Sat: </span>
            <span className="time">Closed</span>
            <span className="date">Sun: </span>
            <span className="time">Closed</span>
          </div>
        </div>
      </section>
    </main>
  )
}
