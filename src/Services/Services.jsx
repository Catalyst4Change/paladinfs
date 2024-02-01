import React from "react"
import "./Services.scss"
import { Link } from "react-router-dom"

export const Services = () => {
  return (
    <main className="Services">
      <Link to="/services/estateservices" element={<EstateServices />} />
      <Link to="/services/financialservices" element={<FinancialServices />} />
      <Link
        to="/services/medicalcoordination"
        element={<MedicalCoordination />}
      />
      <Link to="/services/benefits" element={<Benefits />} />
    </main>
  )
}
