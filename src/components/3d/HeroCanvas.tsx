import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Neural network lattice with dynamic synaptic connections & particles
const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const coreRef = useRef<THREE.Group>(null);

  const particleCount = 120;
  const connectionDistance = 3.2;

  // Generate node positions in 3D space
  const [positions, initialPositions, connections] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const initPos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initPos[i * 3] = x;
      initPos[i * 3 + 1] = y;
      initPos[i * 3 + 2] = z;
    }

    // Precalculate connections
    const lineIndices: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDistance) {
          lineIndices.push(i, j);
        }
      }
    }

    return [pos, initPos, new Uint16Array(lineIndices)];
  }, []);

  // Node particle colors (cyan to deep neon purple gradient)
  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color('#00f2fe'); // Cyan
    const colorB = new THREE.Color('#9d4edd'); // Violet
    const tempColor = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      const ratio = i / particleCount;
      tempColor.lerpColors(colorA, colorB, ratio);
      cols[i * 3] = tempColor.r;
      cols[i * 3 + 1] = tempColor.g;
      cols[i * 3 + 2] = tempColor.b;
    }
    return cols;
  }, []);

  // Synapse line colors matching connected nodes
  const linePositions = useMemo(() => {
    const linePos = new Float32Array(connections.length * 3);
    for (let i = 0; i < connections.length; i++) {
      const idx = connections[i];
      linePos[i * 3] = positions[idx * 3];
      linePos[i * 3 + 1] = positions[idx * 3 + 1];
      linePos[i * 3 + 2] = positions[idx * 3 + 2];
    }
    return linePos;
  }, [connections, positions]);

  // Frame animation loop with mouse pointer reactive repulsion
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 4;
    const mouseY = state.pointer.y * 4;

    if (coreRef.current) {
      // Smooth organic rotation
      coreRef.current.rotation.y += delta * 0.12;
      coreRef.current.rotation.x = Math.sin(t * 0.2) * 0.15 + state.pointer.y * 0.2;
      coreRef.current.rotation.z = Math.cos(t * 0.15) * 0.1 + state.pointer.x * 0.2;
    }

    if (pointsRef.current && linesRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const linePosAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;

      // Particle wave motion & mouse repulsion
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        const basePosX = initialPositions[ix];
        const basePosY = initialPositions[iy];
        const basePosZ = initialPositions[iz];

        // Complex harmonic ripple wave
        const wave = Math.sin(t * 1.5 + basePosX * 0.5) * Math.cos(t * 1.2 + basePosZ * 0.5) * 0.25;

        // Mouse distance check (repulsion in projected space)
        const dx = basePosX - mouseX;
        const dy = basePosY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let repelX = 0;
        let repelY = 0;
        if (dist < 3.5 && dist > 0.01) {
          const force = (3.5 - dist) * 0.35;
          repelX = (dx / dist) * force;
          repelY = (dy / dist) * force;
        }

        posAttr.setXYZ(
          i,
          basePosX + repelX,
          basePosY + wave + repelY,
          basePosZ + Math.sin(t * 0.8 + i) * 0.15
        );
      }
      posAttr.needsUpdate = true;

      // Update lines based on updated positions
      const currentPos = posAttr.array as Float32Array;
      for (let i = 0; i < connections.length; i++) {
        const nodeIdx = connections[i];
        linePosAttr.setXYZ(
          i,
          currentPos[nodeIdx * 3],
          currentPos[nodeIdx * 3 + 1],
          currentPos[nodeIdx * 3 + 2]
        );
      }
      linePosAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Neural Synaptic Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Interconnecting Synapse Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00f2fe"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Center Quantum Singularity Glow */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial
          color="#9d4edd"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          wireframe
        />
      </mesh>
    </group>
  );
};

// Background reactive floating ambient particles
const AmbientDust = () => {
  const dustRef = useRef<THREE.Points>(null);
  const count = 300;

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return [pos];
  }, [count]);

  useFrame((_, delta) => {
    if (dustRef.current) {
      dustRef.current.rotation.y -= delta * 0.03;
      dustRef.current.rotation.x -= delta * 0.015;
    }
  });

  return (
    <points ref={dustRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f2fe"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const HeroCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f2fe" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#9d4edd" />
          <NeuralNetwork />
          <AmbientDust />
        </Suspense>
      </Canvas>
      {/* Bottom fade out to smoothly blend canvas into page content */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent pointer-events-none" />
    </div>
  );
};
