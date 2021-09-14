import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import CameraMove from './CameraMove'
import Room from './groups/Room'
import '../styles/base.css'

const CanvasContainer = ({
  mouseIsOver,
  showSideField,
  setShowSideField,
  setMouseIsOver,
  tab,
  setTab,
  color
}) => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 20])

  return (
    <Suspense>
      <Canvas
        shadows
        camera={{ position: cameraPosition }}
        style={{ position: 'absolute' }}>
        <fogExp2 attach='fog' args={['white', 0.03]} />
        <ambientLight intensity={0.5} color='73e3ff' />
        <Physics allowSleep={true}>
          <Room
            mouseIsOver={mouseIsOver}
            setMouseIsOver={setMouseIsOver}
            showSideField={showSideField}
            setShowSideField={setShowSideField}
            setCameraPosition={setCameraPosition}
            tab={tab}
            setTab={setTab}
            color={color}
          />
        </Physics>
        {/* <OrbitControls /> */}
        <CameraMove cameraPosition={cameraPosition} />
      </Canvas>
    </Suspense>
  )
}

export default CanvasContainer
