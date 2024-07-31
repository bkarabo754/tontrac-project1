import React from 'react'
import { FaHome } from 'react-icons/fa'

function NavIconButton({ onClick, label }) {
  return (
    <div
      className="text-white cursor-pointer"
      style={{ width: "25px", height: "25px" }}
      onClick={onClick}
      aria-label={label}
    >
      <FaHome />
    </div>
  )
}

export default NavIconButton
