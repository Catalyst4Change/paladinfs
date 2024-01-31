import React, { useState } from "react"
import { Article } from "./Article"
import { Modal } from "./Modal/Modal"
import "./ArticleGrid.scss"

export const ArticleGrid = ({ title, articles }) => {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
  }

  const handleCloseModal = () => {
    setSelectedArticle(null)
  }

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
                onClick={() => handleArticleClick(article)}
              />{" "}
              <div className="more-indicator">More...</div>
            </div>
          )
        })}
      </div>
      <Modal isOpen={selectedArticle != null} onClose={handleCloseModal}>
        {selectedArticle && <Article {...selectedArticle} />}
      </Modal>
    </section>
  )
}
