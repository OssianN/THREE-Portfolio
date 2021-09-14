import React, { useRef } from "react"

const MainHeader = ({ showSideField, setShowSideField, text }) => {
  const spanRef = useRef(null)

  const handleMouseOver = () => {
    spanRef.current.classList.add("main__h1-underline--expand-span")
  }

  const handleMouseLeave = () => {
    spanRef.current.classList.remove("main__h1-underline--expand-span")
  }

  const handleClick = () => {
    setShowSideField(true)
  }

  return (
    <h1
      className={`main__h1 ${
        showSideField ? "main__h1--hide" : "main__h1--show"
      }`}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text}
      <span className="main__h1-underline" ref={spanRef}></span>
    </h1>
  )
}

export default MainHeader
