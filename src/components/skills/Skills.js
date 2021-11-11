import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import Sphere from "./Sphere"
import SkillsPlane from "./SkillsPlane"

const Skills = () => {
  const isSSR = typeof window === "undefined"

  return (
    <>
      {!isSSR && (
        <Suspense fallback={null}>
          <Canvas
            shadows
            camera={{ position: [0, 0.2, 15] }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <Physics>
              <ambientLight intensity={0.5} color="white" />
              <directionalLight position={[-1, 0, 1]} />
              <spotLight position={[8, -0.5, 0]} angle={Math.PI / 2} />
              <pointLight castShadow position={[0, 6, 0]} angle={Math.PI / 2} />
              <Sphere />
              <Sphere />
              <Sphere />
              <SkillsPlane />
            </Physics>
          </Canvas>
        </Suspense>
      )}
    </>
  )
}

export default Skills
