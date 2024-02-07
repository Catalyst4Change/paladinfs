import React, { useState, useEffect, useRef } from "react"
import "./Article.scss"

export const Article = ({ postDate, title, image, imgAlt, content }) => {
  const [isActive, setIsActive] = useState(false)
  const [showToggleButton, setShowToggleButton] = useState(false) // State to control button visibility
  const articleRef = useRef(null)

  useEffect(() => {
    // Adjust maxHeight based on isActive
    const currentHeight = isActive
      ? `${articleRef.current.scrollHeight}px`
      : "350px"
    setMaxHeight(currentHeight)

    // Determine if the "Read More" button should be shown
    const isContentOverflowing = articleRef.current.scrollHeight > 350
    setShowToggleButton(isContentOverflowing)
  }, [isActive, content]) // Re-run when isActive or content changes

  const [maxHeight, setMaxHeight] = useState("500px") // Assuming 500px is the collapsed height

  const toggleArticle = () => {
    setIsActive(!isActive)
  }

  const articleStyle = {
    maxHeight: maxHeight,
    overflow: "hidden",
    transition: "max-height 0.5s ease",
  }

  const imageContainerStyle = {
    width: isActive ? "100%" : "50%", // Adjust container width based on isActive
    margin: "0 auto", // Center the container when image is smaller
  }

  const splitParagraphs = () => {
    return content
      .split("\n\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>)
  }

  return (
    <article ref={articleRef} style={articleStyle} className="article">
      {postDate ? <span>Posted on {postDate}</span> : null}
      {title ? <h2 className="title">{title}</h2> : null}
      {image ? (
        <div className="image-container" style={imageContainerStyle}>
          <img src={image} alt={imgAlt} />
        </div>
      ) : null}
      {splitParagraphs()}
      {showToggleButton && (
        <button onClick={toggleArticle} className="toggle-button">
          {isActive ? "Close" : "Read More"}
        </button>
      )}
    </article>
  )
}
