import React from 'react'

export default function Scene() {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <ambientLight intensity={0.5} />
    </>
  )
}
