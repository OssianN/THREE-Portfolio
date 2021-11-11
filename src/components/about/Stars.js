import React, { useRef } from "react"
import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import circle from "./alpha.png"

const Stars = ({ color }) => {
  const mesh = useRef(null)

  const texture = useTexture(circle)
  const particlesCount = 5000
  const initialPositions = []

  for (let i = 0; i < particlesCount; i++) {
    initialPositions.push(-5 + Math.random() * 15)
    initialPositions.push(-5 + Math.random() * 15)
    initialPositions.push(Math.random() * 15)
  }

  const positions = new Float32Array(initialPositions)

  useFrame(() => {
    mesh.current.rotation.y += 0.001
  })

  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.02}
        alphaMap={texture}
        transparent={true}
        color={"white"}
      />
    </points>
  )
}

export default Stars
