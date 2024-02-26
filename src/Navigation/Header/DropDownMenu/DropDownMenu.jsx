import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../Header.scss"

export const DropDownMenu = ({ menuItem }) => {
  const { name, link, subLinks } = menuItem
  const [menuOpen, setMenuOpen] = useState(false) // Assuming you want to manage dropdown visibility
  const [isHovered, setIsHovered] = useState(false) // New state to manage hover

  // Function to toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link}>
        <span className="nav-item">{name}</span>
      </Link>
      {subLinks ? (
        <nav
          className={`dropdown-menu ${menuOpen || isHovered ? "active" : ""}`}
        >
          {subLinks.map((item, index) => (
            <div key={index} className="sub-link">
              <Link to={item.link}>
                <span onClick={toggleMenu}>{item.name}</span>
              </Link>
            </div>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
