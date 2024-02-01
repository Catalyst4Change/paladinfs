import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import { Home } from "./Home/Home"

import { Services } from "./Services/Services"
import { EstateServices } from "./Services/EstateServices/EstateServices"
import { FinancialServices } from "./Services/FinancialServices/FinancialServices"
import { MedicalCoordination } from "./Services/MedicalCoordination/MedicalCoordination"
import { Benefits } from "./Services/Benefits/Benefits"

import { Resources } from "./Resources/Resources"
import { Blog } from "./Resources/Blog/Blog"
import { Downloads } from "./Resources/Downloads/Downloads"
import { Videos } from "./Resources/Videos/Videos"
import { Documents } from "./Resources/Documents/Documents"

import { AboutUs } from "./AboutUs/AboutUs"
import "./App.scss"

export const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />
          {/* services */}
          <Route path="/services/*" element={<Services />} />{" "}
          <Route
            path="/services/estateservices/*"
            element={<EstateServices />}
          />
          <Route
            path="/services/financialservices/*"
            element={<FinancialServices />}
          />
          <Route
            path="/services/medicalcoordination/*"
            element={<MedicalCoordination />}
          />
          <Route path="/services/benefits/*" element={<Benefits />} />
          {/* resources */}
          <Route path="/resources/*" element={<Resources />} />
          <Route path="/resources/blog/*" element={<Blog />} />
          <Route path="/resources/documents/*" element={<Documents />} />
          <Route path="/resources/downloads/*" element={<Downloads />} />
          <Route path="/resources/videos/*" element={<Videos />} />
          <Route path="/resources/documentprep/*" element={<Documents />} />
          {/* about us */}
          <Route path="/aboutus/*" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
