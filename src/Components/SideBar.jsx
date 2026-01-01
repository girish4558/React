import { NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import { useState } from "react";

export default function SideBar({ isOpen, closeSidebar }) {
  const [hooksOpen, setHooksOpen] = useState(false)
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          alt="React"
        />
        <h3>
          React Learning <span>Portal</span>
        </h3>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        <NavLink to="/" end onClick={closeSidebar}>
          <i className="bi bi-house"></i>
          Home
        </NavLink>

        <NavLink to="/react" onClick={closeSidebar}>
          <i className="bi bi-filetype-jsx"></i>
          What is React?
        </NavLink>

        <NavLink to="/jsx" onClick={closeSidebar}>
          <i className="bi bi-code-slash"></i>
          JSX
        </NavLink>

        <NavLink to="/components" onClick={closeSidebar}>
          <i className="bi bi-box"></i>
          Components
        </NavLink>

        <NavLink to="/props" onClick={closeSidebar}>
          <i className="bi bi-arrow-left-right"></i>
          Props
        </NavLink>

        <NavLink to="/conditional-Rendaring" onClick={closeSidebar}>
          <i className="bi bi-diagram-3"></i>
          Conditional Rendering
        </NavLink>

        {/* HOOKS PARENT */}
          <div
            className="menu-parent"
            onClick={() => setHooksOpen(!hooksOpen)}
          >
            <span>
              <i className="bi bi-lightning"></i> Hooks
            </span>
            <i className={`bi ${hooksOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
          </div>

          {/* SUB MENU */}
          {hooksOpen && (
            <div className="submenu">
              <NavLink to="/hooks/use-state" onClick={closeSidebar}>
                <i className="bi bi-lightning"></i> useState
              </NavLink>
              <NavLink to="/hooks/use-effect" onClick={closeSidebar}>
                <i className="bi bi-lightning"></i> useEffect
              </NavLink>
              <NavLink to="/hooks/use-context" onClick={closeSidebar}>
                <i className="bi bi-lightning"></i> useContext
              </NavLink>
              <NavLink to="/hooks/use-ref" onClick={closeSidebar}>
                <i className="bi bi-lightning"></i> useRef
              </NavLink>
              <NavLink to="/hooks/use-reducer" onClick={closeSidebar}>
                <i className="bi bi-lightning"></i> useReducer
              </NavLink>
              <NavLink to="/hooks/use-id" onClick={closeSidebar}>
                <i className="bi bi-lightning"></i> useId
              </NavLink>
            </div>
          )}

        

        <NavLink to="/lists" onClick={closeSidebar}>
          <i className="bi bi-list-ul"></i>
          Lists & Keys
        </NavLink>


        <NavLink to="/forms" onClick={closeSidebar}>
          <i className="bi bi-ui-checks"></i>
          Forms
        </NavLink>

        <NavLink to="/routings" onClick={closeSidebar}>
          <i className="bi bi-router"></i>
          Routings
        </NavLink>

        <NavLink to="/context-API" onClick={closeSidebar}>
          <i className="bi bi-diagram-2"></i>
          Context API
        </NavLink>

        <NavLink to="/Custom-hooks" onClick={closeSidebar}>
          <i className="bi bi-tools"></i>
          Custom Hooks
        </NavLink>

        <NavLink to="/API-Integration" onClick={closeSidebar}>
          <i className="bi bi-cloud-arrow-down"></i>
          API Integration
        </NavLink>
      </nav>
    </aside>
  );
}
