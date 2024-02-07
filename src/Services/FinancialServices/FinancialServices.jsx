import React from "react"
import { Article } from "../../ArticleGrid/Article"
import "../../App.scss"

export const FinancialServices = () => {
  return (
    <main className="FinancialServices">
      <h1>Financial Services</h1>
      <p>
        Beyond their traditional roles, licensed fiduciaries play a vital part
        in coordinating with your tax professional. They assist in gathering,
        organizing, and overseeing the tax return process. This collaboration
        ensures your financial affairs are managed comprehensively, providing
        crucial support in navigating the complexities of taxes associated with
        estate planning.
      </p>
      <Article
        title="What Is a Daily Money Manager?"
        content={`
A daily money manager is a person who takes over someone’s day-to-day financial tasks. A variety of people employ daily money managers, ranging from elderly clients to those simply too busy to maintain total control and accuracy of their financial needs. Daily money managers offer services to ensure nothing falls through the cracks, including necessities like paying monthly bills, assisting with tax records, balancing checkbooks, decoding medical bills, and negotiating with creditors. Other services may include notarization, payroll management, health care advocacy, or acting in another fiduciary capacity. \n

Understanding Daily Money Manager (DMM)\n
Daily money managers deliver essential financial services to seniors and older adults, people with disabilities, busy professionals, high net worth individuals, small businesses, and others. The demand for daily money managers has grown steadily in recent years, due largely to a growing elderly population. As their parents grow old, children often take over their financial tasks, but many find themselves unable to do so because of their work and family commitments. The growth of the industry can also be attributed to the increase in dual-income families: With both parents working, there is often not enough time to run around ensuring documents are properly signed or bill payments are processed on time. Wealthy people may hire daily money managers to avoid taking care of menial money tasks, or because they feel their time is better spent doing other things that could earn them more money. \n

How Daily Money Managers Work\n
Let’s assume a man is elderly and lives alone. His wife, who used to handle the bills, insurance, shopping, budgeting, recordkeeping, and investing, died a year ago. His two children feel he is too overwhelmed and distracted to care for these things effectively. They both work, as do their spouses, and they have children of their own to take care of. The man, or his children, hires a daily money manager to help out. \n

The daily money manager pays all of the person’s bills, handles things if he is billed incorrectly, balances his checkbook, prepares and makes bank deposits for him, gets his tax information ready, and ensures that his medical bills are processed and paid correctly. The daily money manager visits him at home twice a month to discuss recent activity and future plans.`}
      />
    </main>
  )
}
