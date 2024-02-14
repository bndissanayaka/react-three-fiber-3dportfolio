import React from "react";
import birdScene from "../assets/3d/bird.glb";
import { useGLTF } from "@react-three/drei";

const Bird = () => {
  const bird = useGLTF(birdScene);
  return (
    <mesh position={[0, -0.5, 3.4]} scale={[0.0005, 0.0005, 0.0005]}>
      <primitive object={bird.scene} />
    </mesh>
  );
};

export default Bird;
