import React from "react"
import { a, useSpring } from "@react-spring/three"

import Wall from "../meshs/Wall"
import Text from "../meshs/Text"
import RoomPlane from "../meshs/RoomPlane"
import Cube from "../meshs/Cube"
import WallScreen from "../meshs/WallScreen"
import LampGroup from "./LampGroup"
import CharacterGroup from "./CharacterGroup"

const Room = ({
  mouseIsOver,
  setMouseIsOver,
  showSideField,
  setShowSideField,
  setTab,
  color,
}) => {
  const handleMouseOver = e => {
    setMouseIsOver(true)
  }

  const handleMouseLeave = () => {
    setMouseIsOver(false)
  }

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
      <pointLight castShadow position={[0, -0.5, 11]} />
      <pointLight position={[0, 0, 15]} />
      <directionalLight position={[0, 1, 0]} intensity={0.3} />
      <LampGroup />
      <CharacterGroup mouseIsOver={mouseIsOver} />
      <Cube
        args={[1, 1, 1]}
        position={[1.9, -0.5, 12]}
        handleMouseOver={handleMouseOver}
        handleMouseLeave={handleMouseLeave}
        color={color}
        setTab={setTab}
      />
      <Text color="white" text="Ossian" position={[-4.55, 4, 6.1]} size={1.8} />
      <Wall color={"#00b1e7"} args={[15, 20, 0.1]} position={[0, 8, 6]} />
      <WallScreen
        args={[3, 2, 0.3]}
        position={[0, 1.2, 6]}
        setShowSideField={setShowSideField}
      />
      <RoomPlane color={"#00b1e7"} />
    </a.group>
  )
}

export default Room
