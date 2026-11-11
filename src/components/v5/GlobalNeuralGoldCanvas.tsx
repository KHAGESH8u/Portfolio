import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 1. Continuous Ethereal Cosmic Starfield (Deep Background)
const StardustField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollYRef = useRef(0);
  const starCount = 450;

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

    const goldColor = new THREE.Color('#eed98d');
    const champagneColor = new THREE.Color('#fcf8e8');
    const aubergineColor = new THREE.Color('#9d4edd');
    const tempCol = new THREE.Color();

    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 36;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 36;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 22;

      const rand = Math.random();
      if (rand < 0.55) {
        tempCol.copy(goldColor);
      } else if (rand < 0.82) {
        tempCol.copy(champagneColor);
      } else {
        tempCol.copy(aubergineColor);
      }

      cols[i * 3] = tempCol.r;
      cols[i * 3 + 1] = tempCol.g;
      cols[i * 3 + 2] = tempCol.b;
    }

    return [pos, cols];
  }, [starCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.012;
      pointsRef.current.rotation.x += delta * 0.006;

      const targetY = scrollYRef.current * 0.001;
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        targetY,
        0.05
      );

      const targetRotZ = state.pointer.x * 0.04;
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        targetRotZ,
        0.05
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// 2. Glowing Antique Gold Fluid Neural Mesh & Synaptic Constellation
interface NeuralMeshProps {
  mouseState: { x: number; y: number };
}

