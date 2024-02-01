import React from "react"
import "./Resources.scss"
import { Link } from "react-router-dom"

export const Resources = () => {
  return (
    <main className="Resources">
      <Link to="/resources/blog" element={<Blog />} />
      <Link to="/resources/videos" element={<Videos />} />
      <Link to="/resources/downloads" element={<Downloads />} />
      <Link to="/resources/documentprep" element={<DocumentPrep />} />
    </main>
  )
}
