import React, { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import Wall from '../meshs/Wall'
import Text from '../meshs/Text'
import RoomPlane from '../meshs/RoomPlane'
import Cube from '../meshs/Cube'
import SmallCube from '../meshs/SmallCube'
import LampGroup from './LampGroup'
import CharacterGroup from './CharacterGroup'

const Room = ({
  mouseIsOver,
  setMouseIsOver,
  showSideField,
  setCameraPosition,
  setTab,
  color,
}) => {
  const group = useRef(null)

  const MoveCameraUp = state => {
    const [x, y, z] = state
    let newY = y
    let newZ = z

    if (y > -1) {
      newY = y - 0.08
    }

    if (z > 6.5) {
      newZ = z - 0.8
    }

    return [x, newY, newZ]
  }

  const MoveCameraDown = state => {
    const [x, y, z] = state
    let newY = y
    let newZ = z

    if (y < 0) {
      newY = y + 0.08
    }

    if (z < 20) {
      newZ = z + 0.8
    }

    return [x, newY, newZ]
  }

  useFrame(() => {
    if (showSideField) {
      return setCameraPosition(prevState => MoveCameraUp(prevState))
    }

    if (!showSideField) {
      return setCameraPosition(prevState => MoveCameraDown(prevState))
    }
  })

  const handleMouseOver = e => {
    setMouseIsOver(true)
  }

  const handleMouseLeave = () => {
    setMouseIsOver(false)
  }

  return (
    <object3D ref={group} position={[0, -2, 0]} rotation={[0, 0, 0]}>
      <Suspense fallback={null}>
        <spotLight
          castShadow
          position={[0, 7, 6.5]}
          angle={0.95}
          penumbra={0.2}
          intensity={2}
        />
        <pointLight castShadow position={[-0.7, -0.5, 9.6]} />
        <pointLight position={[-2, 0, 15]} />
        <directionalLight position={[0, 1, 0]} intensity={0.3} />
        <LampGroup />
        <CharacterGroup mouseIsOver={mouseIsOver} />
        <Cube
          args={[1.5, 1.5, 1.5]}
          position={[1.9, 0, 12]}
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
          color={color}
          setTab={setTab}
        />
        <Text
          color='white'
          text='Ossian'
          position={[-4.55, 4, 6.1]}
          size={1.8}
        />
        <Wall color={'#00b1e7'} args={[12, 20, 0.1]} position={[0, 8, 6]} />
        <SmallCube args={[3, 2, 0.3]} position={[0, 1.2, 6]} />
        <RoomPlane color={'#00b1e7'} />
      </Suspense>
    </object3D>
  )
}

export default Room
