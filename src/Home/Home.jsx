import React from "react"
import { Hero } from "../Hero/Hero"
import { Map } from "../Map/Map"
import "./Home.scss"
import { Article } from "../ArticleGrid/Article"
import { TestimonialsGrid } from "../TestimonialsGrid/TestimonialsGrid"

export const Home = () => {
  return (
    <main className="home">
      <Hero />
      <section className="content">
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
      <Article
        title="What is a Private Professional Fiduciary?"
        content={`Merriam-Webster defines fiduciary this way: “one that holds a fiduciary relation or acts in a fiduciary capacity.” Not all that helpful... \n\n
        For a word that’s been around since 1631, it sure has done a good job of escaping understanding.\n\n
        But by consulting another dictionary, one might finally understand what all the hype is about. Dictionary.com defines fiduciary this way: “a person to whom property or power is entrusted for the benefit of another.” That’s better.A Private Professional Fiduciary named in a private agreement or appointed by the court, is someone who assumes responsibility for someone else’s medical or financial affairs when they have become incapacitated or have died. \n\n
        Often a family member or close friend will assume the role. However, if there is no one to take on such an important responsibility, the individual can hire a private professional fiduciary. But some may wonder what exactly is the difference between a private and a professional fiduciary?\n\n
        The terms private fiduciary and professional fiduciary are often used interchangeably, which can cause some confusion. However, a private fiduciary and professional fiduciary are the same thing. A private or professional fiduciary is a professional (often an attorney or CPA) who is privately hired by an individual or their family to serve in a fiduciary capacity, such as an executor, trustee, or agent under a power of attorney.\n\n
        True dedicated Professional fiduciaries are regulated by the Professional Fiduciaries Bureau, an entity within the Department of Consumer Affairs. In the State of California, a professional fiduciary must be licensed by the state, with exceptions for licensed attorneys and CPAs. Experienced professional fiduciaries have a much better understanding of estate laws than the typical family member or friend.`}
      />
      <TestimonialsGrid />
      <Map />
      <section className="business-info">
        <div className="contact">
          <h4>Contact:</h4>
          <span>(707) 582-3181</span>
          <a href="tel:+17075823181">
            <button className="call-now-button">Call Now</button>
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
