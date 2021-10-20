import React, { useState } from 'react'
import Body from '../meshs/character/Body'
import Eyes from '../meshs/character/Eyes'
import Limb from '../meshs/character/Limb'

const CharacterGroup = ({ mouseIsOver }) => {
  const [limbRotation] = useState(0)

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

  return (
    <group position={[-1.9, -0.5, 12]} rotation={[0, 0.3, 0]}>
      <Body />
      <Eyes position={[-0.3, 0.3, 0.6]} eyesPosition={eyesPosition} />
      <Eyes position={[0.3, 0.3, 0.6]} eyesPosition={eyesPosition} />
      <Limb vectorObj={limb1} />
      <Limb vectorObj={limb2} rotation={[limbRotation, 0, 0]} />
      <Limb vectorObj={limb3} />
      <Limb vectorObj={limb4} />
    </group>
  )
}

export default CharacterGroup
