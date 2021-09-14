import React from 'react'
import LampCylinder from '../meshs/lamp-components/Cylinder'
import LampCone from '../meshs/lamp-components/Cone'

const LampGroup = () => {
  return (
    <group position={[0, 0, 7]}>
      <LampCylinder />
      <LampCone />
    </group>
  )
}

export default LampGroup
