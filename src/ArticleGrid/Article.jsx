import React, { useState, useEffect, useRef } from "react"
import "./Article.scss"

export const Article = ({ postDate, title, image, imgAlt, content }) => {
  const [isActive, setIsActive] = useState(false)
  // State to hold the calculated height
  const [maxHeight, setMaxHeight] = useState("500px") // Assuming 500px is the collapsed height
  const articleRef = useRef(null)

  useEffect(() => {
    if (isActive) {
      // When active, set maxHeight to the scrollHeight (actual height of the content)
      const currentHeight = `${articleRef.current.scrollHeight}px`
      setMaxHeight(currentHeight)
    } else {
      // When not active, reset to collapsed height
      setMaxHeight("500px")
    }
  }, [isActive]) // This effect runs when isActive changes

  const toggleArticle = () => {
    setIsActive(!isActive)
  }

  const customStyle = {
    maxHeight: maxHeight,
    overflow: "hidden",
    transition: "max-height 0.5s ease",
  }

  return (
    <article ref={articleRef} style={customStyle} className="article">
      {postDate ? <span>Posted on {postDate}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {image ? (
        <div className="image-container">
          <img src={image} alt={imgAlt} />
        </div>
      ) : null}
      {content.split("\n\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div onClick={toggleArticle} className="more-indicator">
        {isActive ? "Close" : "Read More"}
      </div>
    </article>
  )
}
