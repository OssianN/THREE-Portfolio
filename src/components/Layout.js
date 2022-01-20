import React, { useState } from "react"
import BackButton from "./BackButton"

const Layout = ({ setShowSideField, tab, children }) => {
  const [loaded, setLoaded] = useState(false)

  const handleClick = () => {
    setShowSideField(false)
  }

  setTimeout(() => {
    setLoaded(true)
  }, 1450)

  if (!loaded) {
    return <></>
  }

  const color = tab % 3 === 1 ? "white" : "black"

  return (
    <main className="content__container">
      <BackButton handleClick={handleClick} color={color} />
      {children}
    </main>
  )
}

export default Layout
