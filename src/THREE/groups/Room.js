import React, { useState } from "react"
import { a, useSpring } from "@react-spring/three"
import Wall from "../meshs/Wall"
import Text from "../meshs/Text"
import RoomPlane from "../meshs/RoomPlane"
import Arrow from "../meshs/Arrow"
import WallScreen from "../meshs/WallScreen"
import LampGroup from "./LampGroup"
import CharacterGroup from "./CharacterGroup"
import HyperCube from "../meshs/HyperCube"

const Room = ({
  mouseIsOver,
  setMouseIsOver,
  showSideField,
  setShowSideField,
  setTab,
  color,
}) => {
  const [lampOn, setLampOn] = useState(true)
  const [spinCube, setSpinCube] = useState(false)

  const responsivePosition = () => {
    if (window && window.innerWidth < 450) {
      return [-0, -2, -1]
    }
    return [-0, -2, 0]
  }

  const { position } = useSpring({
    position: showSideField ? [-0, -1, 13] : responsivePosition(),
    config: { mass: 1, tension: 2, friction: 1, precision: 0.1 },
  })

  return (
    <a.group position={position}>
      {lampOn && (
        <>
          <pointLight castShadow position={[0, -0.5, 11]} />
          <pointLight position={[0, 0, 15]} />
        </>
      )}
      <directionalLight position={[0, 1, 0]} intensity={0.3} />
      <LampGroup setLampOn={setLampOn} />
      <CharacterGroup color={color} mouseIsOver={mouseIsOver} />
      <HyperCube setTab={setTab} spinCube={spinCube} />
      <Arrow
        setMouseIsOver={setMouseIsOver}
        setSpinCube={setSpinCube}
        setTab={setTab}
      />
      <Text color="white" text="Ossian" position={[-4.55, 4, 6.1]} size={1.8} />
      <Wall color={color} args={[15, 20, 0.1]} position={[0, 8, 6]} />
      <WallScreen
        args={[3, 2, 0.3]}
        position={[0, 1.2, 6]}
        setShowSideField={setShowSideField}
      />
      <RoomPlane color={color} />
    </a.group>
  )
}

export default Room
