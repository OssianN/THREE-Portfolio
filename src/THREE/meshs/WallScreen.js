import React from "react"

const Cube = ({ args, position, setShowSideField }) => {
  const handleClick = () => {
    setShowSideField(true)
  }

  return (
    <mesh castShadow position={position} onClick={handleClick}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={"white"} />
    </mesh>
  )
}

export default Cube
