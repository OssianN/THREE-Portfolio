import React from "react"

const BackButton = ({ handleClick, color }) => {
  return (
    <button
      className="project__back-button btn"
      onClick={handleClick}
      style={{ borderColor: color }}
    >
      <div className="back-button__span-container">
        <span style={{ backgroundColor: color }}></span>
        <span style={{ backgroundColor: color }}></span>
        <span style={{ backgroundColor: color }}></span>
      </div>
    </button>
  )
}

export default BackButton
