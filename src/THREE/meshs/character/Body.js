import React from "react"

const Body = ({ color, reference }) => {
  return (
    <mesh castShadow ref={reference} position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[0.6, 32, 32]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Body
