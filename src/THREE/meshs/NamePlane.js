import React from 'react'

const NamePlane = ({ color }) => {

  return (
    <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[70, 70]} />
      <meshPhongMaterial
        attach='material'
        opacity={0.9}
        color={color}
      />
    </mesh>
  )
}

export default NamePlane
