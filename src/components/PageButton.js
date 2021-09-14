import React from 'react'

const PageButton = ({ setTab }) => {
  const handleNext = () => {
    setTab(prevState => prevState + 1)
  }

  const handlePrev = () => {
    setTab(prevState => prevState - 1)
  }

  return (
    <div className='page-buttons__container'>
      <button className='page-buttons__button' onClick={handlePrev}>
        &#x2039;
      </button>
      <button className='page-buttons__button' onClick={handleNext}>
        &#x203A;
      </button>
    </div>
  )
}

export default PageButton
