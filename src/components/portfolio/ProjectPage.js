import React, { useEffect } from "react"
import Img from "gatsby-image"
import BackButton from '../BackButton'

const ProjectPage = ({ post, handleClick }) => {
  useEffect(() => {
    if (!post) {
      return null
    }
  })

  return (
    <div className="project__container">
      <BackButton handleClick={handleClick} />
      <Img className="project__img" fluid={post.node.desktopImage.fluid}></Img>
      <div className="project__text-container">
        <h1 className="project__title">{post.node.title}</h1>
        <p className="project__paragraph">
          {post.node.description.description}
        </p>
      </div>
    </div>
  )
}

export default ProjectPage
