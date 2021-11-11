import React from "react"
import { useSphere } from "@react-three/cannon"

const Sphere = () => {
  const position = [Math.random(), Math.random() * 35, 0]

  const [ref] = useSphere(() => ({
    mass: 10,
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
