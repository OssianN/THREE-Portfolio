import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import Anime from "react-anime"

const Card = ({ post, handleClick, i }) => {
  const [focus, setFocus] = useState(false)
  const [shadowClass, setShadowClass] = useState("")

  const handleLocalClick = () => {
    setFocus(!focus)
    handleClick()
  }

  useEffect(() => {
    setTimeout(() => {
      setShadowClass("portfolio__article")
    }, 3900)
  })

  return (
    <li
      className={`portfolio__li`}
      onClick={handleLocalClick}
      name={`${post.node.color}`}
    >
      <Anime
        easing="easeInOutExpo"
        duration={1000}
        delay={i * 200 + 1300}
        opacity={[".1", "1"]}
        translateX={["100vw", "0"]}
        autoplay={true}
      >
        <article className={shadowClass}>
          <h2 className="portfolio__title">{post.node.title}</h2>
          <Img
            className={`portfolio__img`}
            fluid={post.node.desktopImage.fluid}
            style={{ pointerEvents: "none" }}
          ></Img>
        </article>
      </Anime>
    </li>
  )
}

export default Card
