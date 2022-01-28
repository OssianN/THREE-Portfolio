import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BackButton from "../BackButton"

const ProjectPage = ({ post, handleClick }) => {
  if (!post) {
    return null
  }

  const image = getImage(post.desktopImage?.gatsbyImageData)

  return (
    <div className="project__container">
      <BackButton handleClick={handleClick} />
      {image && (
        <GatsbyImage className="project__img" image={image} alt={post.title} />
      )}
      <div className="project__text-container">
        <h1 className="project__title">{post.title}</h1>
        <p className="project__paragraph">{post.description.description}</p>
      </div>
      <div
        className="project--bottom-fade"
        style={{
          background: `linear-gradient(${post.color}00, ${post.color})`,
        }}
      ></div>
    </div>
  )
}

export default ProjectPage
