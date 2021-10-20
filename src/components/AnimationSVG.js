import React from "react"

const AnimationSVG = ({ color, style }) => {
  return (
    <svg
      className="animation__svg"
      style={style}
      viewBox="0 0 215 110"
      preserveAspectRatio="none"
    >
      <polygon
        className="polymorph"
        fill={color ?? "#00b1e7"}
        points="215,110 0,110 206,106 215,0"
      />
    </svg>
  )
}

export default AnimationSVG
