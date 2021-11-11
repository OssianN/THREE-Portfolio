import React from "react"
import LampCylinder from "../meshs/lamp/Cylinder"
import LampCone from "../meshs/lamp/Cone"

const LampGroup = ({ setLampOn, lampOn }) => {
  console.log(lampOn)
  return (
    <group position={[0, 0, 7]} onClick={() => setLampOn(prev => !prev)}>
      <LampCylinder />
      <LampCone />
    </group>
  )
}

export default LampGroup
