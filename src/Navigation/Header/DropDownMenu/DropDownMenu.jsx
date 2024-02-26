import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../Header.scss"

export const DropDownMenu = ({ menuItem }) => {
  const { name, link, subLinks } = menuItem
  const [menuOpen, setMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [ignoreHover, setIgnoreHover] = useState(false) // New state to temporarily ignore hover

  // Enhance closeMenu to temporarily ignore hover
  const closeMenu = () => {
    setMenuOpen(false)
    setIgnoreHover(true) // Ignore hover when menu is closing
    setTimeout(() => setIgnoreHover(false), 500) // Reset ignoreHover after a delay
  }

  return (
    <div
      onMouseEnter={() => !ignoreHover && setIsHovered(true)}
      onMouseLeave={() => !ignoreHover && setIsHovered(false)}
    >
      <Link to={link}>
        <span className="nav-item">{name}</span>
      </Link>
      {subLinks && (
        <nav
          className={`dropdown-menu ${
            menuOpen || (isHovered && !ignoreHover) ? "active" : ""
          }`}
        >
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
