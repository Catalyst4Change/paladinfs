import React from "react"
import { ArticleGrid } from "../ArticleGrid/ArticleGrid"
import "./AboutUs.scss"

export const AboutUs = () => {
  return (
    <main className="AboutUs">
      <h2>About US</h2>
      <h3>Our Philosophy:</h3>
      <h4>Vision</h4>
      <h4>Mission</h4>
      <h4>Values</h4>
      <h3>Our Team:</h3>
      <ArticleGrid title="Our Team" articles={[]} />
      <h3>Membership:</h3>
    </main>
  )
}
