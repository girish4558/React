import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Developed by
        <span className="footer-name"> Gireesh kumar</span>
      </p>
    </footer>
  )
}
