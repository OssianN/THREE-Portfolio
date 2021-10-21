import React from "react"
import * as THREE from "three"
import Mont from "../../MontserratBold.json"

const Name = ({ color, text, position, rotation, size, opacity }) => {
  const font = new THREE.FontLoader().parse(Mont)

  const textOptions = {
    font,
    size,
    height: 0.02,
  }

  return (
    <mesh castShadow position={position} rotation={rotation}>
      <textGeometry attach="geometry" args={[text, textOptions]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Name
