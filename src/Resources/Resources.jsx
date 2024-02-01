import React from "react"
import { Blog } from "./Blog/Blog"
import { Documents } from "./Documents/Documents"
import { Link, Route, Routes } from "react-router-dom"
import { Downloads } from "./Downloads/Downloads"
import { Videos } from "./Videos/Videos"
import "./Resources.scss"

export const Resources = () => {
  return (
    <main className="Resources">
      <Routes>
        <Route path="/resources/blog/*" element={<Blog />} />
        <Route path="/resources/documents/*" element={<Documents />} />
        <Route path="/resources/downloads/*" element={<Downloads />} />
        <Route path="/resources/videos/*" element={<Videos />} />
      </Routes>
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
