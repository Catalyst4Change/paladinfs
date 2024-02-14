import React from "react"
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer className="footer">
      <span>© Copyright 2024</span>
      <span>
        Website by <a href="mailto:email@catalyst.sex">Catalyst</a>
      </span>
      {/* <span>Privacy Policy</span>
      <span>Sitemap</span>
      <span>Contact Us</span> */}
      <a href="tel:+17075823181">
        <span>Call Now</span>
      </a>
      <a href="mailto:paladinfiduciary@gmail.com">
        <span>Email</span>
      </a>
    </footer>
  )
}
