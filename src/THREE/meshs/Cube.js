import React, { useState, useRef } from "react"
import * as THREE from "three"
import { useSpring } from "react-spring"
import { a } from "@react-spring/three"

const Cube = ({
  args,
  position,
  color,
  handleMouseOver,
  handleMouseLeave,
  setTab,
}) => {
  const [active, setActive] = useState(false)
  const group = useRef(null)

  const handleClick = () => {
    setActive(!active)
    setTab(prevState => prevState + 1)
  }

  const { rotation } = useSpring({
    rotation: active
      ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)]
      : [0, 1, 1],
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })

  return (
    <group ref={group} position={position}>
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
