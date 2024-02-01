import React from "react"
import { Link } from "react-router-dom"
import "./Resources.scss"

export const Resources = () => {
  return (
    <main className="Resources">
      <Link to="/resources/blog">
        <h2>Blog</h2>
      </Link>
      <Link to="/resources/videos">
        <h2>Videos</h2>
      </Link>
      <Link to="/resources/downloads">
        <h2>Downloads</h2>
      </Link>
      <Link to="/resources/documentprep">
        <h2>Document Preparation</h2>
      </Link>
    </main>
  )
}
