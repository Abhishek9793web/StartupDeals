"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function FloatingSphere() {
    return (
        <mesh rotation={[0.4, 0.2, 0]}>
            <sphereGeometry args={[1.4, 64, 64]} />
            <meshStandardMaterial
                color="#2563eb"
                roughness={0.35}
                metalness={0.6}
            />
        </mesh>
    );
}

export default function HeroScene() {
    return (
        <Canvas camera={{ position: [0, 0, 4] }}>
            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 3, 3]} intensity={1.2} />

            {/* 3D Object */}
            <FloatingSphere />

            {/* Disable zoom, enable slow rotation */}
            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.6}
            />
        </Canvas>
    );
}
