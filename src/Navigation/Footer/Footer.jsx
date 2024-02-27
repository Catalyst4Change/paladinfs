import React from "react"
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer className="footer">
      <span>© Copyright 2024</span>
      <span>
        Website by <a href="mailto:email@catalyst.sex">Catalyst</a>
      </span>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://coastfiduciary.com/wp-content/uploads/2015/09/CA_Professional_Fiduciaries_Code_of_Conduct.pdf"
      >
        <span>Privacy Policy</span>
      </a>
      <a href="mailto:paladinfiduciary@gmail.com">
        <span>Email</span>
      </a>
    </footer>
  )
}
