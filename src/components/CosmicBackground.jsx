import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Icosahedron, TorusKnot, MeshDistortMaterial, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'

function Starfield(props) {
  const ref = useRef()
  const count = 5000
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI
        const phi = Math.acos(2 * Math.random() - 1)
        const radius = 2 + Math.random() * 5

        p[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        p[i * 3 + 2] = radius * Math.cos(phi)
    }
    return p
  }, [count])

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25
    ref.current.rotation.y -= delta / 35
    
    // Smooth interactive mouse follow for stars
    const pointer = state.pointer
    ref.current.rotation.x += (pointer.y * 0.1 - ref.current.rotation.x) * 0.02
    ref.current.rotation.y += (pointer.x * 0.1 - ref.current.rotation.y) * 0.02
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

function FloatingObjects() {
  const groupRef = useRef()
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    groupRef.current.position.y = Math.sin(t / 2) * 0.2
    
    // Parallax effect on objects based on mouse
    groupRef.current.rotation.x = state.pointer.y * 0.2
    groupRef.current.rotation.y = state.pointer.x * 0.2
  })

  return (
    <group ref={groupRef}>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={3} position={[-3, 1, -2]}>
        <Icosahedron args={[1.2, 0]}>
          <MeshDistortMaterial
            color="#ecc94b"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={1}
            wireframe={true}
          />
        </Icosahedron>
      </Float>


      <Float speed={2} rotationIntensity={4} floatIntensity={2} position={[3.5, -0.5, -4]}>
        <TorusKnot args={[1, 0.3, 128, 32]}>
          <meshPhysicalMaterial 
            color="#3b82f6" 
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.9}
            thickness={2}
            transparent={true}
            opacity={0.9}
          />
        </TorusKnot>
      </Float>
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, 10, -5]} intensity={5} color="#8b5cf6" />
      <pointLight position={[10, -10, 5]} intensity={3} color="#f43f5e" />
    </group>
  )
}

export default function CosmicBackground() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 15]} />
        <Starfield />
        <FloatingObjects />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
