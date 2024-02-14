import React from "react"
import "./Map.scss"

export const Map = () => {
  const location = "6570 Oakmont Drive, Suite #100B Santa Rosa, CA 95409"
  const apiKey = "AIzaSyAxXNBDeSojMBDyo2yYSgz0ELTbPTNRRiU"

  // Construct the Google Maps embed URL
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}`

  return (
    <div style={{ height: "50vh", width: "100%", margin: "20px" }}>
      <iframe
        title="My location"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapSrc}
        allowFullScreen
      ></iframe>
    </div>
  )
}
