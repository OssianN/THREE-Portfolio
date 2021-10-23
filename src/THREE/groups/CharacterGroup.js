import React, { useState } from "react"
import { a, useSpring } from "@react-spring/three"
import Body from "../meshs/character/Body"
import Eyes from "../meshs/character/Eyes"
import Limb from "../meshs/character/Limb"

const CharacterGroup = ({ mouseIsOver }) => {
  const [clicked, setClicked] = useState(false)

  const limb1 = {
    v1: [-0.55, -0.2, 0],
    v2: [-0.75, -0.3, 0.4],
    v3: [0.05, -0.3, 0.7],
  }

  const limb2 = {
    v1: [0.55, -0.2, 0],
    v2: [0.95, -0.2, 0],
    v3: [1.35, -0.2, 0],
  }

  const limb3 = {
    v1: [-0.14, -0.5, 0],
    v2: [-0.14, -0.75, 0],
    v3: [-0.14, -1, 0],
  }

  const limb4 = {
    v1: [0.14, -0.5, 0],
    v2: [0.14, -0.75, 0],
    v3: [0.14, -1, 0],
  }

  const eyesPosition = mouseIsOver ? -0.12 : 0

  const { rotation } = useSpring({
    rotation: clicked ? [0, 1.2, 0] : [0, 0.3, 0],
    config: { mass: 1, tension: 10, friction: 1, precision: 0.1 },
  })

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 500)
  }
  return (
    <a.group
      position={[-1.9, -0.5, 12]}
      rotation={rotation}
      onClick={handleClick}
    >
      <Body />
      <Eyes position={[-0.3, 0.3, 0.6]} eyesPosition={eyesPosition} />
      <Eyes position={[0.3, 0.3, 0.6]} eyesPosition={eyesPosition} />
      <Limb vectorObj={limb1} />
      <Limb vectorObj={limb2} />
      <Limb vectorObj={limb3} />
      <Limb vectorObj={limb4} />
    </a.group>
  )
}

export default CharacterGroup
