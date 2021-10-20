import React from "react"
import { Canvas } from "@react-three/fiber"
import Room from "./groups/Room"

const CanvasContainer = ({
  mouseIsOver,
  showSideField,
  setShowSideField,
  setMouseIsOver,
  tab,
  setTab,
  color,
}) => {
  return (
    <Canvas
      invalidateFrameloop
      shadows
      camera={{ position: [0, 0, 20] }}
      style={{ position: "absolute" }}
    >
      <fogExp2 attach="fog" args={["white", 0.03]} />
      <ambientLight intensity={0.5} color="73e3ff" />
      <Room
        mouseIsOver={mouseIsOver}
        setMouseIsOver={setMouseIsOver}
        showSideField={showSideField}
        setShowSideField={setShowSideField}
        tab={tab}
        setTab={setTab}
        color={color}
      />
    </Canvas>
  )
}

export default CanvasContainer
