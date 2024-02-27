import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../Header.scss"

export const DropDownMenu = ({ menuItem }) => {
  const { name, link, subLinks } = menuItem
  const [menuOpen, setMenuOpen] = useState(false)

  // Directly handle menu opening and closing without ignoreHover
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div
      onMouseEnter={() => setMenuOpen(true)} // Open menu on mouse enter
      onMouseLeave={() => setMenuOpen(false)} // Close menu on mouse leave
    >
      <Link to={link}>
        <span className="nav-item">{name}</span>
      </Link>
      {subLinks && (
        <nav className={`dropdown-menu ${menuOpen ? "active" : ""}`}>
          {subLinks.map((item, index) => (
            <div key={index} className="sub-link">
              <Link to={item.link} onClick={closeMenu}>
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </nav>
      )}
    </div>
  )
}
