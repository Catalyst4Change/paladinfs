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

  // Function to process content and return an array of JSX elements
  const processContent = () => {
    // Split the content into sections based on newline characters
    return content
      .split("\n")
      .map((section, index) => {
        // Trim whitespace from the section
        const trimmedSection = section.trim()

        // Check if the section is marked as a subtitle
        if (trimmedSection.startsWith("#")) {
          // It's a subtitle, so remove the "\t" and wrap the text in an <h3> tag
          return <h3 key={`h3-${index}`}>{trimmedSection.substring(1)}</h3>
        } else if (trimmedSection) {
          // It's a regular paragraph, so wrap the text in a <p> tag
          return <p key={`p-${index}`}>{section}</p>
        }
        // For empty lines or sections that become empty after trimming, return null to avoid rendering empty paragraphs
        return null
      })
      .filter((element) => element !== null) // Filter out null values to avoid rendering them
  }

  return (
    <article ref={articleRef} style={articleStyle} className="article">
      {postDate ? <span>Posted on {postDate}</span> : null}
      {title ? <h2 className="title">{title}</h2> : null}
      {image ? (
        <div className="image-container">
          <img src={image} alt={imgAlt} />
        </div>
      ) : null}
      {processContent()}
      {showToggleButton && (
        <button onClick={toggleArticle} className="toggle-button">
          {isActive ? "Close" : "Read More"}
        </button>
      )}
    </article>
  )
}
