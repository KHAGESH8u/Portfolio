import React, { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 1. Dynamic Undulating Wireframe Cyber Terrain / Data Lattice
const WireframeGrid = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  const gridSize = 48;
  const segments = 40;

  // Precomputed base vertex elevations
  const initialZ = useMemo(() => {
    const arr = new Float32Array((segments + 1) * (segments + 1));
    for (let i = 0; i < arr.length; i++) {
      const x = (i % (segments + 1)) - segments / 2;
      const y = Math.floor(i / (segments + 1)) - segments / 2;
      arr[i] = Math.sin(x * 0.25) * Math.cos(y * 0.25) * 1.4;
    }
    return arr;
  }, [segments]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 4;
    const mouseY = state.pointer.y * 4;

    if (meshRef.current) {
      // Perspective pitch and slight mouse lean
      meshRef.current.rotation.x = -Math.PI / 2.6 + state.pointer.y * 0.08;
      meshRef.current.rotation.z = Math.sin(t * 0.1) * 0.05 + state.pointer.x * 0.05;
    }

    if (geomRef.current) {
      const posAttr = geomRef.current.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);

        const dx = x - mouseX;
        const dy = y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Fluid cyber wave ripple
        let ripple = Math.sin(t * 1.8 + (x + y) * 0.3) * 0.45;
        if (dist < 6.0) {
          ripple += (6.0 - dist) * 0.25;
        }

        const base = initialZ[i] || 0;
        posAttr.setZ(i, base + ripple);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2.8, -2]}>
      <planeGeometry
        ref={geomRef}
        args={[gridSize, gridSize, segments, segments]}
      />
      <meshStandardMaterial
        color="#a855f7"
        emissive="#7e22ce"
        emissiveIntensity={0.8}
        wireframe
        transparent
        opacity={0.55}
      />
    </mesh>
  );
};

// 2. Floating Cyber Network Nodes & Interconnecting Lines
const NetworkNodes = () => {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 65;

  const [nodes, linesGeometry] = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 24,
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 14
        )
      );
    }

    // Connect proximate nodes with line segments
    const linePositions: number[] = [];
    const maxDist = 5.2;

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = pts[i].distanceTo(pts[j]);
        if (d < maxDist) {
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

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Lines */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          color="#c084fc"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Node Spheres */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? '#d946ef' : '#a855f7'}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
};

// 3. Ambient Stardust Field with Scroll Parallax
const StardustField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollYRef = useRef(0);
  const starCount = 500;

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    const cols = new Float32Array(starCount * 3);

    const violet = new THREE.Color('#c084fc');
    const fuchsia = new THREE.Color('#e879f9');
    const deepNeon = new THREE.Color('#a855f7');
    const tempCol = new THREE.Color();

    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const r = Math.random();
      if (r < 0.45) {
        tempCol.copy(violet);
      } else if (r < 0.75) {
        tempCol.copy(fuchsia);
      } else {
        tempCol.copy(deepNeon);
      }

      cols[i * 3] = tempCol.r;
      cols[i * 3 + 1] = tempCol.g;
      cols[i * 3 + 2] = tempCol.b;
    }

    return [pos, cols];
  }, [starCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.012;
      pointsRef.current.rotation.x += delta * 0.008;

      // Vertical parallax tied to scroll
      const targetY = scrollYRef.current * 0.001;
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        targetY,
        0.05
      );

      // Subtle mouse tracking
      pointsRef.current.rotation.z = state.pointer.x * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.65}
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(168,85,247,0.22)_0%,rgba(88,28,135,0.14)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(217,70,239,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(147,51,234,0.14)_0%,transparent_55%)] pointer-events-none" />

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
          <ambientLight intensity={0.5} color="#4c1d95" />
          <pointLight position={[6, 6, 6]} intensity={3.0} color="#c084fc" />
          <pointLight position={[-6, -4, 4]} intensity={2.5} color="#d946ef" />
          <pointLight position={[0, 2, 7]} intensity={2.0} color="#a855f7" />

          {/* Undulating Wireframe Cyber Terrain */}
          <WireframeGrid />

          {/* Interconnected Glowing Nodes & Lines */}
          <NetworkNodes />

          {/* Stardust Field with Parallax */}
          <StardustField />
        </Suspense>
      </Canvas>

      {/* Subtle top and bottom dark vignetting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />
    </div>
  );
};

export default GlobalCyberCanvas;
