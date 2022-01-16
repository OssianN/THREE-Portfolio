import React, { useState } from "react"
import BackButton from "./BackButton"

const Layout = ({ setShowSideField, children }) => {
  const [loaded, setLoaded] = useState(false)
  const handleClick = () => {
    setShowSideField(false)
  }

  setTimeout(() => {
    setLoaded(true)
  }, 1450)

  return (
    <>
      {loaded && (
        <main className="content__container">
          <BackButton handleClick={handleClick} color="black" />
          {children}
        </main>
      )}
    </>
  )
}

export default Layout
