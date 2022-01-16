import React, { useRef } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import Rectangle from "./Rectangle"

const SkillList = ({ skillList }) => {
  const ref = useRef(null)

  const frontEnd = skillList.filter(item => item.area === "frontend")
  const backEnd = skillList.filter(item => item.area === "backend")
  const tools = skillList.filter(item => item.area === "tools")

  useFrame(state => {
    const lookAtPos = new THREE.Vector3()
    lookAtPos.y = 0
    state.camera.lookAt(lookAtPos)
  })

  return (
    <group ref={ref}>
      {frontEnd.map((item, i) => {
        return (
          <Rectangle
            sleepSpeedLimit={1}
            key={i}
            args={[1, 1, 1]}
            item={item}
            i={i}
          />
        )
      })}
      {backEnd.map((item, i) => {
        return (
          <Rectangle
            sleepSpeedLimit={1}
            key={i}
            args={[1, 1, 1]}
            item={item}
            i={i}
          />
        )
      })}
      {tools.map((item, i) => {
        return (
          <Rectangle
            sleepSpeedLimit={1}
            key={i}
            args={[1, 1, 1]}
            item={item}
            i={i}
          />
        )
      })}
    </group>
  )
}

export default SkillList
