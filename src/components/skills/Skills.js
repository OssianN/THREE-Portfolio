import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import SkillsPlane from "./SkillsPlane"
import { OrbitControls } from "@react-three/drei"
import SkillList from "./SkillList"
import "./skills.css"

const Skills = () => {
  const isSSR = typeof window === "undefined"

  const skillList = [
    { skill: "Javascript", area: "frontend" },
    { skill: "React", area: "frontend" },
    { skill: "Gatsby", area: "frontend" },
    { skill: "Next", area: "frontend" },
    { skill: "Redux", area: "frontend" },
    { skill: "THREE", area: "frontend" },
    { skill: "Node", area: "backend" },
    { skill: "Express", area: "backend" },
    { skill: "REST", area: "backend" },
    { skill: "GraphQL", area: "backend" },
    { skill: "MongoDB", area: "backend" },
    { skill: "SQL", area: "tools" },
    { skill: "Netlify", area: "tools" },
    { skill: "Heroku", area: "tools" },
    { skill: "Contentful", area: "tools" },
    { skill: "TDD", area: "tools" },
    { skill: "Figma", area: "tools" },
    { skill: "Agile", area: "tools" },
  ]

  return (
    <>
      {!isSSR && (
        <Suspense fallback={null}>
          <Canvas
            shadows
            camera={{ position: [-2.5, -1, 5.5] }}
            style={{
              position: "absolute",
              height: "100vh",
              width: "100vw",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <OrbitControls />

            <Physics allowSleep={true}>
              <ambientLight intensity={0.5} color="white" />
              <directionalLight position={[0, 10, 2]} intensity={1.3} />
              <pointLight castShadow position={[0, 5, 5]} />
              <SkillList skillList={skillList} />
              <SkillsPlane color="#fff" />
            </Physics>
          </Canvas>
        </Suspense>
      )}
    </>
  )
}

export default Skills
