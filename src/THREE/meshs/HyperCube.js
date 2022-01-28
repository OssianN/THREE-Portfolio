import React, { useState, useEffect, useRef } from "react"
import { a, useSpring } from "@react-spring/three"
import * as THREE from "three"

const HyberCube = ({ handleMouseOver, handleMouseLeave, setTab, spinCube }) => {
  const geometry = useRef(null)
  const triangles = 7000
  const positions = []
  const normals = []
  const colors = []

  const color = new THREE.Color()

  const n = 1.3, // triangles size
    n2 = n / 2 // triangles spread in the cube
  const d = 0.2,
    d2 = d / 2 // individual triangle size

  const pA = new THREE.Vector3()
  const pB = new THREE.Vector3()
  const pC = new THREE.Vector3()

  const cb = new THREE.Vector3()
  const ab = new THREE.Vector3()

  for (let i = 0; i < triangles; i++) {
    const x = Math.random() * n - n2
    const y = Math.random() * n - n2
    const z = Math.random() * n - n2

    const ax = x + Math.random() * d - d2
    const ay = y + Math.random() * d - d2
    const az = z + Math.random() * d - d2

    const bx = x + Math.random() * d - d2
    const by = y + Math.random() * d - d2
    const bz = z + Math.random() * d - d2

    const cx = x + Math.random() * d - d2
    const cy = y + Math.random() * d - d2
    const cz = z + Math.random() * d - d2

    positions.push(ax, ay, az)
    positions.push(bx, by, bz)
    positions.push(cx, cy, cz)

    // flat face normals

    pA.set(ax, ay, az)
    pB.set(bx, by, bz)
    pC.set(cx, cy, cz)

    cb.subVectors(pC, pB)
    ab.subVectors(pA, pB)
    cb.cross(ab)

    cb.normalize()

    const nx = cb.x
    const ny = cb.y
    const nz = cb.z

    normals.push(nx, ny, nz)
    normals.push(nx, ny, nz)
    normals.push(nx, ny, nz)

    // colors

    const vx = x / n + 0.5
    const vy = y / n + 0.5
    const vz = z / n + 0.5

    color.setRGB(vx, vy, vz)

    const alpha = Math.random()

    colors.push(color.r, color.g, color.b, alpha)
    colors.push(color.r, color.g, color.b, alpha)
    colors.push(color.r, color.g, color.b, alpha)
  }

  function disposeArray() {
    this.array = null
  }

  const { rotation } = useSpring({
    rotation: spinCube
      ? [THREE.MathUtils.degToRad(315), 0, THREE.MathUtils.degToRad(45)]
      : [THREE.MathUtils.degToRad(135), 0, THREE.MathUtils.degToRad(135)],
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })

  useEffect(() => {
    if (geometry.current) {
      geometry.current.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3).onUpload(disposeArray)
      )
      geometry.current.setAttribute(
        "normal",
        new THREE.Float32BufferAttribute(normals, 3).onUpload(disposeArray)
      )
      geometry.current.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 4).onUpload(disposeArray)
      )
      geometry.current.computeBoundingSphere()
    }
  })

  return (
    <a.mesh position={[1.9, -0.5, 12]} rotation={rotation}>
      <bufferGeometry attach="geometry" ref={geometry} />
      <meshPhongMaterial
        attach="material"
        color="0xaaaaaa"
        specular="0xffffff"
        shininess={250}
        side={THREE.DoubleSide}
        vertexColors={true}
        transparent={true}
      />
    </a.mesh>
  )
}

export default HyberCube
