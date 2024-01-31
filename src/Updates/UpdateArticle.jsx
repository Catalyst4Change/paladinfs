import React from "react"
import "./Updates.scss"

export const UpdateArticle = ({ postDate, title, copy, onClick }) => {
  return (
    <article onClick={onClick}>
      <span>Posted on {postDate}</span>
      <h3>{title}</h3>
      {copy.split("\n\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  )
}
// make modal
