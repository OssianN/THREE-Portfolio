import React from 'react'

const Cube = ({ args, position }) => {
  
  return (
    <mesh castShadow position={position} >
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={'white'} />
    </mesh>
  )
}

export default Cube
