import React from "react"
import Portfolio from "./portfolio/Portfolio"
import About from "./about/About"
import Skills from "./skills/Skills"
import Layout from "./Layout"

const Content = ({ tab, setShowSideField }) => {
  const conditionalRenderedContent = () => {
    switch (tab % 3) {
      case 0:
        return <Portfolio />
      case 1:
        return <About />
      case 2:
        return <Skills />
      default:
        return <main></main>
    }
  }

  return (
    <Layout setShowSideField={setShowSideField}>
      {conditionalRenderedContent()}
    </Layout>
  )
}

export default Content
