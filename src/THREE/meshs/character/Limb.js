import React, { useState } from "react"
import * as THREE from "three"

const Limb = ({ reference, vectorObj, rotation }) => {
  const [points] = useState([])

  const { v1, v2, v3 } = vectorObj

  points.push(new THREE.Vector3(...v1))
  points.push(new THREE.Vector3(...v2))
  points.push(new THREE.Vector3(...v3))

  const path = new THREE.CatmullRomCurve3(points)

  return (
    <mesh castShadow ref={reference} position={[0, 0, 0]} rotation={rotation}>
      <tubeBufferGeometry
        attach="geometry"
        args={[path, 70, 0.04, 50, false]}
      />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}

export default Limb
