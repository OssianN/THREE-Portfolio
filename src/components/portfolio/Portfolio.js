import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Anime from "react-anime"
import "./portfolio.css"

const Portfolio = () => {
  const [index, setIndex] = useState(0)
  const query = useStaticQuery(
    graphql`
      {
        allContentfulPortfolio {
          edges {
            node {
              description {
                description
              }
              link
              slug
              title
              desktopImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              mobileImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              order
            }
          }
        }
      }
    `
  )

  const data = query.allContentfulPortfolio.edges

  const dataToJsx = data.map((post, i) => {
    return (
      <li className="portfolio__li" key={i}>
        <Anime
          easing="easeOutElastic"
          duration={1000}
          opacity={[".5", "1"]}
          translateX={["250px", "0"]}
          autoplay={true}
        >
          <article>
            <Img
              className="portfolio__img"
              fluid={post.node.desktopImage.fluid}
              loading="eager"
            ></Img>
          </article>
        </Anime>
      </li>
    )
  })

  return (
    <>
      <ul className="portfolio__ul">{dataToJsx[index]}</ul>
      <button
        style={{ zIndex: "100", position: "absolute", top: 0 }}
        onClick={() => setIndex(index + 1)}
      >
        next
      </button>
    </>
  )
}

export default Portfolio
