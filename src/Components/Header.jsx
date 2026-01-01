import React, { useState } from 'react'
import ToggleButton from './ToggleButton'

export default function Header({ sidebarOpen, toggleSidebar }) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div>
        <div className="navBar">
          <div className="nav-logo">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="React" />
            <h2>React Learning Portal</h2>
          </div>

          <div className={`search ${searchOpen ? "open" : ""}`}>
              <input
                type="search"
                placeholder="Search concepts"
                autoFocus={searchOpen}
              />
              <i
                className="bi bi-search"
                onClick={() => setSearchOpen(false)}
              ></i>
        </div>

          <ToggleButton/>
          {/* menu button for mobile */}

          <div className="menu-btn" onClick={toggleSidebar}>
            <i className={`bi ${sidebarOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </div>

        </div>
    </div>
  )
}
