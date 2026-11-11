import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Global mouse tracker for responsive cursor interaction
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

// 1. Drifting Bio-Luminescent Spores & Volcanic Ash Field
const BioSporeField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const sporeCount = 480;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(sporeCount * 3);
    const cols = new Float32Array(sporeCount * 3);

    const emeraldBright = new THREE.Color('#34d399');
    const ivyDeep = new THREE.Color('#059669');
    const ashCharcoal = new THREE.Color('#27272a');
    const tempCol = new THREE.Color();

    for (let i = 0; i < sporeCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 42;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 42;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 26 - 2;

      const r = Math.random();
      if (r < 0.5) {
        tempCol.copy(emeraldBright);
      } else if (r < 0.8) {
        tempCol.copy(ivyDeep);
      } else {
        tempCol.copy(ashCharcoal);
      }

      cols[i * 3] = tempCol.r;
      cols[i * 3 + 1] = tempCol.g;
      cols[i * 3 + 2] = tempCol.b;
    }

    return [pos, cols];
  }, [sporeCount]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      // Gentle biological upward drift and cosmic rotation
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.x += delta * 0.008;

      const posAttr = pointsRef.current.geometry.attributes.position;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < sporeCount; i++) {
        arr[i * 3 + 1] += delta * 0.12;
        if (arr[i * 3 + 1] > 21) {
          arr[i * 3 + 1] = -21;
        }
      }
      posAttr.needsUpdate = true;
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
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// 2. Interactive Bio-Digital Cyber-Vines & Neural Cells Mesh
const CyberVinesMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const cellsRef = useRef<THREE.Points>(null);
  const pulsesRef = useRef<THREE.Points>(null);

  const cellCount = 145;
  const maxDistance = 3.4;

  const [cellData, lineGeometry, pulseData] = useMemo(() => {
    const positions = new Float32Array(cellCount * 3);
    const basePositions = new Float32Array(cellCount * 3);
    const cellColors = new Float32Array(cellCount * 3);

    const ivyHighlight = new THREE.Color('#6ee7b7');
    const ivyEmerald = new THREE.Color('#10b981');
    const ivyDeep = new THREE.Color('#047857');

    for (let i = 0; i < cellCount; i++) {
      // Organic branching distribution clustered in helix-like spiral volumes
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 8.8;

      const x = r * Math.sin(phi) * Math.cos(theta) * 1.5;
      const y = r * Math.sin(phi) * Math.sin(theta) * 1.2;
      const z = r * Math.cos(phi) * 0.95;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      const p = Math.random();
      const c = p < 0.4 ? ivyHighlight : p < 0.8 ? ivyEmerald : ivyDeep;
      cellColors[i * 3] = c.r;
      cellColors[i * 3 + 1] = c.g;
      cellColors[i * 3 + 2] = c.b;
    }

    // Connect organic cells with cyber-vine threads
    const lineIndices: number[] = [];
    for (let i = 0; i < cellCount; i++) {
      for (let j = i + 1; j < cellCount; j++) {
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

    // Bio-data action potential pulses
    const pulseCount = 42;
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
        speed: 0.007 + Math.random() * 0.01
      });
      pulsePos[p * 3] = positions[a * 3];
      pulsePos[p * 3 + 1] = positions[a * 3 + 1];
      pulsePos[p * 3 + 2] = positions[a * 3 + 2];
    }

    return [
      { positions, basePositions, cellColors },
      { geom, lineIndices },
      { pulsePos, pulseMeta }
    ];
  }, [cellCount, maxDistance]);

  useFrame((state) => {
    // Responsive cursor lerp
    mouseState.x = THREE.MathUtils.lerp(mouseState.x, mouseState.targetX, 0.06);
    mouseState.y = THREE.MathUtils.lerp(mouseState.y, mouseState.targetY, 0.06);

    const time = state.clock.getElapsedTime();

    // 1. Organic vegetative swaying of bio-digital cells
    const pos = cellData.positions;
    const base = cellData.basePositions;
    for (let i = 0; i < cellCount; i++) {
      const offset = i * 0.38;
      // Multi-harmonic biological breathing sway
      const swayX = Math.sin(time * 0.8 + offset) * 0.35 + Math.sin(time * 1.4 + offset * 0.5) * 0.12;
      const swayY = Math.cos(time * 0.7 + offset * 1.1) * 0.3 + Math.cos(time * 1.2 + offset * 0.7) * 0.1;
      const swayZ = Math.sin(time * 0.6 + offset * 0.8) * 0.25;

      pos[i * 3] = base[i * 3] + swayX;
      pos[i * 3 + 1] = base[i * 3 + 1] + swayY;
      pos[i * 3 + 2] = base[i * 3 + 2] + swayZ;
    }

    if (cellsRef.current) {
      cellsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // 2. Cyber-vine line updates
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

    // 3. Traveling action-potential pulses along cyber-vines
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

    // 4. Fluid cursor interaction and global gentle sway
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseState.x * 0.38,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseState.y * 0.28,
        0.05
      );
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        mouseState.x * 0.7,
        0.05
      );
      groupRef.current.position.y = Math.sin(time * 0.6) * 0.22 + mouseState.y * 0.45;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Curving Ivy Green Cyber-Vine Threads */}
      <lineSegments ref={linesRef} geometry={lineGeometry.geom}>
        <lineBasicMaterial
          color="#10b981"
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Glowing Bio-Digital Cells (Nodes) */}
      <points ref={cellsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[cellData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[cellData.cellColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.17}
          vertexColors
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Bio-Digital Data Pulse Sparks */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulseData.pulsePos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.25}
          color="#ecfdf5"
          transparent
          opacity={1.0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export const GlobalBioDigitalCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden bg-[#050707]">
      {/* Volcanic Black & Toxic Ivy Radial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(16,185,129,0.20)_0%,rgba(5,150,105,0.10)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[750px] bg-emerald-500/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[650px] h-[650px] bg-teal-900/25 rounded-full blur-[190px] pointer-events-none" />

      {/* 3D WebGL Canvas fixed to viewport background */}
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} color="#064e3b" />
          <pointLight position={[6, 6, 6]} intensity={3.0} color="#34d399" />
          <pointLight position={[-6, -4, 4]} intensity={2.2} color="#10b981" />
          <pointLight position={[0, 4, 8]} intensity={2.5} color="#a7f3d0" />

          {/* Deep Spore & Volcanic Ash Field */}
          <BioSporeField />

          {/* Interactive Cyber-Vines & Bio-Digital Mesh */}
          <CyberVinesMesh />
        </Suspense>
      </Canvas>

      {/* Matte Volcanic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />
    </div>
  );
};

export default GlobalBioDigitalCanvas;
