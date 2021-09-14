import React, { useState, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import PortfolioText from '../meshs/PortfolioText'
import Cube from '../meshs/Cube'

const PortfolioBox = ({ cameraPosition, portfolioBox }) => {
  // const [moveUp, setMoveUp] = useState(false)
  const [positionUnit, setPositionUnit] = useState(0.06)
  // const cameraY = cameraPosition[1]
  // const { scene } = useThree()
  // const cube1 = useRef(null)
  // const cube2 = useRef(null)
  // const cube3 = useRef(null)
  // const cube4 = useRef(null)

  // useFrame(() => {
  //   // pointSphere.current.rotation.y += pointSphere.current.rotation.x + 0.01
  //   if (moveUp && positionUnit < .8) {
  //     setPositionUnit(1 / Math.pow(positionUnit, 1.8) / 1000 + positionUnit)
  //     return
  //   }

  //   if (!moveUp) {
  //     // setPositionUnit(positionUnit - 0.1)
  //     return
  //   }
  // })

  // const clickedBox = () => {
  //   setMoveUp(!moveUp)
  // }

  return (
    <object3D
      ref={portfolioBox}
      rotation={[0, 0, 0]}
      position={[0, -1.3, 14]}
      onClick={clickedBox}>
      <Cube
        reference={cube1}
        position={[-positionUnit, positionUnit, positionUnit]}
        args={[0.1, 0.1, 0.1]}
      />
      <Cube
        reference={cube2}
        position={[positionUnit, positionUnit, positionUnit]}
        args={[0.1, 0.1, 0.1]}
      />
      <Cube
        reference={cube3}
        position={[-positionUnit, -0.06, positionUnit]}
        args={[0.1, 0.1, 0.1]}
      />
      <Cube
        reference={cube4}
        position={[positionUnit, -0.06, positionUnit]}
        args={[0.1, 0.1, 0.1]}
      />
      <Cube
        reference={cube1}
        position={[-positionUnit, positionUnit, -positionUnit]}
        args={[0.1, 0.1, 0.1]}
      />
      <Cube
        reference={cube2}
        position={[positionUnit, positionUnit, -positionUnit]}
        args={[0.1, 0.1, 0.1]}
      />
      <Cube
        reference={cube3}
        position={[-positionUnit, -0.06, -positionUnit]}
        args={[0.1, 0.1, 0.1]}
      />
      <Cube
        reference={cube4}
        position={[positionUnit, -0.06, -positionUnit]}
        args={[0.1, 0.1, 0.1]}
      />
    </object3D>
  )
}

export default PortfolioBox
