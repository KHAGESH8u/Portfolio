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

// 1. Cosmic Stardust Background Field
const CosmicStarfield = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const starCount = 500;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    const cols = new Float32Array(starCount * 3);

    const gold = new THREE.Color('#eed98d');
    const champagne = new THREE.Color('#fcf8e8');
    const aubergine = new THREE.Color('#c084fc');
    const tempCol = new THREE.Color();

    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25 - 2;

      const r = Math.random();
      if (r < 0.55) {
        tempCol.copy(gold);
      } else if (r < 0.85) {
        tempCol.copy(champagne);
      } else {
        tempCol.copy(aubergine);
      }

      cols[i * 3] = tempCol.r;
      cols[i * 3 + 1] = tempCol.g;
      cols[i * 3 + 2] = tempCol.b;
    }

    return [pos, cols];
  }, [starCount]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.012;
      pointsRef.current.rotation.x += delta * 0.006;
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

// 2. High-Visibility Interactive Antique Gold Neural Data-Mesh
const NeuralGoldMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodesRef = useRef<THREE.Points>(null);
  const pulsesRef = useRef<THREE.Points>(null);

  const nodeCount = 150;
  const maxDistance = 3.3;

  const [nodeData, lineGeometry, pulseData] = useMemo(() => {
    const positions = new Float32Array(nodeCount * 3);
    const basePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);

    const goldBright = new THREE.Color('#fcf8e8');
    const goldPrimary = new THREE.Color('#eed98d');
    const goldDeep = new THREE.Color('#d4af37');

    for (let i = 0; i < nodeCount; i++) {
      // Natural spatial ellipsoid
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 9.0;

      const x = r * Math.sin(phi) * Math.cos(theta) * 1.5;
      const y = r * Math.sin(phi) * Math.sin(theta) * 1.15 + 0.2;
      const z = r * Math.cos(phi) * 0.95;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      const p = Math.random();
      const c = p < 0.35 ? goldBright : p < 0.75 ? goldPrimary : goldDeep;
      nodeColors[i * 3] = c.r;
      nodeColors[i * 3 + 1] = c.g;
      nodeColors[i * 3 + 2] = c.b;
    }

    // Connect nodes within maxDistance
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

    // Data Action-Potential Pulses
    const pulseCount = 45;
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
        speed: 0.006 + Math.random() * 0.009
      });
      pulsePos[p * 3] = positions[a * 3];
      pulsePos[p * 3 + 1] = positions[a * 3 + 1];
      pulsePos[p * 3 + 2] = positions[a * 3 + 2];
    }

    return [
      { positions, basePositions, nodeColors },
      { geom, lineIndices },
      { pulsePos, pulseMeta }
    ];
  }, [nodeCount, maxDistance]);

  useFrame((state) => {
    // Smooth mouse lerping
    mouseState.x = THREE.MathUtils.lerp(mouseState.x, mouseState.targetX, 0.06);
    mouseState.y = THREE.MathUtils.lerp(mouseState.y, mouseState.targetY, 0.06);

    const time = state.clock.getElapsedTime();

    // 1. Organic wave undulation of synaptic nodes
    const pos = nodeData.positions;
    const base = nodeData.basePositions;
    for (let i = 0; i < nodeCount; i++) {
      const offset = i * 0.42;
      pos[i * 3] = base[i * 3] + Math.sin(time * 0.7 + offset) * 0.32;
      pos[i * 3 + 1] = base[i * 3 + 1] + Math.cos(time * 0.6 + offset * 1.2) * 0.28;
      pos[i * 3 + 2] = base[i * 3 + 2] + Math.sin(time * 0.5 + offset * 0.9) * 0.24;
    }

    if (nodesRef.current) {
      nodesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // 2. Line segment updates
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

    // 3. Traveling action potential pulses
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

    // 4. Cursor reactivity and 3D fluid tilt
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseState.x * 0.35,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseState.y * 0.25,
        0.05
      );
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        mouseState.x * 0.6,
        0.05
      );
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2 + mouseState.y * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* High-visibility Antique Gold connecting lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry.geom}>
        <lineBasicMaterial
          color="#d4af37"
          transparent
          opacity={0.42}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Radiant golden synaptic nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodeData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeData.nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          vertexColors
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Action-potential pulses */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulseData.pulsePos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.24}
          color="#ffffff"
          transparent
          opacity={1.0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export const GlobalNeuralGoldCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden bg-[#07020d]">
      {/* Deep Aubergine Ambient Radial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(126,34,206,0.35)_0%,rgba(55,18,95,0.22)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[750px] bg-[#d4af37]/12 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[650px] h-[650px] bg-[#581c87]/25 rounded-full blur-[190px] pointer-events-none" />

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
          <ambientLight intensity={0.8} color="#2e1065" />
          <pointLight position={[6, 6, 6]} intensity={3.0} color="#eed98d" />
          <pointLight position={[-6, -4, 4]} intensity={2.2} color="#d4af37" />
          <pointLight position={[0, 4, 8]} intensity={2.5} color="#fcf8e8" />

          {/* Deep Cosmic Starfield */}
          <CosmicStarfield />

          {/* High-Visibility Antique Gold Neural Mesh */}
          <NeuralGoldMesh />
        </Suspense>
      </Canvas>

      {/* Gentle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
};

export default GlobalNeuralGoldCanvas;
