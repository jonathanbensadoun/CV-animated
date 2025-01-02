// "use client";

// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// export function CatModel({ scrollProgress }: { scrollProgress: number }) {
//   const group = useRef<THREE.Group>(null);

//   useFrame((state) => {
//     if (group.current) {
//       // Rotation basée sur le scroll
//       group.current.rotation.y = THREE.MathUtils.lerp(
//         0,
//         Math.PI * 2,
//         scrollProgress
//       );
//       // Animation de rebond
//       group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
//     }
//   });

//   return (
//     <group ref={group}>
//       {/* Corps */}
//       <mesh position={[0, 0, 0]}>
//         <sphereGeometry args={[0.5, 32, 32]} />
//         <meshStandardMaterial color="#808080" />
//       </mesh>
//       {/* Tête */}
//       <mesh position={[0.6, 0.2, 0]}>
//         <sphereGeometry args={[0.3, 32, 32]} />
//         <meshStandardMaterial color="#808080" />
//       </mesh>
//       {/* Oreilles */}
//       <mesh position={[0.75, 0.5, 0.15]}>
//         <coneGeometry args={[0.1, 0.2, 32]} />
//         <meshStandardMaterial color="#808080" />
//       </mesh>
//       <mesh position={[0.75, 0.5, -0.15]}>
//         <coneGeometry args={[0.1, 0.2, 32]} />
//         <meshStandardMaterial color="#808080" />
//       </mesh>
//       {/* Queue */}
//       <mesh position={[-0.6, 0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
//         <cylinderGeometry args={[0.05, 0.05, 0.5, 32]} />
//         <meshStandardMaterial color="#808080" />
//       </mesh>
//     </group>
//   );
// }
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function RocketModel({ scrollProgress }: { scrollProgress: number }) {
  const group = useRef<THREE.Group>(null);

  // Charger le modèle GLB
  const { scene } = useGLTF("/rocket.glb");

  useFrame((state) => {
    if (group.current) {
      // Rotation basée sur le scroll
      group.current.rotation.y = THREE.MathUtils.lerp(
        2.8,
        Math.PI * 3,
        scrollProgress
      );

      // Animation de rebond

      // Orientation initiale vers le bas
      group.current.rotation.x = Math.PI; // 180° pour regarder vers le bas
      // group.current.position.y = 1; // Déplacer la fusée vers le haut
      group.current.position.y =
        1.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
