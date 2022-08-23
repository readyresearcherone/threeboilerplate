
import React,  { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls} from "@react-three/drei"
import './App.css';
import Model from './Model.jsx';

export function App() {




  return (

    
    <div id="model">
      <Canvas shadows 
      
      camera={{ 
        position: [2, 2, 3.5], 
        fov: 50,
        aspect: window.innerWidth / window.innerHeight
        
        }}
        
        
        >
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Model 
        
          position={[0,0,0] 
          }
       />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.55} scale={10} blur={1.5} far={0.8} />
        </Suspense>
        <OrbitControls
        // minPolarAngle={Math.PI/8} 
        // maxPolarAngle={Math.PI/2} 
         //enableZoom={false}
         // enablePan={false} 
          
          />
 
      </Canvas>
   
    </div>
  );
}

export default App;
