import React, { useEffect, useRef, useState, useCallback } from "react"
import "./Header.scss"
import { Link } from "react-router-dom"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navItems, setNavItems] = useState([
    { name: "Services", link: "/services" },
    { name: "Resources", link: "/resources" },
    { name: "About Us", link: "/aboutus" },
  ])
  const [menuItems, setMenuItems] = useState([])
  const navRef = useRef()
  const navContainerRef = useRef()

  // Open n close menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Handle keyboard/screen-reader menu navigation
  const handleKeyDown = (event) => {
    const focusOnBurger = () => {
      document.querySelector(".hamburger").focus()
    }
    if (
      (!menuOpen && event.key === "Enter") ||
      (!menuOpen && event.key === " ")
    ) {
      event.preventDefault()
      toggleMenu()
    } else if (menuOpen && event.key === " ") {
      event.preventDefault()
      setMenuOpen(false)
      focusOnBurger()
    } else if (menuOpen && event.key === "Escape") {
      setMenuOpen(false)
      focusOnBurger()
    }
  }

  useEffect(() => {
    // Close sliding menu by clicking outside it
    const handleOutsideClick = (event) => {
      const menu = document.querySelector(".sliding-menu")
      const hamburger = document.querySelector(".hamburger")
      // Check if the click is outside the menu and hamburger
      if (
        menuOpen &&
        menu &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    // Only add the event listener when the menu is open
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick)
    }

    // Clean up the event listener when the component unmounts or the menu closes
    return () => document.removeEventListener("click", handleOutsideClick)
  }, [menuOpen])

  // Adjust nav items based on available width
  const adjustNavItems = useCallback(() => {
    const navWidth = navContainerRef.current.offsetWidth
    const hamburgerWidth = document.querySelector(".hamburger")
      ? document.querySelector(".hamburger").offset
      : 0
    const titleWidth = document.querySelector(".header-title").offsetWidth
    const unUsableNavWidth = hamburgerWidth + titleWidth

    let totalNavItemsWidth = 0

    if (navRef.current && navRef.current.children.length > 0) {
      totalNavItemsWidth = navItems.reduce((total, item) => {
        const itemIndex = navItems.indexOf(item)
        const child = navRef.current.children[itemIndex]
        return total + (child ? child.offsetWidth + 25 : 0)
      }, 0)
    }
    let updatedNavItems = [...navItems]
    let updatedMenuItems = [...menuItems]

    while (
      navWidth - unUsableNavWidth < totalNavItemsWidth &&
      updatedNavItems.length > 0
    ) {
      // Assume the last item is the one to move
      const itemToMove = updatedNavItems[updatedNavItems.length - 1]
      const itemWidth =
        navRef.current.children[updatedNavItems.length - 1].offsetWidth
      totalNavItemsWidth -= itemWidth
      updatedNavItems.pop() // Remove the item from the end of the array
      updatedMenuItems.unshift(itemToMove) // Add it to the start of the menu items array
    }

    // Check if we need to update the state
    if (navItems.length !== updatedNavItems.length) {
      setNavItems(updatedNavItems)
      setMenuItems(updatedMenuItems)
    }
  }, [navItems, menuItems, navRef])

  // Run adjustNavItems on resize
  useEffect(() => {
    const handleResize = () => {
      adjustNavItems()
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Call adjustNavItems on mount to set the initial state
    adjustNavItems()

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [adjustNavItems])

  return (
    <header className="header" ref={navContainerRef}>
      {/* header bar */}
      <nav className="header-menu">
        {menuItems.length > 0 && (
          <div
            tabIndex={1}
            className="hamburger"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
          >
            {/* hamburger slices */}
            <div
              className={`hamburger-slice line-1 ${menuOpen ? "active" : ""}`}
            ></div>
            <div
              className={`hamburger-slice line-2 ${menuOpen ? "active" : ""}`}
            ></div>
            <div
              className={`hamburger-slice line-3 ${menuOpen ? "active" : ""}`}
            ></div>
          </div>
        )}

        <Link to="/">
          <span className="header-title">Paladin Fiduciary</span>
        </Link>
        <div className="nav-items" ref={navRef}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <span> {item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
      {/* sliding menu contains hidden items */}
      <div className={`sliding-menu ${menuOpen ? "active" : ""}`}>
        <nav>
          <span>sliding menu</span>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>
                  <h3 onClick={toggleMenu}>{item.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
