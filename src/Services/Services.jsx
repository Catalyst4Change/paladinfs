import React from "react"

import "./Services.scss"
import { Link, Routes, Route } from "react-router-dom"

export const Services = () => {
  return (
    <main className="Services">
      <Link to="/services/estateservices">
        <h2>EstateServices</h2>
      </Link>
      <Link to="/services/financialservices">
        <h2>FinancialServices</h2>
      </Link>
      <Link to="/services/medicalcoordination">
        <h2>MedicalCoordination</h2>
      </Link>
      <Link to="/services/benefits">
        <h2>Benefits</h2>
      </Link>
    </main>
  )
}
