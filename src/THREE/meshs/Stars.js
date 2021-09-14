import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import circle from '../../maps/circle.png'

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

  return (
    <points position={[-2.5, -0.5, 0]} ref={mesh}>
      <bufferGeometry attach='geometry'>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach='material'
        size={0.02}
        map={texture}
        transparent={true}
        color={'white'}
      />
    </points>
  )
}

export default Stars
