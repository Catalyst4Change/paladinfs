import React, { useState, useEffect, useRef } from "react"
import "./Article.scss"

export const Article = ({ postDate, title, image, imgAlt, content }) => {
  const [isActive, setIsActive] = useState(false)
  const [showToggleButton, setShowToggleButton] = useState(false)
  const articleRef = useRef(null)

  useEffect(() => {
    // Adjust maxHeight for both article and image based on isActive
    const maxHeight = isActive
      ? `${articleRef.current.scrollHeight}px`
      : "350px"

    // Determine if the "Read More" button should be shown
    const isContentOverflowing = articleRef.current.scrollHeight > 350
    setShowToggleButton(isContentOverflowing)

    // Set the combined maxHeight for both article and image
    setMaxHeight(maxHeight)
  }, [isActive, content])

  const [maxHeight, setMaxHeight] = useState("350px")

  const toggleArticle = () => {
    setIsActive(!isActive)
  }

  const combinedStyle = {
    maxHeight: maxHeight,
    overflow: "hidden",
    transition: "max-height 0.5s ease",
  }

  const processContent = () => {
    return content
      .split("\n")
      .map((section, index) => {
        const trimmedSection = section.trim()
        if (trimmedSection.startsWith("#")) {
          return <h3 key={`h3-${index}`}>{trimmedSection.substring(1)}</h3>
        } else if (trimmedSection) {
          return <p key={`p-${index}`}>{section}</p>
        }
        return null
      })
      .filter((element) => element !== null)
  }

  return (
    <article
      ref={articleRef}
      style={combinedStyle}
      className="article content-box"
    >
      {postDate && <span>Posted on {postDate}</span>}
      {title && <h2 className="title">{title}</h2>}
      {image && (
        <div className="image-container">
          <img style={combinedStyle} src={image} alt={imgAlt} />
        </div>
      )}
      {processContent()}
      {showToggleButton && (
        <button onClick={toggleArticle} className="toggle-button">
          {isActive ? "Close" : "Read More"}
        </button>
      )}
    </article>
  )
}
