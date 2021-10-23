import React from "react"

const Wall = ({ args, position, color, rotation }) => {
  return (
    <mesh
      receiveShadow
      castShadow
      position={position}
      rotation={rotation}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Wall
