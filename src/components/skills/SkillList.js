import React, { useRef, useState } from "react"
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

  const [loaded, setLoaded] = useState(false)
  setTimeout(() => {
    setLoaded(true)
  }, 0)

  return (
    <group ref={ref}>
      {loaded &&
        frontEnd.map((item, i) => {
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
      {loaded &&
        backEnd.map((item, i) => {
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
      {loaded &&
        tools.map((item, i) => {
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
