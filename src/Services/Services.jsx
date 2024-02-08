import React from "react"
import { Link, Routes, Route } from "react-router-dom"

export const Services = () => {
  return (
    <main className="Services">
      <Link to="/services/estateservices">
        <h2>Estate Services</h2>
      </Link>
      <Link to="/services/financialservices">
        <h2>Financial Services</h2>
      </Link>
      <Link to="/services/medicalcoordination">
        <h2>Medical Coordination</h2>
      </Link>
      <Link to="/services/benefits">
        <h2>Benefits</h2>
      </Link>
    </main>
  )
}
