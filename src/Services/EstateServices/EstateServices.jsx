import React from "react"
import { Article } from "../../ArticleGrid/Article"
import leashKid from "../../assets/photos/leash-kid.jpg"
import caldaLogo from "../../assets/logos/CALDA.png"

export const EstateServices = () => {
  return (
    <main className="EstateServices">
      <h1>Estate Services</h1>
      <Article
        title="Maybe you need to name a Fiduciary instead of your child."
        image={leashKid}
        // prettier-ignore
        imgAlt="In a vintage black and white photo, a child points into the distance while being held on a leash by an adult woman."
        content={`A Private Professional Fiduciary named in a private agreement or appointed by the court, is someone who assumes responsibility for someone else’s medical or financial affairs when they have become incapacitated or have died.
        
        Often a family member or close friend will assume the role. However, if there is no one to take on such an important responsibility, the individual can hire a private professional fiduciary. But some may wonder what exactly is the difference between a private and a professional fiduciary?
        
        The terms private fiduciary and professional fiduciary are often used interchangeably, which can cause some confusion. However, a private fiduciary and professional fiduciary are the same thing. A private or professional fiduciary is a professional (often an attorney or CPA) who is privately hired by an individual or their family to serve in a fiduciary capacity, such as an executor, trustee, or agent under a power of attorney.
        
        True dedicated Professional fiduciaries are regulated by the Professional Fiduciaries Bureau, an entity within the Department of Consumer Affairs. In the State of California, a professional fiduciary must be licensed by the state, with exceptions for licensed attorneys and CPAs. Experienced professional fiduciaries have a much better understanding of estate laws than the typical family member or friend.`}
      />
      <Article title="Estate Administration" content={``} />
      <Article title="Trustees" content={``} />
      <Article title="Conservators" content={``} />
      <Article title="Power Of Attorney" content={``} />
      <Article title="Executor" content={``} />
      <Article title="Legal Document Preparation" content={``} />
      <Article
        title="What is an LDA?"
        content={`A legal document assistant (LDA, also commonly known as "document technician," "legal document preparer," "legal technician," "online legal document provider" and "legal document clerk") in the United States is a non-lawyer authorized to assist with the preparation of legal instruments. Unlike a paralegal, legal document assistants do not work under the supervision of an attorney.
        
        "Legal document assistant" means: Any qualified person who provides, or assists in providing, or offers to provide, or offers to assist in providing, for compensation, any self-help service to a member of the public who is representing themselves in a legal matter, or who holds themselves out as someone who offers that service or has that authority. This shall not apply to any individual whose assistance consists merely of secretarial or receptionist services.
        
        What qualifies a Legal Document Assistant? One of ways is to have baccalaureate degree in any field and a minimum of one year of law-related experience under the supervision of a licensed attorney. In addition Legal Document Assistants must be bonded.`}
      />
      <a href="https://www.calda.org/page-18070">
        <p>
          Find us on the California Association of Legal Document Assistants.
        </p>
        <img
          src={caldaLogo}
          alt="California Association of Legal Document Assistants"
        />
      </a>
    </main>
  )
}
/* <Article
    postDate, title, image, imgAlt, content
  />
*/
