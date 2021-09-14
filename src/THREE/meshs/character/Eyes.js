import React from 'react'

const Eyes = ({ reference, position, eyesPosition }) => {
  return (
    <group reference={reference} position={position}>
      <mesh>
        <circleBufferGeometry attach='geometry' args={[0.35, 32]} />
        <meshStandardMaterial attach='material' color='white' />
      </mesh>
      <mesh position={[0.15, eyesPosition, 0.05]}>
        <sphereBufferGeometry attach='geometry' args={[0.15, 32, 32]} />
        <meshStandardMaterial attach='material' color='black' metalness={.3} roughness={0.1}/>
      </mesh>
    </group>
  )
}

export default Eyes
