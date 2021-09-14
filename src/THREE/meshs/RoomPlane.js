import React from 'react'
import { usePlane } from '@react-three/cannon'

const NamePlane = ({ color }) => {
  const planePositon = [0, -1.5, 0]
  const planeRotation = [-Math.PI / 2, 0, 0]

  const [ref] = usePlane(() => ({
    mass: 100,
    position: planePositon,
    rotation: planeRotation,
    type: 'Static',
  }))

  return (
    <mesh
      receiveShadow
      position={planePositon}
      rotation={planeRotation}
      ref={ref}>
      <planeBufferGeometry attach='geometry' args={[170, 70]} />
      <meshStandardMaterial
        attach='material'
        opacity={0.9}
        color={color}
        roughness={0}
      />
    </mesh>
  )
}

export default NamePlane
