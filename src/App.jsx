import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import { Home } from "./Home/Home"
import { Services } from "./Services/Services"
import { Resources } from "./Resources/Resources"
import { AboutUs } from "./AboutUs/AboutUs"
import "./App.scss"

export const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/resources/*" element={<Resources />} />
          <Route path="/aboutus/*" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
