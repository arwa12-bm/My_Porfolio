"use client"

import { Environment, Float, useGLTF, Bounds } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const TechIcon = ({ model }: { model: any }) => {
  const { scene } = useGLTF(model.modelPath)

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ width: "100%", height: "180px" }}
    >
      <ambientLight intensity={0.4} />
      <Environment preset="city" />

      <Bounds fit clip observe margin={1.1}>
        <Float speed={3} rotationIntensity={0.6} floatIntensity={1}>
          <primitive object={scene} />
        </Float>
      </Bounds>
    </Canvas>
  )
}

export default TechIcon
