import React from "react"
import { Article } from "../../ArticleGrid/Article"

export const Benefits = () => {
  return (
    <main className="Benefits">
      <h1>Benefits</h1>
      <Article title="Veterans" content={``} />
      <Article
        title="Social Security"
        content={`If you don't have Social Security Benefits we can apply on your behalf. If you or a loved one needs help managing the payments you already receive from Social Security we can be a representative payee.\n
        \#Representative Payee\n
      Social Security's Representative Payment Program provides benefit payment management for beneficiaries who are incapable of managing their Social Security or Supplemental Security Income (SSI) payments. We can be appointed as a suitable representative payee (payee) who manages the payments on behalf of Social Security  Recipients. Generally, Social Security looks for family or friends to serve as Representative payees. When friends or family members are not able to serve as payees, we act as a qualified organization. We also can help fill out the paperwork to designate in advance up to three individuals who could serve as payee for you if the need arises. If you are concerned that you are someone you know becomes incapable of managing or directing the management of his or her benefits, please call us.\n
      Payees will receive an annual Representative Payee Report to account for the benefit payments received.`}
      />
      <Article title="Medicare" content={``} />
      <Article title="Medi-Cal" content={``} />
      <Article title="Cal-Fresh" content={``} />
    </main>
  )
}
