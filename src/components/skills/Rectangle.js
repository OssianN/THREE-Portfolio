import React from "react"
import { useBox } from "@react-three/cannon"
import BoxText from "./BoxText"

const Rectangle = ({ args, item, i }) => {
  const divideAreas = item => {
    if (item.area === "frontend") return { x: -1.2, color: "orange" }
    if (item.area === "backend") return { x: 0, color: "red" }
    if (item.area === "tools") return { x: 1.2, color: "blue" }
  }

  const { x, color } = divideAreas(item)

  const position = [x, 7 + (args[0] + 0.2) * i - 2, 0]
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    sleepSpeedLimit: 1.2,
    args,
  }))

  const handleClick = () => {
    api.applyForce([0, 0, 0], [0, 0, 0])
  }

  return (
    <mesh castShadow onClick={handleClick} ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={1}
        metalness={0.1}
      />
      <BoxText text={item.skill} />
    </mesh>
  )
}

export default Rectangle
