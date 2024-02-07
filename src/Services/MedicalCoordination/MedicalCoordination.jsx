import React from "react"
import { Article } from "../../ArticleGrid/Article"
import "./MedicalCoordination.scss"

export const MedicalCoordination = () => {
  return (
    <main className="MedicalCoordination">
      <h1>Medical Coordination</h1>
      <p>
        A care coordinator takes a leadership role when it comes to managing and
        monitoring the care of patients. They are responsible for coordinating
        each patient's care, which may come from multiple providers, and
        ensuring effective treatment plans. They connect patients with relevant
        care professionals, work to educate patients on their conditions, and
        monitor progress.
      </p>
      <Article
        title="Case Management"
        content={`Along with assessments, other care management services may include: Evaluating, arranging for and monitoring hired caregivers such as home health aides. Coordinating medical appointments and arranging transportation. Identifying social services and programs that could help the care recipient.Making referrals to financial, legal or medical professionals and suggesting ways to avert problems. Explaining complex or difficult topics to care recipients and their families. Creating short- and long-term care plans that could include assisted living or a rehab center. Acting as a liaison to families who may be hundreds of miles away. Answering questions and addressing emotional concerns of caregivers and their loved ones. Arranging for relief or respite care for stressed-out caregivers.`}
      />
    </main>
  )
}
