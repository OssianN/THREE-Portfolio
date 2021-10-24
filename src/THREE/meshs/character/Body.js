import React from "react"

const Body = ({ reference }) => {
  return (
    <mesh castShadow ref={reference} position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[0.6, 32, 32]} />
      <meshStandardMaterial attach="material" color="#00b1e7" />
    </mesh>
  )
}

export default Body
