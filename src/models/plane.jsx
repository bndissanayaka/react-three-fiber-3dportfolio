import React from "react";
import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = () => {
  const plane = useGLTF(planeScene);
  return (
    <mesh position={[0, -0.1, 3.4]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={plane.scene} />
    </mesh>
  );
};

export default Plane;
