import React, { useState, useEffect } from 'react'

export default function ToggleButton() {
    const[Mode, setMode] = useState(false)
    useEffect(() => {
    document.body.classList.toggle("dark", Mode);
    document.body.classList.toggle("light", !Mode);
  }, [Mode]);
  return (
    <div>
      <button className={`theme-btn ${Mode ? "dark-btn" : "light-btn"}`} onClick={()=>setMode(prev=>!prev)} >{Mode?<i className="bi bi-lightbulb-fill"></i> : <i className="bi bi-moon-fill"></i>}</button>
    </div>
  )
}
