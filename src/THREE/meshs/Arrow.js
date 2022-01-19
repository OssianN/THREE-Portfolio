import React from "react"

const Cube = ({ setMouseIsOver, setSpinCube, setTab }) => {
  const handleClick = () => {
    setSpinCube(prevState => !prevState)
    setTab(prevState => prevState + 1)
  }

  const handleMouseOver = () => {
    setMouseIsOver(true)
  }

  const handleMouseLeave = () => {
    setMouseIsOver(false)
  }

  return (
    <mesh
      rotation={[0, 0, 1]}
      onClick={handleClick}
      onPointerOver={handleMouseOver}
      onPointerOut={handleMouseLeave}
      position={[1.65, -0.25, 13]}
      visible={false}
    >
      <boxBufferGeometry attach="geometry" args={[1.3, 1.3, 0.2]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  )
}

export default Cube
