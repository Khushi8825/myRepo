// src/components/RotatingBall.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function RotatingBall({ size = 300, color = "#a78bfa" }) {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas>
        {/* Camera */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        {/* 3D Sphere */}
        <Sphere visible args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.3} // distortion for fluid effect
            speed={2} // animation speed
            roughness={0.2}
            metalness={0.1}
          />
        </Sphere>

        {/* Optional: let user drag/rotate */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
