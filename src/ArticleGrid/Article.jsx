import React from "react"
import "./ArticleGrid.scss"

export const Article = ({ postDate, title, content, onClick }) => {
  return (
    <article onClick={onClick}>
      {postDate ? <span>Posted on {postDate}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {content.split("\n\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  )
}
// make modal
