import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import { Header } from "./Navigation/Header/Header.jsx"
import { Footer } from "./Navigation/Footer/Footer.jsx"
import { BrowserRouter } from "react-router-dom"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
