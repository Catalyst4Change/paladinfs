import React from "react"
import "./CallNowButton.scss"

export const CallNowButton = () => {
  return (
    <a href="tel:+17075823181">
      <button className="call-now">
        <img className="call-now-image" src="" alt="" />
        <span className="call-now-text">Call Now</span>
      </button>
    </a>
  )
}
