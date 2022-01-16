import React, { useState } from "react"
import BackButton from "./BackButton"

const Layout = ({ setShowSideField, children }) => {
  const handleClick = () => {
    setShowSideField(false)
  }

  return (
    <main className="content__container">
      <BackButton handleClick={handleClick} color="black" />
      {children}
    </main>
  )
}

export default Layout
