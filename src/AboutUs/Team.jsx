import React from "react"
import { Article } from "../ArticleGrid/Article"
import "./Team.scss"
import briannaM from "../assets/team/Merrill-Brianna.jpg"
import bruceS from "../assets/team/Scharff-Bruce.jpg"
import loriBeth from "../assets/team/loribeth-merrill.jpg"

export const Team = () => {
  return (
    <main className="team">
      <Article
        title={"Lori Beth Merrill"}
        image={loriBeth}
        content={
          "Lori Beth is a private licensed fiduciary through the state of California since 2018. She holds an undergraduate Bachelor of Science Degree in Real Estate. She holds a Juris Doctorate Degree in Law. She has extensive governmental experience with appraising real property and change of ownership issues. She is a member of both the Professional Fiduciaries Association of California and the National Guardianship Association, Lori Beth Is equipped to provide critical services to seniors, persons with disabilities, and children. She manages matters for clients including daily care, housing, and medical needs, and also offers financial management services ranging from basic bill paying to estate and investment management."
        }
      />
      <Article
        title={"Brianna Merrill"}
        image={briannaM}
        content={
          "Brianna is a private licensed fiduciary through the state of California. She holds an undergraduate Bachelor of Science Degree in Biology. She a member of the Professional Fiduciary Association of California and the National Guardianship Association. Brianna specializes in care planning, budgeting, and accountings. Accountings ensure that every penny is accounted for and that you are staying on track with your financial goals."
        }
      />
      <Article
        title={"Bruce Scharff"}
        image={bruceS}
        content={
          "Bruce has a strong background in customer service skills and banking. He specializes in client relations, assessment, resource matching, and benefit procurement. "
        }
      />
      {/* <Article title={"Petra Barrett"} image={petraB} content={""} /> */}
    </main>
  )
}
// Article = ({ postDate, title, image, imgAlt, content })
