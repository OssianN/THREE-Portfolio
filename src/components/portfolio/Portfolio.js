import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import anime from "animejs"
import Card from "./Card"
import AnimationSVG from "../AnimationSVG"
import ProjectPage from "./ProjectPage"
import "./portfolio.css"

const Portfolio = () => {
  const [flipped, setFlipped] = useState(false)
  const [post, setPost] = useState(null)

  const query = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        nodes {
          desktopImage {
            gatsbyImageData
          }
          color
          description {
            description
          }
          link
          order
          title
          slug
        }
      }
    }
  `)

  const data = query.allContentfulPortfolio.nodes

  const common = {
    targets: ".polymorph",
    easing: "easeOutQuad",
    duration: 600,
    loop: false,
  }

  const handleClick = (post, i) => {
    setFlipped(!flipped)
    setPost({ ...post, i })
    anime({
      ...common,
      points: flipped
        ? [{ value: "215,110 0,110 206,106 215,0" }]
        : [{ value: "215,110 0,110 0,0 215,0" }],
    })
  }

  return (
    <>
      {flipped && <ProjectPage post={post} handleClick={handleClick} />}
      <div className="portfolio__container">
        <AnimationSVG color={post?.color} />
        <ul className="portfolio__ul">
          {data.map((post, i) => {
            return (
              <Card
                key={i}
                post={post}
                i={i}
                flipped={flipped}
                handleClick={() => handleClick(post, i)}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Portfolio