const NeuralGoldConstellation: React.FC<NeuralMeshProps> = ({ mouseState }) => {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodesRef = useRef<THREE.Points>(null);
  const pulsesRef = useRef<THREE.Points>(null);

  const nodeCount = 130;
  const maxDistance = 3.2;

  // Generate initial node positions, velocities, and golden palettes
  const [nodeData, lineGeometry, pulseData] = useMemo(() => {
    const positions = new Float32Array(nodeCount * 3);
    const basePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const velocities = new Float32Array(nodeCount * 3);

    const goldPrimary = new THREE.Color('#eed98d');
    const goldSpecular = new THREE.Color('#fcf8e8');
    const goldDeep = new THREE.Color('#d4af37');

    for (let i = 0; i < nodeCount; i++) {
      // Natural organic ellipsoid distribution focused in upper-mid space
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 8.5;

      const x = r * Math.sin(phi) * Math.cos(theta) * 1.5;
      const y = r * Math.sin(phi) * Math.sin(theta) * 1.1 + 0.5;
      const z = (r * Math.cos(phi)) * 0.9 - 1.0;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      // Gentle organic drift speeds
      velocities[i * 3] = (Math.random() - 0.5) * 0.006;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.006;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004;

      const pick = Math.random();
      const col = pick < 0.6 ? goldPrimary : pick < 0.85 ? goldSpecular : goldDeep;
      nodeColors[i * 3] = col.r;
      nodeColors[i * 3 + 1] = col.g;
      nodeColors[i * 3 + 2] = col.b;
    }

    // Build line segments between nearby nodes
    const lineIndices: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDistance) {
          lineIndices.push(i, j);
        }
      }
    }

    const linePositions = new Float32Array(lineIndices.length * 3);
    for (let k = 0; k < lineIndices.length; k++) {
      const idx = lineIndices[k];
      linePositions[k * 3] = positions[idx * 3];
      linePositions[k * 3 + 1] = positions[idx * 3 + 1];
      linePositions[k * 3 + 2] = positions[idx * 3 + 2];
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    // Data flow action-potential pulses
    const pulseCount = 36;
    const pulsePos = new Float32Array(pulseCount * 3);
    const pulseMeta: { lineA: number; lineB: number; progress: number; speed: number }[] = [];

    const linePairCount = lineIndices.length / 2;
    for (let p = 0; p < pulseCount; p++) {
      const pairIdx = Math.floor(Math.random() * (linePairCount || 1));
      const a = lineIndices[pairIdx * 2] || 0;
      const b = lineIndices[pairIdx * 2 + 1] || 1;
      pulseMeta.push({
        lineA: a,
        lineB: b,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.008
      });
      pulsePos[p * 3] = positions[a * 3];
      pulsePos[p * 3 + 1] = positions[a * 3 + 1];
      pulsePos[p * 3 + 2] = positions[a * 3 + 2];
    }

    return [
      { positions, basePositions, nodeColors, velocities },
      { geom, lineIndices },
      { pulsePos, pulseMeta }
    ];
  }, [nodeCount, maxDistance]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Gently animate node positions with sinusoidal wave turbulence
    const pos = nodeData.positions;
    const base = nodeData.basePositions;
    for (let i = 0; i < nodeCount; i++) {
      const offset = i * 0.35;
      pos[i * 3] = base[i * 3] + Math.sin(time * 0.6 + offset) * 0.28;
      pos[i * 3 + 1] = base[i * 3 + 1] + Math.cos(time * 0.5 + offset * 1.3) * 0.24;
      pos[i * 3 + 2] = base[i * 3 + 2] + Math.sin(time * 0.4 + offset * 0.8) * 0.2;
    }

    if (nodesRef.current) {
      nodesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // 2. Update line segments connecting active nodes
    if (linesRef.current) {
      const linePosAttr = linesRef.current.geometry.attributes.position;
      const linePositions = linePosAttr.array as Float32Array;
      const indices = lineGeometry.lineIndices;

      for (let k = 0; k < indices.length; k++) {
        const idx = indices[k];
        linePositions[k * 3] = pos[idx * 3];
        linePositions[k * 3 + 1] = pos[idx * 3 + 1];
        linePositions[k * 3 + 2] = pos[idx * 3 + 2];
      }
      linePosAttr.needsUpdate = true;
    }

    // 3. Update traveling action-potential pulses along synapses
    if (pulsesRef.current) {
      const pulsePosAttr = pulsesRef.current.geometry.attributes.position;
      const pArr = pulsePosAttr.array as Float32Array;
      const meta = pulseData.pulseMeta;

      for (let p = 0; p < meta.length; p++) {
        const item = meta[p];
        item.progress += item.speed;
        if (item.progress > 1.0) {
          item.progress = 0;
          const pairIdx = Math.floor(Math.random() * (lineGeometry.lineIndices.length / 2 || 1));
          item.lineA = lineGeometry.lineIndices[pairIdx * 2] || 0;
          item.lineB = lineGeometry.lineIndices[pairIdx * 2 + 1] || 1;
        }

        const aX = pos[item.lineA * 3];
        const aY = pos[item.lineA * 3 + 1];
        const aZ = pos[item.lineA * 3 + 2];

        const bX = pos[item.lineB * 3];
        const bY = pos[item.lineB * 3 + 1];
        const bZ = pos[item.lineB * 3 + 2];

        pArr[p * 3] = aX + (bX - aX) * item.progress;
        pArr[p * 3 + 1] = aY + (bY - aY) * item.progress;
        pArr[p * 3 + 2] = aZ + (bZ - aZ) * item.progress;
      }
      pulsePosAttr.needsUpdate = true;
    }

    // 4. Fluid cursor interaction and slow global rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseState.x * 0.25,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseState.y * 0.18,
        0.04
      );
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Synaptic connecting lines in subtle Antique Gold */}
      <lineSegments ref={linesRef} geometry={lineGeometry.geom}>
        <lineBasicMaterial
          color="#d4af37"
          transparent
          opacity={0.24}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Synaptic nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodeData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeData.nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.11}
          vertexColors
          transparent
          opacity={0.88}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Traveling pulses */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulseData.pulsePos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.17}
          color="#fcf8e8"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export const GlobalNeuralGoldCanvas: React.FC = () => {
  const [mouseState, setMouseState] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouseState({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
      {/* Deep Aubergine Base with Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-[#07020d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(98,34,165,0.30)_0%,rgba(55,18,95,0.18)_42%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[750px] bg-[#d4af37]/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[650px] h-[650px] bg-[#4a154b]/20 rounded-full blur-[190px] pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 0, 11], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.6} />
        <StardustField />
        <NeuralGoldConstellation mouseState={mouseState} />
      </Canvas>
    </div>
  );
};

export default GlobalNeuralGoldCanvas;
