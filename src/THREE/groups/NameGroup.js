import React, { useRef, Suspense } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import NameBlock from '../meshs/Wall'
import Name from '../meshs/Text'
import PortfolioBox from './PortfolioGroup'
import NamePlane from '../meshs/NamePlane'
import Stars from '../meshs/Stars'

const NameGroup = ({ cameraPosition, portfolioBox }) => {
  const group = useRef(null)
  const position = [0.2, 0, 0]
  const { scene } = useThree()

  useFrame(() => {
    group.current.position.z = window.pageYOffset * -0.01
    group.current.position.x = 0.2 + window.pageYOffset * -0.01
  })

  return (
    <object3D ref={group} position={position} rotation={[0, 0.8, 0]}>
      <spotLight
        castShadow
        position={[6, 1, 4]}
        intensity={0.8}
        target={group.current}
      />
      <Suspense fallback={null}>
        <NameBlock color='#0066ff' position={[0, 0, 0]} args={[2.8, 1, 0.1]} />
        <Name color='#fff' position={[-1.05, -0.2, 0.1]} />
        {/* <PortfolioBox
          portfolioBox={portfolioBox}
          cameraPosition={cameraPosition}
        /> */}
        {/* <Stars /> */}
        <NamePlane color='white' />
      </Suspense>
    </object3D>
  )
}

export default NameGroup
