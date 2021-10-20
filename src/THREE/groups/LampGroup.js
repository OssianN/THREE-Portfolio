import React from 'react'
import LampCylinder from '../meshs/lamp/Cylinder'
import LampCone from '../meshs/lamp/Cone'

const LampGroup = () => {
  return (
    <group position={[0, 0, 7]}>
      <LampCylinder />
      <LampCone />
    </group>
  )
}

export default LampGroup
