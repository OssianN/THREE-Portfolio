import React from "react"
import BackButton from './BackButton'

const Layout = ({ setShowSideField, children }) => {
  
  const handleClick = () => {
    setShowSideField(false)
  }

  return (
    <main className="content__container">
      <BackButton handleClick={handleClick} color='#00b1e7' />
      {children}
    </main>
  )
}

export default Layout
