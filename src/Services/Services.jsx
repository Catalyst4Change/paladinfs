import React from "react"
import { EstateServices } from "./EstateServices/EstateServices"
import { FinancialServices } from "./FinancialServices/FinancialServices"
import { MedicalCoordination } from "./MedicalCoordination/MedicalCoordination"
import { Benefits } from "./Benefits/Benefits"

import "./Services.scss"
import { Link, Routes, Route } from "react-router-dom"

export const Services = () => {
  return (
    <main className="Services">
      <Routes>
        <Route path="/estateservices/*" element={<EstateServices />} />
        <Route path="/financialservices/*" element={<FinancialServices />} />
        <Route
          path="/medicalcoordination/*"
          element={<MedicalCoordination />}
        />
        <Route path="/benefits/*" element={<Benefits />} />
      </Routes>
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
