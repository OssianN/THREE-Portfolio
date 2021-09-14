import { useFrame } from '@react-three/fiber'

const CameraMove = ({ cameraPosition }) => {
  useFrame(({ camera }) => {
    camera.position.x = cameraPosition[0]
    camera.position.y = cameraPosition[1]
    camera.position.z = cameraPosition[2]
  })
  return null
}

export default CameraMove
