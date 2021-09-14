import React from 'react'

const Layout = ({ setShowSideField, children }) => {
  const handleClick = () => {
    setShowSideField(false)
  }

  return (
    <main className='content__container'>
      <button onClick={handleClick} className='btn back__button'>Back</button>
      {children}
    </main>
  )
}

export default Layout
