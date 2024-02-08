import React from "react"
import { Article } from "../../ArticleGrid/Article"
import leashkid from "../../assets/photos/leash-kid.jpg"

export const EstateServices = () => {
  return (
    <main className="EstateServices">
      <h1>EstateServices</h1>
      <Article
        title="Maybe you need to name a Fiduciary instead of your child."
        image={leashkid}
        imgAlt="In a vintage black and white photo, a child points into the distance while being held on a leash by an adult woman."
        content={`A Private Professional Fiduciary named in a private agreement or appointed by the court, is someone who assumes responsibility for
        someone else’s medical or financial affairs when they have become
        incapacitated or have died. \n
      Often a family member or close friend will assume the role. However, if
        there is no one to take on such an important responsibility, the
        individual can hire a private professional fiduciary. But some may
        wonder what exactly is the difference between a private and a
        professional fiduciary? \n
        The terms private fiduciary and professional fiduciary are often used
        interchangeably, which can cause some confusion. However, a private
        fiduciary and professional fiduciary are the same thing. A private or
        professional fiduciary is a professional (often an attorney or CPA) who
        is privately hired by an individual or their family to serve in a
        fiduciary capacity, such as an executor, trustee, or agent under a power of attorney. \n
        True dedicated Professional fiduciaries are regulated by the
        Professional Fiduciaries Bureau, an entity within the Department of
        Consumer Affairs. In the State of California, a professional fiduciary
        must be licensed by the state, with exceptions for licensed attorneys
        and CPAs. Experienced professional fiduciaries have a much better
        understanding of estate laws than the typical family member or friend.`}
      />
      <Article
        title="What is an LDA?"
        content={`
A legal document assistant (LDA, also commonly known as "document technician," "legal document preparer," "legal technician," "online legal document provider" and "legal document clerk") in the United States is a non-lawyer authorized to assist with the preparation of legal instruments. Unlike a paralegal, legal document assistants do not work under the supervision of an attorney. \n
"Legal document assistant" means: Any qualified person who provides, or assists in providing, or offers to provide, or offers to assist in providing, for compensation, any self-help service to a member of the public who is representing themselves in a legal matter, or who holds themselves out as someone who offers that service or has that authority. This shall not apply to any individual whose assistance consists merely of secretarial or receptionist services. \n
What qualifies a Legal Document Assistant? One of ways is to have baccalaureate degree in any field and a minimum of one year of law-related experience under the supervision of a licensed attorney. In addition Legal Document Assistants must be bonded.`}
      />
    </main>
  )
}
/* <Article
    postDate, title, image, imgAlt, content
  />
*/
