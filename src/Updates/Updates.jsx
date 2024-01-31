import React, { useState } from "react"
import { UpdateArticle } from "./UpdateArticle"
import { Modal } from "./Modal/Modal"
import "./Updates.scss"

export const Updates = () => {
  const [updates, setUpdates] = useState([
    {
      postDate: "Jan 17, 2024",
      title: "",
      copy: "A Private Professional Fiduciary named in a private agreement or appointed by the court, is someone who assumes responsibility for someone else’s medical or financial affairs when they have become incapacitated or have died.\n\nOften a family member or close friend will assume the role. However, if there is no one to take on such an important responsibility, the individual can hire a private professional fiduciary. But some may wonder what exactly is the difference between a private and a professional fiduciary?\n\nThe terms private fiduciary and professional fiduciary are often used interchangeably, which can cause some confusion. However, a private fiduciary and professional fiduciary are the same thing. A private or professional fiduciary is a professional (often an attorney or CPA) who is privately hired by an individual or their family to serve in a fiduciary capacity, such as an executor, trustee, or agent under a power of attorney.\n\nTrue dedicated Professional fiduciaries are regulated by the Professional Fiduciaries Bureau, an entity within the Department of Consumer Affairs. In the State of California, a professional fiduciary must be licensed by the state, with exceptions for licensed attorneys and CPAs. Experienced professional fiduciaries have a much better understanding of estate laws than the typical family member or friend.",
    },
  ])
  const [selectedArticle, setSelectedArticle] = useState(null)

  const handleArticleClick = (article) => {
    setSelectedArticle(article)
  }

  const handleCloseModal = () => {
    setSelectedArticle(null)
  }

  return (
    <section className="Updates">
      <h2 className="title">UPDATES</h2>
      <div className="update-article-grid">
        {updates.map((update, index) => {
          return (
            <div className="update-article">
              <UpdateArticle
                key={index}
                postDate={update.postDate}
                title={update.title}
                copy={update.copy}
                onClick={() => handleArticleClick(update)}
              />{" "}
              <div className="more-indicator">More...</div>
            </div>
          )
        })}
      </div>
      <Modal isOpen={selectedArticle != null} onClose={handleCloseModal}>
        {selectedArticle && <UpdateArticle {...selectedArticle} />}
      </Modal>
    </section>
  )
}
