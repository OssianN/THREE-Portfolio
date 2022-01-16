import React from "react"
import * as THREE from "three"
import Mont from "../../MontserratBold.json"

const BoxText = ({ text }) => {
  const font = new THREE.FontLoader().parse(Mont)

  const textOptions = {
    font,
    size: 0.09,
    height: 0.01,
  }

  return (
    <group>
      <mesh position={[text.length / -27, 0, 0.5]}>
        <textGeometry attach="geometry" args={[text, textOptions]} />
        <meshStandardMaterial attach="material" color={"white"} />
      </mesh>

      <mesh
        position={[-0.5, 0, text.length / -27]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <textGeometry attach="geometry" args={[text, textOptions]} />
        <meshStandardMaterial attach="material" color={"white"} />
      </mesh>
    </group>
  )
}

export default BoxText
