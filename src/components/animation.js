import * as THREE from "three"
import React, { useRef, useState, useContext, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"
import { ThemeContext } from "../state/theme.context"

const CANVAS_BACKGROUND_COLORS = {
  light: "#fff",
  dark: "#000",
  gray: "#242828",
  purple: "#222639",
  green: "#141f14",
  pink: "#ffccd5",
}

const Letter = ({ z, ...props }) => {
  const ref = useRef()
  const { nodes } = useGLTF("/letter-transformed.glb")
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  })

  useFrame(() => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.004),
      (data.rZ += 0.0005)
    )
    ref.current.position.set(data.x * width, (data.y += 0.1), z)
    if (data.y > height) data.y = -height
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -1.57]}>
        <mesh
          geometry={nodes.Cube_0.geometry}
          material={nodes.Cube_0.material}
        />
        <group position={[0, 0, 0.99]} rotation={[0, -0.09, -Math.PI]}>
          <mesh
            geometry={nodes.Plane_0.geometry}
            material={nodes.Plane_0.material}
          />
        </group>
      </group>
    </group>
  )
}

const Animation = ({ count = 100, depth = 40 }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 100, fov: 30 }}>
      <color attach="background" args={[CANVAS_BACKGROUND_COLORS[theme]]} />
      <Suspense fallback={null}>
        {Array.from({ length: count }, (_, i) => (
          <Letter key={i} z={-(i / count) * depth - 10} />
        ))}
        <EffectComposer>
          <DepthOfField
            target={[0, 0, depth / 2]}
            focalLength={500}
            bokehScale={1}
            height={700}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}

export default Animation
