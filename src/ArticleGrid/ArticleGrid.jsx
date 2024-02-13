import React, { useState } from "react"
import { Article } from "./Article"
import "./ArticleGrid.scss"
import { Testimonial } from "./Testimonial"

export const ArticleGrid = ({ title, articles }) => {
  return (
    <section className="Updates">
      <h2 className="title">{title}</h2>
      <div className="article-grid">
        {articles.map((article, index) => {
          return (
            <div className="article-container" key={index}>
              <Article
                postDate={article.postDate}
                title={article.title}
                content={article.content}
              />
              <Testimonial
                stars={5}
                date={"01/01/2024"}
                content={
                  "Happy to be able to give some feedback for the support and service provided by Lori. In addition to transparency in communications and details, Lori also has provided lots of support in the area of elder care for our family. Thank you for all you do, Lori."
                }
                author={"Xylella Fastidiosa"}
              />
              <div className="more-indicator">More...</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
