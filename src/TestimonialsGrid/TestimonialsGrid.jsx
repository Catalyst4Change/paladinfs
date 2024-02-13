import React from "react"
import { Testimonial } from "./Testimonials/Testimonial"
import "./TestimonialsGrid.scss"

export const TestimonialsGrid = () => {
  return (
    <main className="TestimonialsGrid">
      <Testimonial
        stars={5}
        date={"01/20/2024"}
        content={
          "Happy to be able to give some feedback for the support and service provided by Lori. In addition to transparency in communications and details, Lori also has provided lots of support in the area of elder care for our family. Thank you for all you do, Lori."
        }
        author={"Xylella F."}
      />
      <Testimonial
        stars={5}
        date={"01/01/2024"}
        content={
          "Using PALADIN FIDUCIARY SERVICES was the best thing I could have done. I could not have done it. I highly recommend their services. having Lori Beth, Bruce and Petra was the best choice I could have made. Excellent service and very knowledgeable."
        }
        author={"Darlene J."}
      />
      <Testimonial
        stars={5}
        date={"09/01/2023"}
        content={
          "Lori Beth and Bruce are the absolute best! Navigating the legal processes to settle our late mother's estate would not have been possible without their guidance and expertise. They offer an all-encompassing service which for us included, detailed and personalized support with small claims estate; international art appraisal; packing, moving and professional home organizers; car title transfers; overseas literary royalties; taxes, etc. etc. etc. They took the best care of us and provided an endless amount of cheering up, as we got through every task on our very long to-do list, with great efficiency. My sister I just adore Lori Beth and Bruce and we can't thank them enough!"
        }
        author={"Katina S"}
      />
      <Testimonial
        stars={5}
        date={"01/01/2023"}
        content={
          "Lori Beth is a business associate so I am very familiar with her work and have been able to observe how she works with her clients. You'll know right when you meet Lori Beth that she is confident, competent and in charge. In the truest sense of being a Fiduciary, it would be hard to find a  stronger advocate for your loved one. A Fiduciary holds a great deal of responsibility and stands side by side with their client helping manage all aspects of their life. It takes an individual who is a good communicator, solutions focused, has good energy, is patient, well connected, and above all caring and compassionate. Lori Beth is all of those things. I would not hesitate to recommend Lori Beth for Professional Private Fiduciary services."
        }
        author={"Chris S."}
      />
    </main>
  )
}
