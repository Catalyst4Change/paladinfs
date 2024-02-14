import React from "react"
import { Article } from "../ArticleGrid/Article"
import { Team } from "./Team"

export const AboutUs = () => {
  return (
    <main className="AboutUs">
      <h1>About Us</h1>
      <Article
        title="Our Philosophy:"
        content={`
        We encourage our clients to do for themselves as much as they can, as long as they can, as long as they want to, as long as it’s safe.
        
        \#The Process
        
        Many parents unrealistically expect their children to competently take care of them and their affairs as they age and to ultimately succeed them by administering their estates after their death. However, often times our clients do not have children, or family members are far-flung, too busy, lack experience, estranged, or are even taking advantage of their parent(s) or grandparent(s). As fiduciaries, we are obligated to fulfill your needs and wishes while being fully accountable to you and to the State of California. 
        
        We get to know you, your needs, and your wishes for life and for after life. We ensure we are a “fit.” We help plan and monitor progress. We coordinate all the necessary professionals, providers, and services and mobilize them when needed in ways that align with your goals. During life, we can be your power of attorney for health care as well as for business and finance. We can continue services by being your successor trustee as well as the executor of your estate.
        
        If you do have children, hiring a professional fiduciary now will allow your children to simply be your children instead of becoming your caretakers. Having a professional handle your affairs helps prevent jealousy and mistrust among siblings and other family members. After death, having a fiduciary administer your estate will allow your child(ren) to focus on the enormity of grief without the requirement of the high-level executive and legal function required for estate administration. 
        
        If you do not have “anyone” or anyone you trust, you now do. You will enjoy the peace of mind of having your estate plan in order and knowing we are there to ensure that your way is our highway to success and that your wishes and desires will be carried out. 
        
        \#Who We Are
        
        Paladin means a leading champion of a cause. As such we are your advocates. Our fiduciary duty demands we put your needs ahead of our own. Unlike most fiduciaries, we have a physical office, we have a succession plan in case anything happens to one of our fiduciaries, we have support staff, our rates are competitive, and our principal is a law school graduate. In addition to these distinctions, we can prepare many legal documents at a considerable cost savings due to our Legal Documents Assistant designation. 
        
        \#We Exceed the Required Qualifications
        
        Every licensed fiduciary in the State of California needs to have either a college degree or equivalent experience, take approved courses, pass a state-required exam, and continue to take relevant educational courses every year. 
        
        \#What We Do NOT Do
        
        We do not disrupt existing relationships that are going well. We do not give legal advice but only practical advice. We do not provide direct services except in emergency or limited situations. We do not act unless needed. We do not discuss your private details with anyone who is not part of your team.`}
      />
      <h2>Our Team:</h2>
      <Team />
      <h2>Membership:</h2>
    </main>
  )
}
