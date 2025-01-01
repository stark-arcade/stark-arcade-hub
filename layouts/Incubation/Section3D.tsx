"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
function Model(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/assets/3d/barrel.glb");
  return <primitive object={scene} {...props} />;
}
const Section3D = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-8">
      <div className="font-paladin text-[32px] ">
        {`What will you `}
        <span className="gradient_text bg-gradient-100"> buidl?</span>
      </div>
      <p>Embark on Your StarkNet Journey at Arcade Garden! 🌟 </p>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
      >
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={"sunset"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Section3D;
