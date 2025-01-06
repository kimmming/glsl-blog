import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function WebGL({ children }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </Canvas>
  )
}
