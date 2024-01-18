import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  MapControls,
  Svg,
  Fisheye,
  Image,
  PerformanceMonitor,
  Stats,
  AdaptiveDpr,
  Text,
} from "@react-three/drei";
import Grid from "./components/Grid";
import rag1 from "./assets/rags-01.svg";
import rag2 from "./assets/rags-02.svg";
import img1 from "./assets/395426029_845914183578027_1496165799821364810_n.jpg";

function App() {
  return (
    <Canvas dpr={[0.5, 2]} flat camera={{ position: [0, 30, 0] }} gl={{ preserveDrawingBuffer: true }}>
      <AdaptiveDpr pixelated />
      <Stats />
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)}></PerformanceMonitor>
      <Fisheye zoom={1}>
        <Suspense>
          <color attach="background" args={["#000"]} />
          <ContactShadows position={[0, 0, 0]} scale={100} frames={1} color="#000" />
          <Grid />
          <MapControls dampingFactor={0.08} enableZoom={false} enableRotate={false} />
          <Environment preset="apartment" background={false} />

          <Svg src={rag2} scale={0.2} position={[-21, 0.1, -10]} rotation={[-Math.PI / 2, 0, 0]} />
          <Image url={img1} position={[0, 0, 40]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 30, 1]} />
          <Text maxWidth={10} position={[0, 0, 15]} rotation={[-Math.PI / 2, 0, 0]} scale={2} characters="abcdefghijklmnopqrstuvwxyz0123456789!">
            hello world! We are rag! yeyee rag
          </Text>
        </Suspense>
      </Fisheye>
    </Canvas>
  );
}

export default App;
