import React, { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Global mouse coordinates store for smooth non-blocking interaction
const mouseState = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0
};

if (typeof window !== 'undefined') {
  window.addEventListener(
    'pointermove',
    (e) => {
      mouseState.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseState.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    { passive: true }
  );
}

// 1. Fluid Computational Tensor Lattice / Wireframe Terrain
const TensorLatticeTerrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  const gridSize = 50;
  const segments = 46;

  const baseZ = useMemo(() => {
    const arr = new Float32Array((segments + 1) * (segments + 1));
    for (let i = 0; i < arr.length; i++) {
      const x = (i % (segments + 1)) - segments / 2;
      const y = Math.floor(i / (segments + 1)) - segments / 2;
      arr[i] = Math.sin(x * 0.22) * Math.cos(y * 0.22) * 1.6;
    }
    return arr;
  }, [segments]);

  useFrame((state) => {
    mouseState.x = THREE.MathUtils.lerp(mouseState.x, mouseState.targetX, 0.08);
    mouseState.y = THREE.MathUtils.lerp(mouseState.y, mouseState.targetY, 0.08);

    const t = state.clock.getElapsedTime();
    const mx = mouseState.x * 6;
    const my = mouseState.y * 6;

    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2.7 + mouseState.y * 0.12;
      meshRef.current.rotation.z = Math.sin(t * 0.1) * 0.06 + mouseState.x * 0.08;
      meshRef.current.position.y = -2.6 + mouseState.y * 0.2;
    }

    if (geomRef.current) {
      const posAttr = geomRef.current.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);

        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let wave = Math.sin(t * 1.6 + (x * 0.28 + y * 0.28)) * 0.55;
        wave += Math.cos(t * 1.2 + x * 0.35) * 0.3;

        if (dist < 7.5) {
          wave += (7.5 - dist) * 0.32;
        }

        const b = baseZ[i] || 0;
        posAttr.setZ(i, b + wave);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2.6, -1]}>
      <planeGeometry
        ref={geomRef}
        args={[gridSize, gridSize, segments, segments]}
      />
      <meshStandardMaterial
        color="#a855f7"
        emissive="#581c87"
        emissiveIntensity={0.85}
        wireframe
        transparent
        opacity={0.65}
      />
    </mesh>
  );
};

// 2. Pure AI Neural Network & Synaptic Data Mesh (No Primitive Geometric Meshes)
const NeuralDataMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 80;
  const maxDistance = 4.8;

  const [nodes, linesGeometry] = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 24,
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 12
        )
      );
    }

    const linePositions: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = pts[i].distanceTo(pts[j]);
        if (d < maxDistance) {
          linePositions.push(pts[i].x, pts[i].y, pts[i].z);
          linePositions.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    return [pts, geom];
  }, [nodeCount]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseState.x * 0.22,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseState.y * 0.16,
        0.05
      );
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Synaptic Interconnect Lines */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Neural Data Nodes */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[idx % 4 === 0 ? 0.09 : 0.065, 8, 8]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? '#d946ef' : '#c084fc'}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
};

// 3. Cyber Stardust Field with Vertical Parallax
const CyberStardust = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollYRef = useRef(0);
  const count = 550;

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const violet = new THREE.Color('#c084fc');
    const fuchsia = new THREE.Color('#d946ef');
    const deepNeon = new THREE.Color('#a855f7');
    const temp = new THREE.Color();

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const r = Math.random();
      if (r < 0.4) temp.copy(violet);
      else if (r < 0.75) temp.copy(fuchsia);
      else temp.copy(deepNeon);

      cols[i * 3] = temp.r;
      cols[i * 3 + 1] = temp.g;
      cols[i * 3 + 2] = temp.b;
    }

    return [pos, cols];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.015;
      pointsRef.current.rotation.x += delta * 0.008;

      const targetY = scrollYRef.current * 0.001;
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        targetY,
        0.05
      );

      pointsRef.current.rotation.z = mouseState.x * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const GlobalCyberCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none overflow-hidden select-none">
      {/* Deep Void with Layered Neon Violet Atmospheric Radial Glows */}
      <div className="absolute inset-0 bg-[#030108]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(168,85,247,0.25)_0%,rgba(88,28,135,0.16)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(217,70,239,0.14)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(147,51,234,0.16)_0%,transparent_55%)] pointer-events-none" />

      {/* High-Performance 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} color="#3b0764" />
          <pointLight position={[6, 6, 6]} intensity={3.5} color="#c084fc" />
          <pointLight position={[-6, -4, 4]} intensity={2.8} color="#d946ef" />
          <pointLight position={[0, 3, 7]} intensity={2.4} color="#a855f7" />

          {/* Computational Tensor Lattice */}
          <TensorLatticeTerrain />

          {/* AI Neural Data Mesh & Synapses (No Primitive Meshes) */}
          <NeuralDataMesh />

          {/* Radiant Stardust Field */}
          <CyberStardust />
        </Suspense>
      </Canvas>

      {/* Top and bottom subtle dark vignetting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />
    </div>
  );
};

export default GlobalCyberCanvas;
