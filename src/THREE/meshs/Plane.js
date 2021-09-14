import React from 'react'

const Plane = () => {
  return (
    <mesh >
      <rectAreaLight attach='geometry' color='white' height={10} width={10} />
      <meshStandardMaterial
        attach='material'
      />
    </mesh>
  )
}

export default Plane
