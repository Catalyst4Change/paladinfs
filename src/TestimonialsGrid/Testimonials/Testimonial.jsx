import React from "react"
import star from "../../assets/icons/star.svg"
import "./Testimonial.scss"

export const Testimonial = ({ stars, date, content, author }) => {
  // Correctly generate an array of length 'stars'
  const printStars = Array.from({ length: stars }, (_, index) => (
    <img
      className="star-icon"
      key={index}
      src={star}
      alt={`Star ${index + 1}`}
    />
  ))

  const timeAgo = (dateInput) => {
    const date = new Date(dateInput)
    const now = new Date()
    const seconds = Math.floor((now - date) / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(weeks / 4)
    const years = Math.floor(months / 12)

    if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"} ago`
    } else if (months > 0) {
      return `${months} ${months === 1 ? "month" : "months"} ago`
    } else if (weeks > 0) {
      return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`
    } else {
      return `${days} ${days === 1 ? "day" : "days"} ago`
    }
  }

  return (
    <main className="Testimonial">
      <div>
        <div className="star-rating ">
          <div className="stars"> {printStars}</div>
          {timeAgo(date)}
        </div>
        <p>{content} </p>
        <h4>{author}</h4>
      </div>
    </main>
  )
}
