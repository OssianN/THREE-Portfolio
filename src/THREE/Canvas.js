import React, { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Room from "./groups/Room"

const CanvasContainer = ({
  mouseIsOver,
  setMouseIsOver,
  showSideField,
  setShowSideField,
  tab,
  setTab,
  color,
}) => {
  const [pixelRatio, setPixelRatio] = useState(null)
  useEffect(() => {
    if (window) {
      setPixelRatio(window.devicePixelRatio)
    }
  }, [])

  return (
    <Canvas
      invalidateFrameloop
      // frameloop="demand"
      shadows
      camera={{ position: [0, 0, 20] }}
      style={{ position: "absolute" }}
      pixelRatio={pixelRatio}
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
