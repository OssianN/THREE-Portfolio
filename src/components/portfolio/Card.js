import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Anime from "react-anime"

const Card = ({ post, handleClick, i }) => {
  const [focus, setFocus] = useState(false)
  const [shadowClass, setShadowClass] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setShadowClass("portfolio__article")
    }, 3900)
  })

  const handleLocalClick = () => {
    setFocus(!focus)
    handleClick()
  }

  if (!post) {
    return null
  }

  const image = getImage(post.desktopImage?.gatsbyImageData)

  return (
    <li
      className={`portfolio__li`}
      onClick={handleLocalClick}
      name={`${post.color}`}
    >
      <Anime
        easing="easeInOutExpo"
        duration={1000}
        delay={i * 200}
        opacity={[".1", "1"]}
        translateX={["100vw", "0"]}
        autoplay={true}
      >
        <article className={shadowClass}>
          <h2 className="portfolio__title">{post.title}</h2>
          {image && (
            <GatsbyImage
              className={`portfolio__img`}
              image={image}
              style={{ pointerEvents: "none" }}
              alt={post.title}
            />
          )}
        </article>
      </Anime>
    </li>
  )
}

export default Card
