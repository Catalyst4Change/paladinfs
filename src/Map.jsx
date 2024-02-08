import React from "react"

export const Map = () => {
  const location = "38.44120407104492,-122.6060791015625"
  const apiKey = "AIzaSyAxXNBDeSojMBDyo2yYSgz0ELTbPTNRRiU"

  // Construct the Google Maps embed URL
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}`

  return (
    <div style={{ height: "400px", width: "90%", margin: "20px" }}>
      p
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
