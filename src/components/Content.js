import React from "react"
import Portfolio from "./portfolio/Portfolio"
import About from "./About"
import Layout from "./Layout"

const Content = ({ tab, setShowSideField }) => {
  const conditionalRenderedContent = () => {
    switch (tab % 4) {
      case 0:
        return <Portfolio />
      case 1:
        return <About />
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
