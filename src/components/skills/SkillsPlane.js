import React from "react"
import { usePlane } from "@react-three/cannon"

const SkillPlane = ({ color }) => {
  const planePositon = [0, -3, 0]
  const planeRotation = [-Math.PI / 2, 0, 0]

  const [ref] = usePlane(() => ({
    mass: 100000,
    position: planePositon,
    rotation: planeRotation,
    type: "Static",
  }))

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[170, 70]} />
      <meshStandardMaterial attach="material" opacity={1} color={color} />
    </mesh>
  )
}

export default SkillPlane
