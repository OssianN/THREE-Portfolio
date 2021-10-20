import React, { useState } from "react"
import * as THREE from "three"
import { a, useSpring } from "@react-spring/three"

const Cube = ({
  args,
  position,
  color,
  handleMouseOver,
  handleMouseLeave,
  setTab,
}) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
    setTab(prevState => prevState + 1)
  }

  const { rotation } = useSpring({
    rotation: active
      ? [THREE.MathUtils.degToRad(315), 0, THREE.MathUtils.degToRad(45)]
      : [THREE.MathUtils.degToRad(135), 0, THREE.MathUtils.degToRad(135)],
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })

  return (
    <group position={position}>
      <a.mesh
        castShadow
        receiveShadow
        rotation={rotation}
        onClick={handleClick}
        onPointerOver={handleMouseOver}
        onPointerLeave={handleMouseLeave}
      >
        <boxBufferGeometry attach="geometry" args={args} />
        <meshStandardMaterial attach="material" color={color} roughness={0} />
      </a.mesh>
    </group>
  )
}

export default Cube
