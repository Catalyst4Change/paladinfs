import React from "react"
import "./Footer.scss"

export const Footer = () => {
  return (
    <section className="footer">
      <span>© Copyright 2024</span>
      <span>
        Website by <a href="mailto:email@catalyst.sex">Catalyst</a>
      </span>
      {/* <span>Privacy Policy</span>
      <span>Sitemap</span>
      <span>Contact Us</span> */}
      <a href="https://www.linkedin.com/company/paladinfinancial">
        <span>LinkedIn</span>
      </a>
      <a href="mailto:paladinfiduciary@gmail.com">
        <span>Email</span>
      </a>
    </section>
  )
}
