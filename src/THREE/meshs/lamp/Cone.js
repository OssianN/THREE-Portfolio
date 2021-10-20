import React from 'react'

const LampCone = ({ reference }) => {
  return (
    <mesh ref={reference} position={[0, 8, 0]}>
      <coneBufferGeometry attach='geometry' args={[0.8, 1, 30]} />
      <meshStandardMaterial attach='material' color='white' />
    </mesh>
  )
}

export default LampCone
