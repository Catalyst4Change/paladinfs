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

      <h4>Our Privacy policy:</h4>
      <p className="content">
        CALIFORNIA PROFESSIONAL FIDUCIARIES BUREAU PROFESSIONAL FIDUCIARIES CODE
        OF ETHICS Title 16, Division 41, Article 4, California Code of
        Regulations Section 4474. Confidentiality. (a) The licensee shall
        closely guard against the disclosure of personal information regarding
        the consumer except when such disclosure is required by law or necessary
        to protect the best interest of the consumer. (b) Disclosure of consumer
        information shall be limited to what is lawful, necessary and relevant
        to the issue being addressed. NOTE: Authority cited: Sections 6517 and
        6520, Business and Professions Code. Section 6520, Business and
        Professions Code.
      </p>
      <a
        href="https://coastfiduciary.com/wp-content/uploads/2015/09/CA_Professional_Fiduciaries_Code_of_Conduct.pdf"
        rel="noreferrer noopener"
        target="_blank"
      >
        Read More on coastfiduciary.com
      </a>
    </main>
  )
}
