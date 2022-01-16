import React from "react"
import { useSphere } from "@react-three/cannon"

const Sphere = ({ i }) => {
  const position = [Math.random() * 8 - 4, Math.random() * 200 + 10, 0]

  const [ref] = useSphere(() => ({
    mass: 1,
    position,
  }))

  return (
    <mesh castShadow ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color={"white"}
        roughness={0}
        metalness={0.1}
      />
    </mesh>
  )
}

export default Sphere
