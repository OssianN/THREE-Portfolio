import React, { useEffect, useState } from 'react'
import CanvasContainer from '../THREE/Canvas'
import Content from '../components/Content'
import MainHeader from '../components/MainHeader'
import { setTextAndCubeColor } from '../utils'
import '../styles/base.css'

const App = () => {
  const [mouseIsOver, setMouseIsOver] = useState(false)
  const [tab, setTab] = useState(0)
  const [showSideField, setShowSideField] = useState(false)
  const [color, setColor] = useState('#0077ff')
  const [text, setText] = useState('Portfolio')

  useEffect(() => {
    setTextAndCubeColor(tab, setText, setColor)
  }, [tab])

  return (
    <section className='main__section'>
      <CanvasContainer
        mouseIsOver={mouseIsOver}
        setMouseIsOver={setMouseIsOver}
        showSideField={showSideField}
        setShowSideField={setShowSideField}
        tab={tab}
        setTab={setTab}
        color={color}
      />
      <MainHeader
        setShowSideField={setShowSideField}
        mouseIsOver={mouseIsOver}
        setMouseIsOver={setMouseIsOver}
        text={text}
      />
      {showSideField ? (
        <Content tab={tab} setShowSideField={setShowSideField} />
      ) : null}
    </section>
  )
}

export default App

