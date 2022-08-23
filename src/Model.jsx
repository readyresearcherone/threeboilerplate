import React from "react"
import {useGLTF, useAspect} from "@react-three/drei"
import './App.css';


  

function Model(props) {



  const { nodes, materials } = useGLTF("/suzanne.glb");
  return (
    <group {...props} dispose={null} 

    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
      
      />
    </group>
  );
}

useGLTF.preload("/suzanne.glb");

export default Model;