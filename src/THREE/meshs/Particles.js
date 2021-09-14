import * as THREE from 'three'
import { useRef, useLayoutEffect } from 'react'

const Particles = () => {
  const points = []

  points.push(new THREE.Vector3(-10, 0, 3))
  points.push(new THREE.Vector3(0, 10, 3))
  points.push(new THREE.Vector3(10, 0, 3))

  const ref = useRef(null)
  useLayoutEffect(() => void ref.current.setFromPoints(points), [points])
  return (
    <points>
      <bufferGeometry attach='geometry' ref={ref} />
      <pointsMaterial
        attach='material'
        color={'0x0000ff'}
        size={0.5}
      />
    </points>
  )
}

export default Particles
