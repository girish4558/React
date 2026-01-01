import React, { useState, useRef, useEffect } from "react";
import { useSiteContent } from "./SearchProvider";
import { useNavigate } from "react-router-dom";

export default function Header({ sidebarOpen, toggleSidebar }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const content = useSiteContent();
  const searchRef = useRef();

  const Navigate = useNavigate()
  // Close search dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter site content
  const filteredContent = content.filter(
    item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={`navBar ${searchOpen ? "search-active" : ""}`}>
        <div className="nav-logo">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="React" onClick={()=>Navigate("/")}/>
          <h2 onClick={()=>Navigate("/")}>React Learning Portal</h2>
        </div>

        <div className={`search ${searchOpen ? "open" : ""}`} ref={searchRef}>
          <input
            type="search"
            placeholder="Search concepts"
            autoFocus={searchOpen}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSearchOpen(true);
            }}
            onFocus={() => setSearchOpen(true)}
          />
          <i className="bi bi-search" onClick={() => setSearchOpen(!searchOpen)}></i>

          {/* Search Dropdown */}
          {searchOpen && searchTerm && (
            <div className="search-results">
              {filteredContent.length > 0 ? (
                filteredContent.map(item => (
                  <a key={item.id} href={item.url} className="search-item" onClick={() => setSearchOpen(false)}>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </a>
                ))
              ) : (
                <p className="search-item">No results found</p>
              )}
            </div>
          )}
        </div>

        {/* Menu Toggle */}
        <div className="menu-btn" onClick={toggleSidebar}>
          <i className={`bi ${sidebarOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </div>
      </div>
    </div>
  );
}
