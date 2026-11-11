import React, { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Global mouse tracker for fluid non-blocking interaction
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

// 1. Glowing Porcelain & Deep Teal Synaptic Neural Network
const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 75;
  const maxDistance = 4.8;

  // Generate 3D neuron coordinates
  const [initialNodes, connections, linesGeometry] = useMemo(() => {
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

    const conns: [number, number][] = [];
    const linePositions: number[] = [];

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = pts[i].distanceTo(pts[j]);
        if (d < maxDistance) {
          conns.push([i, j]);
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

    return [pts, conns, geom];
  }, [nodeCount]);

  // Synaptic data flow pulse signals traveling across connections
  const pulseCount = 35;
  const pulses = useMemo(() => {
    return Array.from({ length: pulseCount }, () => {
      const connIdx = Math.floor(Math.random() * connections.length);
      return {
        connIdx,
        progress: Math.random(),
        speed: 0.25 + Math.random() * 0.45
      };
    });
  }, [connections.length]);

  const pulseMeshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    mouseState.x = THREE.MathUtils.lerp(mouseState.x, mouseState.targetX, 0.06);
    mouseState.y = THREE.MathUtils.lerp(mouseState.y, mouseState.targetY, 0.06);

    if (groupRef.current) {
      // Fluid neural network tilt and drift reacting to cursor
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

      // Gentle organic cosmic breathing
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }

    // Animate synaptic pulses along connections
    pulses.forEach((pulse, idx) => {
      pulse.progress += delta * pulse.speed;
      if (pulse.progress > 1) {
        pulse.progress = 0;
        pulse.connIdx = Math.floor(Math.random() * connections.length);
      }

      const conn = connections[pulse.connIdx];
      const mesh = pulseMeshRefs.current[idx];
      if (conn && mesh) {
        const p1 = initialNodes[conn[0]];
        const p2 = initialNodes[conn[1]];
        if (p1 && p2) {
          mesh.position.lerpVectors(p1, p2, pulse.progress);
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Deep Teal Synaptic Connection Threads */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          color="#0d9488"
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Porcelain White Glowing Neural Nodes */}
      {initialNodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[idx % 4 === 0 ? 0.11 : 0.075, 12, 12]} />
          <meshBasicMaterial
            color={idx % 3 === 0 ? '#ffffff' : '#ccfbf1'}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}

      {/* Synaptic Data Flow Pulses (Electrical Signal Packets) */}
      {pulses.map((_, idx) => (
        <mesh
          key={idx}
          ref={(el) => (pulseMeshRefs.current[idx] = el)}
        >
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={1.0}
          />
        </mesh>
      ))}
    </group>
  );
};

// 2. Ambient Porcelain & Teal Stardust Field with Vertical Scroll Parallax
const NeuralStardust = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollYRef = useRef(0);
  const count = 480;

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

    const white = new THREE.Color('#ffffff');
    const teal = new THREE.Color('#14b8a6');
    const aquamarine = new THREE.Color('#5eead4');
    const temp = new THREE.Color();

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const r = Math.random();
      if (r < 0.5) temp.copy(white);
      else if (r < 0.8) temp.copy(teal);
      else temp.copy(aquamarine);

      cols[i * 3] = temp.r;
      cols[i * 3 + 1] = temp.g;
      cols[i * 3 + 2] = temp.b;
    }

    return [pos, cols];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.012;
      pointsRef.current.rotation.x += delta * 0.006;

      const targetY = scrollYRef.current * 0.0008;
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        targetY,
        0.05
      );

      pointsRef.current.rotation.z = mouseState.x * 0.035;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const GlobalNeuralTealCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none overflow-hidden select-none">
      {/* Deep Teal Background with Layered Porcelain Radiance */}
      <div className="absolute inset-0 bg-[#011414]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(20,184,166,0.24)_0%,rgba(13,78,77,0.18)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(45,212,191,0.14)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(94,234,212,0.16)_0%,transparent_55%)] pointer-events-none" />

      {/* 3D WebGL Neural Scene */}
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
          <ambientLight intensity={0.7} color="#042f2e" />
          <pointLight position={[6, 6, 6]} intensity={3.5} color="#ffffff" />
          <pointLight position={[-6, -4, 4]} intensity={2.8} color="#2dd4bf" />
          <pointLight position={[0, 3, 7]} intensity={2.2} color="#5eead4" />

          {/* Interactive Neural Network & Synaptic Data Flows */}
          <NeuralNetwork />

          {/* Stardust Field */}
          <NeuralStardust />
        </Suspense>
      </Canvas>

      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#011414]/30 via-transparent to-[#011414]/70 pointer-events-none" />
    </div>
  );
};

export default GlobalNeuralTealCanvas;
