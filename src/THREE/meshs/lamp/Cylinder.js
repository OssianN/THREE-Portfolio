import React from 'react'

const LampCylinder = ({ reference }) => {
  return (
    <mesh ref={reference} position={[0, 10, 0]}>
      <cylinderBufferGeometry attach='geometry' args={[.03, .03, 5, 30]} />
      <meshStandardMaterial attach='material' color='white' />
    </mesh>
  )
}

export default LampCylinder
