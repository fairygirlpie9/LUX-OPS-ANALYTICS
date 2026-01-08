import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron } from '@react-three/drei';
import { Mesh } from 'three';
import { LUX_GREEN } from '../constants';

// Add missing type definitions for Three.js elements in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
    }
  }
}

const AnimatedIcosahedron = () => {
  const outerRef = useRef<Mesh>(null);
  const innerRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Outer Sphere Animation
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.2;
      outerRef.current.rotation.x += delta * 0.05;
      
      // Gentle floating pulsing effect
      outerRef.current.scale.setScalar(2.2 + Math.sin(t * 0.5) * 0.1);
    }

    // Inner Sphere Animation (Counter-rotating)
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.3; // Rotate opposite
      innerRef.current.rotation.x -= delta * 0.1;
      
      // Faster, tighter pulse
      innerRef.current.scale.setScalar(1.2 + Math.cos(t * 0.8) * 0.05);
    }
  });

  return (
    <>
      {/* Outer Shell */}
      <Icosahedron args={[1, 0]} ref={outerRef}>
        <meshStandardMaterial
          color="black"
          emissive={LUX_GREEN}
          emissiveIntensity={0.8}
          wireframe={true}
          transparent
          opacity={1}
        />
      </Icosahedron>

      {/* Inner Core */}
      <Icosahedron args={[1, 0]} ref={innerRef}>
        <meshStandardMaterial
          color={LUX_GREEN}
          emissive={LUX_GREEN}
          emissiveIntensity={0.5}
          wireframe={true}
          transparent
          opacity={0.3}
          side={2} // DoubleSide
        />
      </Icosahedron>
    </>
  );
};

const ThreeSphere: React.FC = () => {
  return (
    <div className="w-full h-full relative group cursor-crosshair bg-lux-black/50 backdrop-blur-sm">
       {/* Corner Accents */}
       <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-lux-green z-20"></div>
       <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-lux-green z-20"></div>
       <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-lux-green z-20"></div>
       <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-lux-green z-20"></div>

       {/* Overlay Data */}
       <div className="absolute top-4 left-4 z-10 font-mono text-[10px] text-lux-green/70 pointer-events-none">
        <div>RENDER_TARGET // CANVAS</div>
        <div>CTX: WEBGL2</div>
      </div>

      <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] text-lux-green/70 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-lux-green rounded-full animate-pulse"></span>
          FPS: 60
        </div>
        <div>VERTICES: 24</div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] text-gray-500 pointer-events-none">
        DRAG TO ROTATE // SCROLL TO ZOOM
      </div>

      <Canvas camera={{ position: [0, 0, 6] }}>
        {/* Cool Lighting Setup */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={LUX_GREEN} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="cyan" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} color="white" />
        
        <AnimatedIcosahedron />
        <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeSphere;