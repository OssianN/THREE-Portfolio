import React from "react"

const SkillsPlane = ({ color }) => {
  const planePositon = [0, -1.5, 0]
  const planeRotation = [-Math.PI / 2, 0, 0]

  return (
    <mesh
      receiveShadow
      position={planePositon}
      rotation={planeRotation}
    >
      <planeBufferGeometry attach="geometry" args={[170, 70]} />
      <meshStandardMaterial attach="material" opacity={0.9} color={color} />
    </mesh>
  )
}

export default SkillsPlane
